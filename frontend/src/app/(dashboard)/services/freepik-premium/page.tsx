"use client";

import React from "react";
import { Bot, AlertTriangle, Lock } from "lucide-react";

export default function FreepikPremiumPage() {
    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-12">

            {/* Top Status Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* Freepik Service Card (Passive State) */}
                <div className="col-span-1 bg-gradient-to-br from-[#5e6373] to-[#3b3e4a] rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden border border-[#4a4d5a]">
                    {/* Abstract geometric overlays to match the design's metallic feel */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rotate-45 transform"></div>
                        <div className="absolute right-20 -bottom-10 w-32 h-32 bg-black/10 rotate-12 transform"></div>
                    </div>

                    <div className="flex items-center space-x-4 relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
                            {/* Using a Bot icon as a fallback for the Freepik character */}
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-white font-bold text-lg">Freepik</h2>
                    </div>

                    <div className="relative z-10">
                        <span className="bg-[#4a4d5a]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center space-x-2 shadow-inner">
                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
                            <span>Passive</span>
                        </span>
                    </div>
                </div>

                {/* Warning Banner */}
                <div className="col-span-1 lg:col-span-2 bg-[#1a1d36] border border-[#2a2d4a] border-l-4 border-l-rose-500 rounded-xl p-5 flex items-center justify-between relative overflow-hidden shadow-lg">
                    <div className="relative z-10 space-y-1">
                        <h3 className="text-xl font-bold text-white tracking-wide">
                            Premium Service Inactive
                        </h3>
                        <p className="text-sm text-slate-300 font-medium">
                            Please contact your seller to use the service.
                        </p>
                    </div>

                    {/* Ghosted Watermark Icon */}
                    <AlertTriangle className="w-24 h-24 text-rose-500/5 absolute -right-4 -bottom-4 transform rotate-12 pointer-events-none" strokeWidth={3} />
                </div>

            </div>

            {/* Empty / Locked State Body */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl min-h-[400px] flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                <div className="w-20 h-20 bg-[#24284b] rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#2a2d4a] relative z-10">
                    <Lock className="w-8 h-8 text-slate-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-300 mb-2 relative z-10">Service Locked</h3>
                <p className="text-slate-500 text-sm max-w-md text-center relative z-10">
                    Your access to Freepik Premium is currently disabled. Once your seller activates your subscription, your download tools and history will appear here.
                </p>
            </div>

        </div>
    );
}