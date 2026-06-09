import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                // Point the default sans font to your new Jost variable
                sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
            },
            // ... rest of your existing theme config
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;