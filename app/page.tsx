import DashboardLayout from "./components/layout/DashboardLayout";
// import DownloadForm from "./components/dashboard/DownloadForm";
import RecentDownloads from "./components/dashboard/RecentDownloads";
import StatCard from "./components/dashboard/StatCard";


export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            title="Downloads Today"
            value="14"
          />

          <StatCard
            title="Remaining Credits"
            value="486"
          />

          <StatCard
            title="Plan"
            value="Pro"
          />
        </div>

        {/* <DownloadForm /> */}

        <RecentDownloads />
      </div>
    </DashboardLayout>
  );
}