import {
  CircleDollarSign,
  Clock3,
  CheckCircle2,
  Wallet,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function SettlementStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Settlement Value"
        value="₹65,400"
        description="Current transactions"
        icon={CircleDollarSign}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Pending Settlement"
        value="₹24,000"
        description="Awaiting completion"
        icon={Clock3}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />

      <StatCard
        title="Paid"
        value="₹30,300"
        description="Successfully settled"
        icon={CheckCircle2}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="FPO Margin"
        value="₹13,600"
        description="From current transactions"
        icon={Wallet}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />
    </div>
  );
}

export default SettlementStats;