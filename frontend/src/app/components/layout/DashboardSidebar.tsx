"use client";

import React, { useState } from "react";
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
import { UsingKeyModal } from "@/app/components/ui/UsingKeyModal";

const mainNav = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "License Download", href: "/license", icon: Download },
    { name: "Rules", href: "/rules", icon: FileText },
];

// Added proper routing slugs (hrefs) for every service
const services = [
    { name: "Envato Elements", href: "/services/envato-elements", color: "bg-[#7bb343]", icon: Zap },
    { name: "Freepik Premium", href: "/services/freepik-premium", color: "bg-[#0f73ee]", icon: Zap },
    { name: "Flaticon", href: "/services/flaticon", color: "bg-[#14b8a6]", icon: Zap },
    { name: "Epidemic Sound", href: "/services/epidemic-sound", color: "bg-[#f97316]", icon: Zap },
    { name: "MotionArray", href: "/services/motion-array", color: "bg-[#6366f1]", icon: Zap },
    { name: "Shutterstock", href: "/services/shutterstock", color: "bg-[#ef4444]", icon: Zap },
    { name: "Vecteezy", href: "/services/vecteezy", color: "bg-[#f59e0b]", icon: Zap },
    { name: "UI8", href: "/services/ui8", color: "bg-[#a855f7]", icon: Zap },
    { name: "Ideogram", href: "/services/ideogram", color: "bg-[#d946ef]", icon: Zap },
    { name: "Midjourney", href: "/services/midjourney", color: "bg-[#1f2937]", icon: Zap },
    { name: "Nano Banana Pro", href: "/services/nano-banana-pro", color: "bg-[#eab308]", icon: Zap },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

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
                    <button
                        onClick={() => setIsKeyModalOpen(true)}
                        className="w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1e213a] hover:text-white transition-colors"
                    >
                        <Key className="w-4 h-4" />
                        <span>Using Key</span>
                    </button>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">Services</h4>
                    <div className="space-y-1.5">
                        {services.map((service) => {
                            const isActive = pathname === service.href;
                            return (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 ${service.color} ${isActive ? "ring-2 ring-white ring-offset-2 ring-offset-[#14162b]" : "opacity-95"
                                        }`}
                                >
                                    <service.icon className="w-4 h-4 text-white/80 shrink-0" />
                                    <span className="truncate">{service.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <UsingKeyModal
                isOpen={isKeyModalOpen}
                onClose={() => setIsKeyModalOpen(false)}
            />
        </aside>
    );
}