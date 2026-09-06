import {
  CheckCircle2,
  Clock,
  Package,
  ShoppingCart,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

function OrderStats({ orders }) {
  const pending = orders.filter(
    (order) => order.status === "Pending Approval"
  ).length;

  const approved = orders.filter(
    (order) => order.status === "Approved"
  ).length;

  const completed = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const totalQuantity = orders.reduce(
    (sum, order) => sum + order.quantity,
    0
  );

  const stats = [
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingCart,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Pending Approval",
      value: pending,
      icon: Clock,
      bg: "bg-amber-100",
      color: "text-amber-600",
    },
    {
      title: "Approved Orders",
      value: approved,
      icon: CheckCircle2,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Ordered Quantity",
      value: `${totalQuantity.toLocaleString()} kg`,
      icon: Package,
      bg: "bg-slate-100",
      color: "text-slate-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="border-slate-200/80 shadow-xs"
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg ${stat.bg}`}
              >
                <Icon
                  className={`h-5 w-5 ${stat.color}`}
                />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-xl font-semibold text-slate-900">
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default OrderStats;