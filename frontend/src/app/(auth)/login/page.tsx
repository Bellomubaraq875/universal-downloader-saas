"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate authentication processing
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = "/dashboard";
        }, 1500);
    };

    return (
        <div className="min-h-screen flex w-full bg-[#1e213a] text-slate-200 font-sans">

            {/* LEFT SIDE - Illustration Panel */}
            <div className="hidden lg:flex w-1/2 bg-[#171a2f] flex-col items-center justify-center p-12 relative overflow-hidden">
                {/* Ambient glow effects */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl mix-blend-screen"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"></div>

                {/* Abstract 3D/Illustration Mockup */}
                <div className="relative z-10 w-full max-w-md aspect-square bg-slate-800/50 rounded-3xl border border-slate-700/50 shadow-2xl flex items-center justify-center backdrop-blur-sm p-8">
                    <div className="w-full h-full bg-slate-900/80 rounded-2xl border border-slate-700 flex flex-col items-center p-6 shadow-inner relative">
                        {/* Simulated Device Screen UI */}
                        <div className="w-20 h-20 bg-fuchsia-600 rounded-full mb-8 mt-4 flex items-center justify-center shadow-[0_0_30px_rgba(192,38,211,0.4)]">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <div className="w-3/4 h-4 bg-slate-700 rounded-full mb-6"></div>
                        <div className="w-full h-12 bg-fuchsia-600/20 border border-fuchsia-600/50 rounded-lg mb-4"></div>
                        <div className="w-full h-12 bg-slate-700 rounded-lg mb-6"></div>
                        <div className="w-1/2 h-10 bg-fuchsia-600 rounded-lg mt-auto"></div>

                        {/* Decorative Tech Gears */}
                        <div className="absolute -left-12 bottom-12 text-fuchsia-500">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                        </div>
                        <div className="absolute -right-8 top-12 text-slate-400">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-24 bg-[#1e213a] relative">

                <div className="w-full max-w-[420px] space-y-8">

                    {/* Logo Section */}
                    <div className="flex items-center space-x-2 mb-12">
                        <div className="relative flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-blue-500 absolute" />
                            <div className="w-10 h-10 border-2 border-dashed border-slate-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        </div>
                        <span className="text-3xl font-bold tracking-tight text-white flex items-baseline">
                            stok<span className="text-blue-500">ofisi</span>
                        </span>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm font-medium text-slate-300">
                                Username
                            </label>
                            <input
                                id="username"
                                type="email"
                                defaultValue="holasace@gmail.com"
                                required
                                className="w-full px-4 py-3 bg-[#e8f0fe] text-slate-900 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="password123"
                                    required
                                    className="w-full px-4 py-3 bg-[#e8f0fe] text-slate-900 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium pr-12"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 p-1 text-slate-500 hover:text-slate-800 transition-colors focus:outline-none"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end pt-1">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-[#292d47] hover:bg-[#34395a] text-white font-medium rounded-md transition-colors border border-[#3b4168] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1e213a] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    <div className="text-sm text-slate-400 mt-6">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-blue-500 hover:text-blue-400 hover:underline transition-colors font-medium">
                            Create now
                        </Link>
                    </div>

                    {/* Language Flags Section */}
                    <div className="flex items-center space-x-3 pt-8">
                        <button className="w-8 h-6 overflow-hidden rounded-[2px] border border-slate-600 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white">
                            <img src="https://flagcdn.com/w40/tr.png" alt="Turkish" className="w-full h-full object-cover" />
                        </button>
                        <button className="w-8 h-6 overflow-hidden rounded-[2px] border border-slate-600 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white">
                            <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-full h-full object-cover" />
                        </button>
                        <button className="w-8 h-6 overflow-hidden rounded-[2px] border border-slate-600 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white">
                            <img src="https://flagcdn.com/w40/es.png" alt="Spanish" className="w-full h-full object-cover" />
                        </button>
                        <button className="w-8 h-6 overflow-hidden rounded-[2px] border border-slate-600 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white">
                            <img src="https://flagcdn.com/w40/bd.png" alt="Bengali" className="w-full h-full object-cover" />
                        </button>
                    </div>

                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>
            </div>
        </div>
    );
}