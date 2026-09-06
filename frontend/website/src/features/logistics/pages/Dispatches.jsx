import { useMemo, useState } from "react";

import DispatchStats from "../components/DispatchStats";
import DispatchFilters from "../components/DispatchFilters";
import DispatchTable from "../components/DispatchTable";

import { dispatches as dispatchData } from "../data/dispatches";

function Dispatches() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredDispatches = useMemo(() => {
    return dispatchData.filter((item) => {
      const matchesSearch =
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.orderId.toLowerCase().includes(search.toLowerCase()) ||
        item.buyerName.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Dispatch & Logistics
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage shipment preparation, dispatch and delivery tracking.
        </p>
      </div>

      <DispatchStats />

      <DispatchFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <DispatchTable dispatches={filteredDispatches} />
    </div>
  );
}

export default Dispatches;