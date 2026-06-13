"use client";

import React, { useState } from "react";
import {
    Zap,
    Download,
    Calendar,
    PieChart,
    BarChart3,
    Key,
    ChevronDown,
    Search,
    X,
    DownloadCloud,
    Info,
    RefreshCw,
    ChevronLeft
} from "lucide-react";

export default function EnvatoElementsPage() {
    const [url, setUrl] = useState("");

    // Mock data matching the screenshot
    const historyData = [
        { id: 1, url: "https://elements.envato.com/educational-UZHMDH9", date: "06.06.2026", time: "16:18" },
        { id: 2, url: "https://elements.envato.com/the-educational-KSQMEWL", date: "06.06.2026", time: "16:13" },
        { id: 3, url: "https://elements.envato.com/educational-8EKWVDV", date: "06.06.2026", time: "16:09" },
        { id: 4, url: "https://elements.envato.com/education-on-H97PAGB", date: "06.06.2026", time: "16:03" },
        { id: 5, url: "https://elements.envato.com/educational-CXJGDFN", date: "06.06.2026", time: "16:01" },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-12">

            {/* 1. Top Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Envato Main Card */}
                <div className="bg-gradient-to-br from-[#a3e635] to-[#7bb343] rounded-xl p-4 flex items-center justify-between shadow-lg relative overflow-hidden">
                    <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <Zap className="w-5 h-5 text-white fill-white" />
                        </div>
                        <h2 className="text-white font-bold text-lg">Envato Elements</h2>
                    </div>
                    <div className="flex flex-col space-y-1.5 relative z-10">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            <span>Active</span>
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider text-center border border-white/30">
                            Premium
                        </span>
                    </div>
                    {/* Abstract background shape */}
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Remaining Card */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-blue-500 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">50</p>
                        <p className="text-xs text-slate-400 mt-1">Remaining</p>
                    </div>
                    <Download className="w-12 h-12 text-[#2a2d4a] group-hover:text-blue-500/20 transition-colors relative z-10" />
                </div>

                {/* Service End Date */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-emerald-400 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">0 days</p>
                        <p className="text-xs text-slate-400 mt-1">Service End Date</p>
                    </div>
                    <Calendar className="w-12 h-12 text-[#2a2d4a] group-hover:text-emerald-400/20 transition-colors relative z-10" />
                </div>

                {/* Used/Period Limit */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-fuchsia-500 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">92/1000</p>
                        <p className="text-xs text-slate-400 mt-1">Used / Period Limit</p>
                    </div>
                    <PieChart className="w-12 h-12 text-[#2a2d4a] group-hover:text-fuchsia-500/20 transition-colors relative z-10" />
                </div>

                {/* All Time Downloads */}
                <div className="bg-[#1a1d36] border border-[#2a2d4a] border-t-2 border-t-cyan-400 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white">174</p>
                        <p className="text-xs text-slate-400 mt-1">All Time Downloads</p>
                    </div>
                    <BarChart3 className="w-12 h-12 text-[#2a2d4a] group-hover:text-cyan-400/20 transition-colors relative z-10" />
                </div>
            </div>

            {/* 2. Create Link Form Container */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-[#2a2d4a]">
                    <h2 className="text-sm font-bold text-white">Envato Elements</h2>
                </div>
                <div className="p-6">
                    <form className="flex flex-col sm:flex-row shadow-sm">
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Please enter the content URL."
                            className="flex-1 bg-[#1e213a] border border-[#2a2d4a] sm:rounded-l-md sm:rounded-r-none rounded-t-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#24284b] border border-[#2a2d4a] sm:border-l-0 sm:rounded-r-md sm:rounded-l-none rounded-b-md px-8 py-3 text-sm font-semibold text-slate-200 hover:bg-[#2d325a] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center justify-center"
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
                    <h3 className="text-sm font-bold text-slate-200">Get Token for Theme and Extensions</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-500" />
            </div>

            {/* 4. Download History Section */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl flex flex-col">

                {/* Header */}
                <div className="px-6 py-4 border-b border-[#2a2d4a] flex items-center justify-between bg-[#1e213a]">
                    <h2 className="text-base font-bold text-white">Download History</h2>
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm shadow-blue-500/20">
                        174 total records
                    </span>
                </div>

                {/* Filters/Controls */}
                <div className="p-4 border-b border-[#2a2d4a] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="flex items-end space-x-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-400 flex items-center space-x-1">
                                <Search className="w-3.5 h-3.5" /> <span>Search in URL:</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search within URL..."
                                    className="bg-[#24284b] border border-[#3b4168] rounded-md pl-3 pr-8 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-400 flex items-center space-x-1">
                                <Filter className="w-3.5 h-3.5" /> <span>Per page:</span>
                            </label>
                            <select className="bg-[#24284b] border border-[#3b4168] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none min-w-[120px]">
                                <option>5 records</option>
                                <option>10 records</option>
                                <option>20 records</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-xs font-medium text-slate-400 mb-2">
                        1 - 5 between (Total 174 records)
                    </div>
                </div>

                {/* List Items */}
                <div className="p-4 space-y-3 bg-[#171a2f]">
                    {historyData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1e213a] border border-[#2a2d4a] border-t-2 border-t-blue-500 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-[#24284b]"
                        >
                            <div className="flex items-center space-x-4 overflow-hidden">
                                <div className="w-8 h-8 rounded-full bg-[#2a2d4a] flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                                    {item.id}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-0.5">Content URL:</p>
                                    <a href={item.url} className="text-sm font-medium text-slate-200 hover:text-blue-400 truncate block">
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
                                <button className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-[#3b4168] rounded-md text-sm font-medium text-slate-300 hover:bg-[#2d325a] hover:text-white transition-colors">
                                    <DownloadCloud className="w-4 h-4" />
                                    <span>Re-download</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="border-t border-[#2a2d4a] p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-[#1e213a]">
                    <div className="text-xs text-slate-400 font-medium shrink-0">
                        Page<br /><span className="text-white font-bold text-sm">1 / 35</span>
                    </div>

                    {/* Scrollable pages container for exact matching */}
                    <div className="flex items-center space-x-1 overflow-x-auto custom-scrollbar pb-1 max-w-full">
                        <button className="w-8 h-8 flex items-center justify-center bg-[#24284b] border border-[#3b4168] rounded text-slate-400 hover:text-white shrink-0">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-blue-500 border border-blue-500 rounded text-white font-bold text-sm shrink-0">
                            1
                        </button>
                        {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                            <button key={num} className="w-8 h-8 flex items-center justify-center bg-[#24284b] border border-[#3b4168] rounded text-slate-300 hover:bg-[#2d325a] hover:text-white font-medium text-sm shrink-0">
                                {num}
                            </button>
                        ))}
                        <button className="w-8 h-8 flex items-center justify-center bg-[#24284b] border border-[#3b4168] rounded text-slate-300 hover:bg-[#2d325a] hover:text-white font-medium text-sm shrink-0">
                            ...
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-[#24284b] border border-[#3b4168] rounded text-slate-300 hover:bg-[#2d325a] hover:text-white font-medium text-sm shrink-0">
                            35
                        </button>
                    </div>
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

// Temporary icon fallback since Lucide's Filter icon name sometimes varies
const Filter = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);