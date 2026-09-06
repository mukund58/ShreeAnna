import {
  IndianRupee,
  Package,
  Wheat,
  Scale,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PaymentSummary({ payment }) {
  const items = [
    {
      label: "Procurement Lot",
      value: payment.lotId,
      icon: Package,
    },
    {
      label: "Millet",
      value: payment.millet,
      icon: Wheat,
    },
    {
      label: "Quantity",
      value: `${payment.quantity.toLocaleString()} ${payment.unit}`,
      icon: Scale,
    },
    {
      label: "Total Amount",
      value: `₹${payment.totalAmount.toLocaleString("en-IN")}`,
      icon: IndianRupee,
    },
  ];

  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Payment Summary
        </CardTitle>
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

export default PaymentSummary;