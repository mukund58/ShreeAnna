import { RotateCcw, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function OrderFilters({
  search,
  setSearch,
  status,
  setStatus,
  buyerType,
  setBuyerType,
  onReset,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 lg:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <Input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search order, buyer or lot..."
          className="pl-9"
        />
      </div>

      <Select
        value={buyerType}
        onValueChange={setBuyerType}
      >
        <SelectTrigger className="w-full lg:w-[180px]">
          <SelectValue placeholder="Buyer Type" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Buyers
          </SelectItem>

          <SelectItem value="Processor">
            Processor
          </SelectItem>

          <SelectItem value="SHG">
            SHG
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={status}
        onValueChange={setStatus}
      >
        <SelectTrigger className="w-full lg:w-[190px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Status
          </SelectItem>

          <SelectItem value="Pending Approval">
            Pending Approval
          </SelectItem>

          <SelectItem value="Approved">
            Approved
          </SelectItem>

          <SelectItem value="Rejected">
            Rejected
          </SelectItem>

          <SelectItem value="Completed">
            Completed
          </SelectItem>
        </SelectContent>
      </Select>

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

export default OrderFilters;