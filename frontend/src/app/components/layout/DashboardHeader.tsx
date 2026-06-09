"use client";

import React from "react";
import { Menu } from "lucide-react";

export function DashboardHeader() {
    return (
        <header className="h-16 flex items-center px-6 bg-[#0f1123]/80 backdrop-blur-md border-b border-[#2a2d4a] sticky top-0 z-10">
            <button className="text-slate-400 hover:text-white transition-colors">
                <Menu className="w-6 h-6" />
            </button>
        </header>
    );
}