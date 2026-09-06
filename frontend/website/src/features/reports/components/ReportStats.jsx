import {
  IndianRupee,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconBgClass,
  iconColorClass,
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </h3>

          {description && (
            <p className="mt-1 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className={`rounded-lg p-3 ${iconBgClass}`}>
          <Icon className={`h-5 w-5 ${iconColorClass}`} />
        </div>
      </div>
    </div>
  );
}

function ReportStats({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Procurement"
        value={`${stats.totalProcurement.toLocaleString()} kg`}
        description={`₹${stats.procurementValue.toLocaleString()} procurement value`}
        icon={Package}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Total Sales"
        value={`${stats.totalSales.toLocaleString()} kg`}
        description={`₹${stats.salesValue.toLocaleString()} sales value`}
        icon={ShoppingCart}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="Farmer Payments"
        value={`₹${stats.farmerPayments.toLocaleString()}`}
        description="Payments made to farmers"
        icon={IndianRupee}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />

      <StatCard
        title="FPO Margin"
        value={`₹${stats.fpoMargin.toLocaleString()}`}
        description="Net operational margin"
        icon={TrendingUp}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />
    </div>
  );
}

export default ReportStats;