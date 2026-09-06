import {
  IndianRupee,
  Package,
  Scale,
  Wheat,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function OrderSummary({ order }) {
  const getStatusClass = (status) => {
    if (status === "Pending Approval") {
      return "bg-amber-100 text-amber-700 hover:bg-amber-100";
    }

    if (status === "Approved") {
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    }

    if (status === "Completed") {
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    }

    return "bg-red-100 text-red-700 hover:bg-red-100";
  };

  const items = [
    {
      label: "Order ID",
      value: order.id,
      icon: Package,
    },
    {
      label: "Millet",
      value: order.millet,
      icon: Wheat,
    },
    {
      label: "Quantity",
      value: `${order.quantity.toLocaleString()} ${order.unit}`,
      icon: Scale,
    },
    {
      label: "Order Value",
      value: `₹${order.totalAmount.toLocaleString("en-IN")}`,
      icon: IndianRupee,
    },
  ];

  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            Order Summary
          </CardTitle>

          <Badge className={getStatusClass(order.status)}>
            {order.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50/60 p-4"
              >
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <Icon className="h-4 w-4" />

                  <span className="text-xs">
                    {item.label}
                  </span>
                </div>

                <p className="font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;