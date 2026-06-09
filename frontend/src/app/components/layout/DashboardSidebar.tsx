"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Download,
    FileText,
    Key,
    CheckCircle2,
    Zap
} from "lucide-react";

const mainNav = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "License Download", href: "/license", icon: Download },
    { name: "Rules", href: "/rules", icon: FileText },
];

const services = [
    { name: "Envato Elements", color: "bg-[#7bb343]", icon: Zap },
    { name: "Freepik Premium", color: "bg-[#0f73ee]", icon: Zap },
    { name: "Flaticon", color: "bg-[#14b8a6]", icon: Zap },
    { name: "Epidemic Sound", color: "bg-[#f97316]", icon: Zap },
    { name: "MotionArray", color: "bg-[#6366f1]", icon: Zap },
    { name: "Shutterstock", color: "bg-[#ef4444]", icon: Zap },
    { name: "Vecteezy", color: "bg-[#f59e0b]", icon: Zap },
    { name: "UI8", color: "bg-[#a855f7]", icon: Zap },
    { name: "Ideogram", color: "bg-[#d946ef]", icon: Zap },
    { name: "Midjourney", color: "bg-[#1f2937]", icon: Zap },
    { name: "Nano Banana Pro", color: "bg-[#eab308]", icon: Zap },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-[#14162b] border-r border-[#2a2d4a] h-screen flex flex-col hidden lg:flex flex-shrink-0 text-slate-300">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-[#2a2d4a]">
                <div className="flex items-center space-x-2">
                    <div className="relative flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 absolute" />
                        <div className="w-8 h-8 border-2 border-dashed border-slate-400 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white flex items-baseline">
                        stok<span className="text-blue-500">ofisi</span>
                    </span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
                {/* Main Nav */}
                <div className="space-y-1">
                    {mainNav.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? "bg-[#24284b] text-white border border-[#3b4168]"
                                        : "hover:bg-[#1e213a] hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Using Key */}
                <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">Using Key</h4>
                    <Link
                        href="/using-key"
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1e213a] hover:text-white transition-colors"
                    >
                        <Key className="w-4 h-4" />
                        <span>Using Key</span>
                    </Link>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">Services</h4>
                    <div className="space-y-1.5">
                        {services.map((service) => (
                            <button
                                key={service.name}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 ${service.color}`}
                            >
                                <service.icon className="w-4 h-4 text-white/80" />
                                <span>{service.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}