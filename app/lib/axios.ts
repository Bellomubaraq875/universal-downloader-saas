import axios from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

export const apiClient = axios.create({
    baseURL,
    withCredentials: true, // Crucial for secure HTTP-only cookies (refresh token)
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Attempt to refresh token using the secure HTTP-only cookie
                const { data } = await axios.post(
                    `${baseURL}/auth/refresh`,
                    {},
                    { withCredentials: true }
                );

                useAuthStore.getState().setAccessToken(data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

                return apiClient(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().logout();
                if (typeof window !== 'undefined') {
                    window.location.href = '/login';
                }
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);