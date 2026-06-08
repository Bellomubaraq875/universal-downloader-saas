import {
    LayoutDashboard,
    Download,
    History,
    Settings,
} from "lucide-react";

const menu = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Downloads",
        icon: Download,
    },
    {
        title: "History",
        icon: History,
    },
    {
        title: "Settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-white border-r">
            <div className="p-6">
                <h2 className="font-bold text-xl">
                    Downloader
                </h2>
            </div>

            <nav className="space-y-2 p-4">
                {menu.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 cursor-pointer"
                    >
                        <item.icon size={20} />
                        <span>{item.title}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
}