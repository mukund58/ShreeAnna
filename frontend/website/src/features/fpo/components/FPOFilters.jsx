import { Search } from "lucide-react";

function FPOFilters({
  search,
  setSearch,
  role,
  setRole,
  department,
  setDepartment,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 md:flex-row">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <input
          type="text"
          placeholder="Search member or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border bg-background py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="rounded-lg border bg-background px-3 py-2 text-sm outline-none"
      >
        <option value="All">All Roles</option>
        <option value="FPO Manager">FPO Manager</option>
        <option value="Procurement Officer">
          Procurement Officer
        </option>
        <option value="Quality Inspector">
          Quality Inspector
        </option>
        <option value="Warehouse Manager">
          Warehouse Manager
        </option>
        <option value="Logistics Coordinator">
          Logistics Coordinator
        </option>
        <option value="FPO Accountant">
          FPO Accountant
        </option>
      </select>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="rounded-lg border bg-background px-3 py-2 text-sm outline-none"
      >
        <option value="All">All Departments</option>
        <option value="Administration">
          Administration
        </option>
        <option value="Procurement">
          Procurement
        </option>
        <option value="Quality">Quality</option>
        <option value="Warehouse">Warehouse</option>
        <option value="Logistics">Logistics</option>
        <option value="Finance">Finance</option>
      </select>
    </div>
  );
}

export default FPOFilters;