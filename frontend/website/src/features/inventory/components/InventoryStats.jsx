import {
  Package,
  Warehouse,
  Boxes,
  LockKeyhole,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function InventoryStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Stock"
        value="4,950 kg"
        description="Across all warehouses"
        icon={Package}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Available Stock"
        value="2,250 kg"
        description="Available for sale"
        icon={Boxes}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="Reserved Stock"
        value="2,700 kg"
        description="Reserved for buyer orders"
        icon={LockKeyhole}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />

      <StatCard
        title="Warehouses"
        value="2"
        description="Active storage locations"
        icon={Warehouse}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />
    </div>
  );
}

export default InventoryStats;