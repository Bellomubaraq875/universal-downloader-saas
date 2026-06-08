"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn} from "../../lib/utils";
import {
    LayoutDashboard,
    DownloadCloud,
    History,
    Settings,
    CreditCard,
    Key,
    BarChart3
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const navItems = [
    { name: 'dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'downloads', href: '/downloads', icon: DownloadCloud },
    { name: 'history', href: '/history', icon: History },
    { name: 'analytics', href: '/analytics', icon: BarChart3 },
    { name: 'api_keys', href: '/api-keys', icon: Key },
    { name: 'billing', href: '/billing', icon: CreditCard },
    { name: 'settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const { t } = useTranslation();

    return (
        <aside className="w-64 border-r border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-screen sticky top-0 flex flex-col hidden lg:flex">
            <div className="h-16 flex items-center px-8 border-b border-border/50">
                <span className="text-lg font-semibold tracking-tight">UD SaaS</span>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 group",
                                isActive
                                    ? "bg-primary/5 text-primary shadow-sm"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                        >
                            <Icon className={cn(
                                "mr-3 h-4 w-4 transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                            )} />
                            {t(item.name)}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}