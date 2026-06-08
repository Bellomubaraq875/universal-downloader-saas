"use client";

import { useAuthStore } from '@/store/useAuthStore';
import { useTheme } from 'next-themes';
import { Moon, Sun, Bell, Search, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TopNav() {
    const { user } = useAuthStore();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="h-16 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-8 sticky top-0 z-40">
            <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md hidden md:flex items-center">
                    <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search downloads, services..."
                        className="w-full bg-muted/30 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
                    <Globe className="h-4 w-4" />
                </button>

                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
                    >
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                )}

                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50 relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                </button>

                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary/80 to-primary/20 border border-border flex items-center justify-center text-sm font-medium ml-4 cursor-pointer">
                    {user?.name?.charAt(0) || 'U'}
                </div>
            </div>
        </header>
    );
}