import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

function StatCard({
  title,
  value,
  description,
  trendText,
  trendType = "up",
  trendColor = "emerald",
  icon: Icon,
  iconBgClass = "bg-blue-100/80",
  iconColorClass = "text-blue-600",
}) {
  return (
    <Card className="shadow-xs border-slate-200/80 bg-white">
      <CardContent className="flex items-start justify-between p-5">
        <div>
          <p className="text-xs font-semibold text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
            {value}
          </p>

          <div className="mt-2 flex items-center gap-1">
            {trendText && (
              <span
                className={`flex items-center text-xs font-semibold ${
                  trendColor === "emerald"
                    ? "text-emerald-600"
                    : trendColor === "red"
                    ? "text-red-500"
                    : "text-slate-600"
                }`}
              >
                {trendType === "up" ? (
                  <ArrowUp className="mr-0.5 h-3.5 w-3.5 stroke-[2.5]" />
                ) : (
                  <ArrowDown className="mr-0.5 h-3.5 w-3.5 stroke-[2.5]" />
                )}
                {trendText}
              </span>
            )}

            {description && (
              <span className="text-xs text-slate-500">
                {description}
              </span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={`rounded-full p-3 ${iconBgClass}`}>
            <Icon className={`h-5 w-5 ${iconColorClass}`} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default StatCard;