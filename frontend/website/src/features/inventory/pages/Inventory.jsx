import { useMemo, useState } from "react";

import InventoryStats from "../components/InventoryStats";
import InventoryFilters from "../components/InventoryFilters";
import InventoryTable from "../components/InventoryTable";

import { inventory as inventoryData } from "../data/inventory";

function Inventory() {
  const [search, setSearch] = useState("");
  const [millet, setMillet] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredInventory = useMemo(() => {
    return inventoryData.filter((item) => {
      const query = search.toLowerCase();

      const matchesSearch =
        item.id.toLowerCase().includes(query) ||
        item.lotId.toLowerCase().includes(query) ||
        item.farmerName.toLowerCase().includes(query) ||
        item.warehouse.toLowerCase().includes(query);

      const matchesMillet =
        millet === "All" || item.millet === millet;

      const matchesStatus =
        status === "All" || item.status === status;

      return (
        matchesSearch &&
        matchesMillet &&
        matchesStatus
      );
    });
  }, [search, millet, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Warehouse & Inventory
        </h1>

        <p className="text-sm text-muted-foreground">
          Track millet stock, warehouse storage and reserved quantities.
        </p>
      </div>

      <InventoryStats />

      <InventoryFilters
        search={search}
        setSearch={setSearch}
        millet={millet}
        setMillet={setMillet}
        status={status}
        setStatus={setStatus}
      />

      <InventoryTable inventory={filteredInventory} />
    </div>
  );
}

export default Inventory;