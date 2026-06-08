import { Sidebar } from "../layout/Sidebar";
import { TopNav } from "../layout/TopNav";

 

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden relative">
                <TopNav />

                {/* Main scrollable area */}
                <main className="flex-1 overflow-y-auto">
                    {/* Inner container applying the 80% width constraint on desktop */}
                    <div className="app-container py-10 animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}