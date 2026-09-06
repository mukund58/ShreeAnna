import { ClipboardCheck, Package, Wheat, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function InspectionSummary({ inspection }) {
  const items = [
    {
      label: "Inspection ID",
      value: inspection.id,
      icon: ClipboardCheck,
    },
    {
      label: "Procurement Lot",
      value: inspection.lotId,
      icon: Package,
    },
    {
      label: "Millet",
      value: inspection.millet,
      icon: Wheat,
    },
    {
      label: "Inspector",
      value: inspection.inspector,
      icon: User,
    },
  ];

  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Inspection Summary
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
                  <span className="text-xs">{item.label}</span>
                </div>

                <p className="font-medium text-slate-900">
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

export default InspectionSummary;