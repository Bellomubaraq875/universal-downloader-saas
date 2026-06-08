"use client";

export default function DownloadForm() {
    return (
        <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-xl mb-4">
                Download Asset
            </h2>

            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Paste URL..."
                    className="flex-1 border rounded-lg p-3"
                />

                <button
                    className="bg-blue-600 text-white px-6 rounded-lg"
                >
                    Analyze
                </button>
            </div>
        </div>
    );
}