import {
  Truck,
  PackageCheck,
  Route,
  CheckCircle2,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function DispatchStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Ready for Dispatch"
        value="1"
        description="Orders ready to ship"
        icon={PackageCheck}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />

      <StatCard
        title="In Transit"
        value="0"
        description="Currently on the way"
        icon={Route}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Delivered"
        value="1"
        description="Successfully delivered"
        icon={CheckCircle2}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="Total Dispatches"
        value="2"
        description="This month"
        icon={Truck}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />
    </div>
  );
}

export default DispatchStats;