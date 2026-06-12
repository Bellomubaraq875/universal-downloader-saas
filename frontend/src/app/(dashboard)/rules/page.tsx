"use client";

import React from "react";
import {
    Gavel,
    AlertTriangle,
    Settings,
    Clock,
    Scale,
    Copyright,
    Info
} from "lucide-react";

export default function RulesPage() {
    return (
        <div className="w-full max-w-4xl mx-auto pb-10">

            {/* Main Container */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="bg-[#2563eb] px-6 py-4 flex items-center space-x-3">
                    <Gavel className="w-5 h-5 text-white" />
                    <h2 className="text-lg font-bold text-white tracking-wide">Usage Rules and Limitations</h2>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6 bg-[#1a1d36]">

                    {/* Section 1: Download Limits (Red/Purple Tint) */}
                    <div className="bg-[#2a1a29]/40 border border-[#4a2a3f] rounded-lg p-5 sm:p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <AlertTriangle className="w-5 h-5 text-slate-200" />
                            <h3 className="text-lg font-bold text-slate-200">IMPORTANT: Download Limits</h3>
                        </div>

                        <p className="text-sm font-bold text-slate-200 mb-3">About Download Limits:</p>

                        {/* Inner Dynamic System Box */}
                        <div className="bg-[#2b253c]/60 border border-[#3d3654] rounded-md p-4 mb-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <Settings className="w-4 h-4 text-slate-300" />
                                <h4 className="text-sm font-bold text-slate-300">Dynamic Limit System</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-300 pl-1">
                                <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> Download limits are automatically adjusted by administrators based on system load.</li>
                                <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> Limits may vary depending on system capacity and usage intensity.</li>
                                <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> When you reach the limit, you will see a waiting time message.</li>
                                <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> Please wait for the specified time before attempting to download again.</li>
                            </ul>
                        </div>

                        <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2">
                            <Info className="w-3.5 h-3.5" />
                            <p>This system ensures fair use of resources and maintains service quality for all users.</p>
                        </div>
                    </div>

                    {/* Section 2: Download Times (Yellow/Brown Tint) */}
                    <div className="bg-[#2a241e]/40 border border-[#4a3e2a] rounded-lg p-5 sm:p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Clock className="w-5 h-5 text-slate-200" />
                            <h3 className="text-lg font-bold text-slate-200">About Download Times</h3>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                            <Info className="w-4 h-4 text-slate-200" />
                            <p className="text-sm font-bold text-slate-200">Important Notice:</p>
                        </div>

                        <ul className="space-y-2 text-sm text-slate-300 pl-1 mb-4">
                            <li className="flex items-start"><span className="mr-2 mt-0.5 mr-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span> Download times may vary depending on file size, server load, and your internet connection.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5 mr-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span> Our platform does not guarantee specific download times.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5 mr-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span> Downloading large files may take longer.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5 mr-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span> During peak hours, downloads may take longer than usual.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5 mr-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span> We recommend not closing the page during the download process.</li>
                        </ul>

                        <p className="text-xs text-slate-400 mt-2">
                            Thank you for your understanding. We work to provide the fastest download experience possible.
                        </p>
                    </div>

                    {/* Section 3: Fair Use Policy (Standard Dark Tint) */}
                    <div className="bg-[#1e213a]/50 border border-[#2a2d4a] rounded-lg p-5 sm:p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Scale className="w-5 h-5 text-slate-200" />
                            <h3 className="text-lg font-bold text-slate-200">Fair Use Policy</h3>
                        </div>

                        <p className="text-sm font-bold text-slate-200 mb-3">
                            You must comply with the following rules for fair use of the system:
                        </p>

                        <ol className="space-y-3 text-sm text-slate-300 list-decimal pl-5">
                            <li className="pl-1"><span className="font-bold text-white">Automatic Download Prohibition:</span> Using bots, scripts, or automated download tools is strictly prohibited.</li>
                            <li className="pl-1"><span className="font-bold text-white">Account Sharing:</span> Do not share your account with others. Each account should be used by only one person.</li>
                            <li className="pl-1"><span className="font-bold text-white">Suspicious Activity:</span> Users who regularly reach daily limits may be flagged as suspicious and subject to additional restrictions.</li>
                            <li className="pl-1"><span className="font-bold text-white">Commercial Use:</span> Resale or distribution of downloaded content is prohibited.</li>
                            <li className="pl-1"><span className="font-bold text-white">System Abuse:</span> If misuse that disrupts normal system operation is detected, your account may be suspended.</li>
                        </ol>
                    </div>

                    {/* Section 4: License and Copyright (Blue Tint) */}
                    <div className="bg-[#1a243d]/50 border border-[#2a3a5c] rounded-lg p-5 sm:p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Copyright className="w-5 h-5 text-slate-200" />
                            <h3 className="text-lg font-bold text-slate-200">License and Copyright</h3>
                        </div>

                        <ul className="space-y-2 text-sm text-slate-300 pl-1">
                            <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> All downloaded content is subject to the license terms of the respective platforms.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> Make sure you have the appropriate license for your intended use of the downloaded content.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> You can download license documents from the 'License Download' section.</li>
                            <li className="flex items-start"><span className="mr-2 mt-0.5">•</span> You are solely responsible for any copyright infringement.</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Copyright */}
            <div className="text-center mt-8">
                <p className="text-xs text-slate-500">Copyright © 2026 . All right reserved.</p>
            </div>

        </div>
    );
}