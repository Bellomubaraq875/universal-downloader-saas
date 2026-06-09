"use client";

import React from "react";
import { Calendar, Download, RefreshCw, Zap } from "lucide-react";

export default function DashboardPage() {
    // Mock data to match the visual design
    const downloadHistory = [
        { id: "746748", service: "envatoelements", url: "https://elements.envato.com/educational-UZHMDH9", status: "Successful", time: "3 days 47 minutes before", date: "2026-06-06 16:18:10" },
        { id: "746738", service: "envatoelements", url: "https://elements.envato.com/the-educational-KSQMEW...", status: "Successful", time: "3 days 51 minutes before", date: "2026-06-06 16:13:34" },
        { id: "746729", service: "envatoelements", url: "https://elements.envato.com/educational-BEKWVDV", status: "Successful", time: "3 days 55 minutes before", date: "2026-06-06 16:09:46" },
        { id: "746715", service: "envatoelements", url: "https://elements.envato.com/education-on-H97PAGB", status: "Successful", time: "3 days 1 hour before", date: "2026-06-06 16:03:42" },
        { id: "746707", service: "envatoelements", url: "https://elements.envato.com/educational-CXJGDFN", status: "Successful", time: "3 days 1 hour before", date: "2026-06-06 16:01:13" },
        { id: "746690", service: "envatoelements", url: "https://elements.envato.com/education-ER3FER4", status: "Successful", time: "3 days 1 hour before", date: "2026-06-06 15:58:09" },
    ];

    return (
        <div className="space-y-6">

            {/* 1. Profile & Language Card */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-slate-700 rounded-full overflow-hidden border-2 border-[#2a2d4a]">
                        {/* Placeholder avatar */}
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ZeroTrade" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">Zero Trade</h2>
                        <p className="text-sm text-slate-400">holasace@gmail.com</p>
                        <p className="text-xs text-slate-500 mt-1">Member Since: 29.01.2026 13:37</p>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-medium mb-3 text-slate-300">Select Language</p>
                    <div className="flex items-center flex-wrap gap-2">
                        <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#24284b] border border-[#3b4168] rounded-md text-xs hover:bg-[#2d325a] transition-colors text-white">
                            <img src="https://flagcdn.com/w20/tr.png" alt="TR" className="w-4" /> <span>Türkçe</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#24284b] border border-[#3b4168] rounded-md text-xs hover:bg-[#2d325a] transition-colors text-white">
                            <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4" /> <span>English</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#24284b] border border-[#3b4168] rounded-md text-xs hover:bg-[#2d325a] transition-colors text-white">
                            <img src="https://flagcdn.com/w20/es.png" alt="ES" className="w-4" /> <span>Spanish</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#24284b] border border-[#3b4168] rounded-md text-xs hover:bg-[#2d325a] transition-colors text-white">
                            <img src="https://flagcdn.com/w20/bd.png" alt="BD" className="w-4" /> <span>বাংলা</span>
                        </button>
                        <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#24284b] border border-[#3b4168] rounded-md text-xs hover:bg-[#2d325a] transition-colors text-white">
                            <img src="https://flagcdn.com/w20/cn.png" alt="CN" className="w-4" /> <span>中文</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Service Status Card */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-[#7bb343] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#7bb343]/20">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Envato Elements</h3>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-400 mt-0.5">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Active</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#24284b] border border-[#3b4168] rounded-lg p-4 flex items-center space-x-4 relative overflow-hidden">
                        <div className="absolute left-0 bottom-0 w-full h-1 bg-blue-500"></div>
                        <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">3 days</p>
                            <p className="text-xs text-slate-400">Days Remaining</p>
                        </div>
                    </div>

                    <div className="bg-[#24284b] border border-[#3b4168] rounded-lg p-4 flex items-center space-x-4">
                        <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                            <RefreshCw className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white">0/50</p>
                            <p className="text-xs text-slate-400">Daily Limit Used</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Download History Table */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden flex flex-col">
                <div className="p-6 border-b border-[#2a2d4a]">
                    <h3 className="text-lg font-bold text-white">Download History</h3>
                    <p className="text-sm text-slate-400 mt-1">Last 10 Downloads</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-400 uppercase bg-[#1e213a] border-b border-[#2a2d4a]">
                            <tr>
                                <th className="px-6 py-4 font-semibold">ID</th>
                                <th className="px-6 py-4 font-semibold">Service Name</th>
                                <th className="px-6 py-4 font-semibold">Content</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Processing Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#2a2d4a]">
                            {downloadHistory.map((row, i) => (
                                <tr key={i} className="hover:bg-[#1e213a]/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-300">{row.id}</td>
                                    <td className="px-6 py-4 text-slate-300">{row.service}</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-slate-300 hover:text-blue-400 truncate block max-w-[300px]" title={row.url}>
                                            {row.url}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 rounded-md">
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-slate-400">
                                        <div className="flex flex-col">
                                            <span>{row.time}</span>
                                            <span className="opacity-60">({row.date})</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}