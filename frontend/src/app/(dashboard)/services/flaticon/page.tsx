"use client";

import React, { useState } from "react";
import {
    Shapes,
    Download,
    Calendar,
    PieChart,
    Image as ImageIcon,
    Key,
    ChevronDown,
    Search,
    X,
    DownloadCloud,
    Info,
    RefreshCw,
    ChevronLeft
} from "lucide-react";

export default function FlaticonPage() {
    const [url, setUrl] = useState("");

    // Mock data tailored for Flaticon
    const historyData = [
        { id: 1, url: "https://www.flaticon.com/free-icon/technology_11104", date: "06.06.2026", time: "16:18" },
        { id: 2, url: "https://www.flaticon.com/premium-icon/dashboard_3589", date: "06.06.2026", time: "16:13" },
        { id: 3, url: "https://www.flaticon.com/free-icon/user-interface_8932", date: "06.06.2026", time: "16:09" },
        { id: 4, url: "https://www.flaticon.com/premium-icon/vector-design_9021", date: "06.06.2026", time: "16:03" },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-12">

            {/* 1. Top Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Flaticon Main Card */}
                <div className="bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-xl p-4 flex items-center justify-between shadow-lg relative overflow-hidden">
                    <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-inner border border-white/30">
                            <Shapes className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-white font-bold text-lg">Flaticon</h2>
                    </div>
                    <div className="flex flex-col space-y-1.5 relative z-10">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                            <span>Active</span>
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider text-center border border-white/30">
                            Premium
                        </span>
                    </div>
                    {/* Abstract background shape */}
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute right-10 -top-10 w-24 h-24 bg-teal-900/10 rounded-full blur-xl transform rotate-45"></div>
                </div>

                {/* Daily Limit */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-teal-400 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">100</p>
                        <p className="text-xs text-slate-400 mt-1">Daily Limit</p>
                    </div>
                    <Download className="w-12 h-12 text-[#2a2d4a] group-hover:text-teal-400/20 transition-colors relative z-10" />
                </div>

                {/* Service End Date */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-blue-500 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">14 days</p>
                        <p className="text-xs text-slate-400 mt-1">Service End Date</p>
                    </div>
                    <Calendar className="w-12 h-12 text-[#2a2d4a] group-hover:text-blue-500/20 transition-colors relative z-10" />
                </div>

                {/* Used/Period Limit */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-purple-500 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">45/100</p>
                        <p className="text-xs text-slate-400 mt-1">Used Today</p>
                    </div>
                    <PieChart className="w-12 h-12 text-[#2a2d4a] group-hover:text-purple-500/20 transition-colors relative z-10" />
                </div>

                {/* SVG/PNG Split */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-amber-400 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">82</p>
                        <p className="text-xs text-slate-400 mt-1">Total Icons Downloaded</p>
                    </div>
                    <ImageIcon className="w-12 h-12 text-[#2a2d4a] group-hover:text-amber-400/20 transition-colors relative z-10" />
                </div>
            </div>

            {/* 2. Create Link Form Container */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-[#2a2d4a] flex items-center space-x-2">
                    <Shapes className="w-4 h-4 text-teal-400" />
                    <h2 className="text-sm font-bold text-white">Flaticon Downloader</h2>
                </div>
                <div className="p-6">
                    <form className="flex flex-col sm:flex-row shadow-sm">
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste the Flaticon icon or pack URL here..."
                            className="flex-1 bg-[#1e213a] border border-[#2a2d4a] sm:rounded-l-md sm:rounded-r-none rounded-t-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#24284b] border border-[#2a2d4a] sm:border-l-0 sm:rounded-r-md sm:rounded-l-none rounded-b-md px-8 py-3 text-sm font-semibold text-slate-200 hover:bg-[#14b8a6] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500 flex items-center justify-center"
                        >
                            Create Link
                        </button>
                    </form>
                </div>
            </div>

            {/* 3. Token Accordion */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#1e213a] transition-colors shadow-sm">
                <div className="flex items-center space-x-3">
                    <Key className="w-4 h-4 text-slate-400" />
                    <h3 className="text-sm font-bold text-slate-200">Get Token for Flaticon Extensions</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>

            {/* 4. Download History Section */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl flex flex-col">

                {/* Header */}
                <div className="px-6 py-4 border-b border-[#2a2d4a] flex items-center justify-between bg-[#1e213a]">
                    <h2 className="text-base font-bold text-white">Download History</h2>
                    <span className="bg-teal-500/20 text-teal-400 border border-teal-500/30 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        82 total records
                    </span>
                </div>

                {/* List Items */}
                <div className="p-4 space-y-3 bg-[#171a2f]">
                    {historyData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1e213a] border border-[#2a2d4a] border-t-2 border-t-teal-500 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-[#24284b]"
                        >
                            <div className="flex items-center space-x-4 overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-[#2a2d4a] flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                                    {item.id}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-0.5">Content URL:</p>
                                    <a href={item.url} className="text-sm font-medium text-slate-200 hover:text-teal-400 truncate block">
                                        {item.url}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 md:space-x-8 shrink-0">
                                <div className="text-right">
                                    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-0.5">Download Date:</p>
                                    <p className="text-sm font-bold text-white">{item.date}</p>
                                    <p className="text-xs text-slate-400">{item.time}</p>
                                </div>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-[#3b4168] rounded-md text-sm font-medium text-slate-300 hover:bg-[#2d325a] hover:text-white transition-colors group">
                                    <DownloadCloud className="w-4 h-4 group-hover:text-teal-400 transition-colors" />
                                    <span>Re-download</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="bg-[#171a2f] border-t border-[#2a2d4a] px-6 py-3 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-2">
                        <Info className="w-4 h-4" />
                        <span>Your download history is automatically saved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RefreshCw className="w-4 h-4" />
                        <span>Auto updates</span>
                    </div>
                </div>

            </div>

        </div>
    );
}