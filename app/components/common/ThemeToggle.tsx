"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg border"
        >
            {dark ? (
                <Moon size={18} />
            ) : (
                <Sun size={18} />
            )}
        </button>
    );
}