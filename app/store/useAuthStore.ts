import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Role = 'USER' | 'ADMIN' | 'SUPER_ADMIN';

export interface User {
    id: string;
    email: string;
    name: string;
    role: Role;
    avatarUrl?: string;
    credits: number;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    setAuth: (user: User, token: string) => void;
    setAccessToken: (token: string) => void;
    updateUser: (data: Partial<User>) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            isAuthenticated: false,

            setAuth: (user, accessToken) =>
                set({ user, accessToken, isAuthenticated: true }),

            setAccessToken: (accessToken) =>
                set({ accessToken }),

            updateUser: (data) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...data } : null
                })),

            logout: () =>
                set({ user: null, accessToken: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage', // Persists user data (not token, token is handled via memory/refresh)
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
        }
    )
);