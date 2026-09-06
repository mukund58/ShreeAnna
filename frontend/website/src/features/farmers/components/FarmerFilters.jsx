import { Search, RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FarmerFilters({
  search,
  setSearch,
  status,
  setStatus,
  onReset,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-card p-4 md:flex-row md:items-center">

      {/* Search */}
      <div className="relative flex-1">

        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by farmer name or ID..."
          className="pl-9"
        />

      </div>


      {/* Status */}
      <Select
        value={status}
        onValueChange={setStatus}
      >
        <SelectTrigger className="w-full md:w-44">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Status
          </SelectItem>

          <SelectItem value="Active">
            Active
          </SelectItem>

          <SelectItem value="Pending">
            Pending
          </SelectItem>

          <SelectItem value="Inactive">
            Inactive
          </SelectItem>
        </SelectContent>
      </Select>


      {/* Reset */}
      <Button
        variant="outline"
        onClick={onReset}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset
      </Button>

    </div>
  );
}

export default FarmerFilters;