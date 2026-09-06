import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const activities = [
  {
    title: "Farm FM-001 verified",
    subtitle: "Green Hill Farm • Ramesh Patel",
    time: "10 minutes ago",
    dotClass: "bg-emerald-500",
  },
  {
    title: "New farm submitted",
    subtitle: "River Side Farm • Suresh Kumar",
    time: "1 hour ago",
    dotClass: "bg-amber-500",
  },
  {
    title: "Farm under review",
    subtitle: "Patel Farm • Mahesh Solanki",
    time: "3 hours ago",
    dotClass: "bg-blue-500",
  },
  {
    title: "Procurement lot PL-1024 certified",
    subtitle: "Pearl Millet • 1.2 MT",
    time: "Yesterday",
    dotClass: "bg-emerald-500",
  },
  {
    title: "New farmer registered",
    subtitle: "Kiran Patel • F004",
    time: "2 days ago",
    dotClass: "bg-slate-400",
  },
];

function RecentActivity() {
  return (
    <Card className="shadow-xs border-slate-200/80 bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-bold text-slate-900">
          Recent Activity
        </CardTitle>

        <Button
          variant="outline"
          size="sm"
          className="h-8 text-xs font-medium text-slate-700 hover:text-slate-900 border-slate-200"
        >
          View All
          <ChevronRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${activity.dotClass}`}
                />

                <div>
                  <p className="font-bold text-slate-800 text-xs">
                    {activity.title}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {activity.subtitle}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentActivity;