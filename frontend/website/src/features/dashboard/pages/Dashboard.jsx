import {
  Users,
  UserCheck,
  Mountain,
  Clock,
} from "lucide-react";

import StatCard from "../components/StatCard";
import FarmVerificationQueue from "../components/FarmVerificationQueue";
import VerificationStatusChart from "../components/VerificationStatusChart";
import RecentActivity from "../components/RecentActivity";
import FarmsByDistrict from "../components/FarmsByDistrict";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Statistics Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Total Farmers"
          value="5"
          trendText="+12 this month"
          trendColor="emerald"
          icon={Users}
          iconBgClass="bg-blue-100/80"
          iconColorClass="text-blue-600"
        />

        <StatCard
          title="Active Farmers"
          value="1,156"
          description="93% of total farmers"
          icon={UserCheck}
          iconBgClass="bg-emerald-100/80"
          iconColorClass="text-emerald-600"
        />

        <StatCard
          title="Verified Farms"
          value="982"
          description="79% of total farms"
          icon={Mountain}
          iconBgClass="bg-amber-100/80"
          iconColorClass="text-amber-600"
        />

        <StatCard
          title="Pending Farm Verification"
          value="37"
          trendText="+8 this week"
          trendColor="red"
          icon={Clock}
          iconBgClass="bg-amber-100/80"
          iconColorClass="text-amber-600"
        />

      </div>


      {/* Queue + Verification Donut Chart */}
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <FarmVerificationQueue />
        </div>

        <div className="lg:col-span-1">
          <VerificationStatusChart />
        </div>

      </div>


      {/* Recent Activity + Farms by District */}
      <div className="grid gap-6 lg:grid-cols-2">

        <RecentActivity />

        <FarmsByDistrict />

      </div>

    </div>
  );
}

export default Dashboard;