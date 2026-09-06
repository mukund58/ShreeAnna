import { Search, RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

function MarketplaceFilters({
  search,
  setSearch,
  status,
  setStatus,
  millet,
  setMillet,
  onReset,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 lg:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lot, listing or millet..."
          className="pl-9"
        />
      </div>

      <Select value={millet} onValueChange={setMillet}>
        <SelectTrigger className="w-full lg:w-[180px]">
          <SelectValue placeholder="Millet" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Millets</SelectItem>
          <SelectItem value="Pearl Millet">
            Pearl Millet
          </SelectItem>
          <SelectItem value="Finger Millet">
            Finger Millet
          </SelectItem>
          <SelectItem value="Foxtail Millet">
            Foxtail Millet
          </SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full lg:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="Available">
            Available
          </SelectItem>
          <SelectItem value="Partially Sold">
            Partially Sold
          </SelectItem>
          <SelectItem value="Sold Out">
            Sold Out
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

export default MarketplaceFilters;