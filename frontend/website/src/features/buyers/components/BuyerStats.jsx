import {
  Building2,
  Factory,
  UsersRound,
  CircleDollarSign,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function BuyerStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Buyers"
        value="5"
        description="Registered organizations"
        icon={Building2}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Processors"
        value="3"
        description="Food processing units"
        icon={Factory}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />

      <StatCard
        title="SHGs"
        value="2"
        description="Self Help Groups"
        icon={UsersRound}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="Total Purchases"
        value="₹3.02 L"
        description="Across registered buyers"
        icon={CircleDollarSign}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />
    </div>
  );
}

export default BuyerStats;