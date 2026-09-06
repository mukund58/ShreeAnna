import { CalendarDays, Filter } from "lucide-react";

function ReportFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />

        <span className="text-sm font-medium">
          Report Filters
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />

          <select className="bg-transparent text-sm outline-none">
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>This Year</option>
          </select>
        </div>

        <select className="rounded-lg border px-3 py-2 text-sm outline-none">
          <option>All Districts</option>
          <option>Dahod</option>
          <option>Mehsana</option>
          <option>Anand</option>
        </select>

        <select className="rounded-lg border px-3 py-2 text-sm outline-none">
          <option>All Millets</option>
          <option>Pearl Millet</option>
          <option>Finger Millet</option>
          <option>Foxtail Millet</option>
        </select>
      </div>
    </div>
  );
}

export default ReportFilters;