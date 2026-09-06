import {
  Warehouse,
  Package,
  Gauge,
  CheckCircle2,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function WarehouseStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Active Warehouses"
        value="3"
        description="Currently operational"
        icon={Warehouse}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Total Capacity"
        value="16,000 kg"
        description="Combined storage capacity"
        icon={Package}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />

      <StatCard
        title="Used Capacity"
        value="8,900 kg"
        description="56% of total capacity"
        icon={Gauge}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />

      <StatCard
        title="Good Condition"
        value="3"
        description="Warehouses inspected"
        icon={CheckCircle2}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />
    </div>
  );
}

export default WarehouseStats;