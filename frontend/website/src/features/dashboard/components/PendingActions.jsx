import {
  ClipboardCheck,
  FileText,
  Truck,
  Receipt,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const actions = [
  {
    title: "Pending Inspections",
    count: 12,
    icon: ClipboardCheck,
    status: "Action Required",
  },
  {
    title: "Pending Agreements",
    count: 5,
    icon: FileText,
    status: "Action Required",
  },
  {
    title: "Upcoming Pickups",
    count: 8,
    icon: Truck,
    status: "Scheduled",
  },
  {
    title: "Bills Awaiting Approval",
    count: 4,
    icon: Receipt,
    status: "Action Required",
  },
];

function PendingActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <div
              key={action.title}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    {action.title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {action.count} items
                  </p>
                </div>
              </div>

              <Badge variant="secondary">
                {action.status}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default PendingActions;