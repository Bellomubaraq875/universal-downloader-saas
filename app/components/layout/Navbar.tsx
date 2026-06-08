import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
    return (
        <header className="h-20 bg-white border-b flex items-center justify-between px-8">
            <div>
                Welcome Back 👋
            </div>

            <div className="flex items-center gap-4">
                <select className="border rounded-md p-2">
                    <option>EN</option>
                    <option>TR</option>
                    <option>AR</option>
                </select>

                <ThemeToggle />

                <div className="h-10 w-10 rounded-full bg-slate-300" />
            </div>
        </header>
    );
}