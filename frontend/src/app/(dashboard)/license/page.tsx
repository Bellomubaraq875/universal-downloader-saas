"use client";

import React, { useState } from "react";
import { Info, CheckSquare, XSquare, Loader2 } from "lucide-react";

export default function LicenseDownloadPage() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleCreateLink = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsLoading(true);
        setMessage(null);

        // Simulate backend processing
        setTimeout(() => {
            setIsLoading(false);
            setMessage({
                type: 'success',
                text: 'License link generated successfully!'
            });
            setUrl("");
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">

            {/* Main Card */}
            <div className="bg-[#1a1d36] border border-[#2a2d4a] rounded-xl overflow-hidden shadow-xl">

                {/* Header */}
                <div className="px-6 py-4 border-b border-[#2a2d4a] bg-[#1a1d36]">
                    <h2 className="text-lg font-bold text-white">License Download</h2>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-6">

                    {/* Status Alert Box */}
                    <div className="bg-[#4a3f2d]/30 border border-[#2a2d4a] border-l-4 border-l-yellow-500 rounded-md p-5">
                        <p className="text-yellow-500 font-medium text-sm leading-relaxed mb-4">
                            With the upgrade of our system to version 4, the licence download area is completely private and unique. has become a field.
                            <br />
                            Supported Licence Downloads;
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                                <CheckSquare className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">Envato Elements (All)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <CheckSquare className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">Freepik Vector, Photo and AI Image</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <CheckSquare className="w-4 h-4 text-emerald-500 bg-emerald-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">Motion Array (All)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <XSquare className="w-4 h-4 text-rose-500 bg-rose-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">ShutterStock (All)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <XSquare className="w-4 h-4 text-rose-500 bg-rose-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">Flaticon (All)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <XSquare className="w-4 h-4 text-rose-500 bg-rose-500/10 rounded-sm" />
                                <span className="text-yellow-500 font-medium">Freepik Video & Icon</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Alert Box */}
                    <div className="bg-[#1e3a5f]/40 border border-[#2a2d4a] border-l-4 border-l-cyan-500 rounded-md p-4 flex items-start space-x-3">
                        <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-cyan-400 text-sm font-medium">
                            <span className="font-bold">New Update:</span> License downloads from the service used are deducted from your download quota. Each license download uses one download credit.
                        </p>
                    </div>

                    {/* Input Form Group */}
                    <form onSubmit={handleCreateLink} className="pt-2">
                        <div className="flex flex-col sm:flex-row shadow-sm">
                            <input
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Paste the asset URL here..."
                                className="flex-1 bg-[#1e213a] border border-[#2a2d4a] sm:rounded-l-md sm:rounded-r-none rounded-t-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#292d47] border border-[#2a2d4a] sm:border-l-0 sm:rounded-r-md sm:rounded-l-none rounded-b-md px-8 py-3 text-sm font-semibold text-slate-200 hover:bg-[#34395a] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-70 flex items-center justify-center min-w-[140px]"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-slate-300" />
                                ) : (
                                    "Create Link"
                                )}
                            </button>
                        </div>

                        {/* Feedback Message */}
                        {message && (
                            <p className={`mt-3 text-sm font-medium ${message.type === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {message.text}
                            </p>
                        )}
                    </form>

                </div>
            </div>
        </div>
    );
}