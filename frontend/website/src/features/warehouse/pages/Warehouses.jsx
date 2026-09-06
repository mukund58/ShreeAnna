import { useMemo, useState } from "react";

import WarehouseStats from "../components/WarehouseStats";
import WarehouseFilters from "../components/WarehouseFilters";
import WarehouseTable from "../components/WarehouseTable";

import { warehouses as warehouseData } from "../data/warehouses";

function Warehouses() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredWarehouses = useMemo(() => {
    const query = search.toLowerCase();

    return warehouseData.filter((warehouse) => {
      const matchesSearch =
        warehouse.name.toLowerCase().includes(query) ||
        warehouse.location.toLowerCase().includes(query) ||
        warehouse.code.toLowerCase().includes(query) ||
        warehouse.manager.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" ||
        warehouse.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Warehouse Management
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage storage locations, capacity and warehouse conditions.
        </p>
      </div>

      <WarehouseStats />

      <WarehouseFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <WarehouseTable
        warehouses={filteredWarehouses}
      />
    </div>
  );
}

export default Warehouses;