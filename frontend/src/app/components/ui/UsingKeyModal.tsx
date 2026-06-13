"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

interface UsingKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (key: string) => Promise<void>;
}

export function UsingKeyModal({ isOpen, onClose, onSave }: UsingKeyModalProps) {
    const [keyValue, setKeyValue] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Reset input when modal opens
    useEffect(() => {
        if (isOpen) {
            setKeyValue("");
            setIsSaving(false);
        }
    }, [isOpen]);

    const handleSave = async () => {
        if (!keyValue.trim()) return;

        setIsSaving(true);

        if (onSave) {
            await onSave(keyValue);
        } else {
            // Simulate API call if no onSave handler is provided
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        setIsSaving(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0f1123]/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className="relative w-full max-w-[480px] bg-[#1e213a] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#2a2d4a] animate-fade-in"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#24284b] border-b border-[#2a2d4a]">
                    <h2 id="modal-title" className="text-lg font-bold text-white tracking-wide">
                        Using Key
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-[#3b4168] text-slate-400 hover:text-white hover:bg-[#2d325a] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Close modal"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-2">
                    <label htmlFor="using-key-input" className="block text-sm font-bold text-white">
                        Using Key
                    </label>
                    <input
                        id="using-key-input"
                        type="text"
                        value={keyValue}
                        onChange={(e) => setKeyValue(e.target.value)}
                        disabled={isSaving}
                        className="w-full bg-[#1a1d36] border border-[#2a2d4a] rounded-md px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-[#3b4168] focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                    />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end px-6 py-4 border-t border-[#2a2d4a] bg-[#1e213a] space-x-3">
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        className="px-6 py-2.5 rounded-md text-sm font-semibold text-slate-300 hover:text-white bg-transparent border border-[#3b4168] hover:bg-[#2d325a] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving || !keyValue.trim()}
                        className="px-6 py-2.5 rounded-md text-sm font-semibold text-white bg-[#2d325a] border border-[#3b4168] hover:bg-[#3b4168] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 flex items-center justify-center min-w-[80px]"
                    >
                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
}