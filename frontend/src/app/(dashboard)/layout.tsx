import React from "react";
import { DashboardSidebar } from "@/app/components/layout/DashboardSidebar";
import { DashboardHeader } from "@/app/components/layout/DashboardHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-[#0f1123] overflow-hidden text-slate-200">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col overflow-hidden relative">
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}