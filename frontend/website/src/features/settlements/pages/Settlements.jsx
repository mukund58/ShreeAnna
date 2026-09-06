import { useMemo, useState } from "react";

import SettlementStats from "../components/SettlementStats";
import SettlementFilters from "../components/SettlementFilters";
import SettlementTable from "../components/SettlementTable";

import {
  settlements as settlementData,
} from "../data/settlements";

function Settlements() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredSettlements = useMemo(() => {
    const query = search.toLowerCase();

    return settlementData.filter((item) => {
      const matchesSearch =
        item.id.toLowerCase().includes(query) ||
        item.orderId.toLowerCase().includes(query) ||
        item.buyerName.toLowerCase().includes(query) ||
        item.lotId.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" ||
        item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Settlement & Payments
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage buyer settlements, FPO margins and payment completion.
        </p>
      </div>

      <SettlementStats />

      <SettlementFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <SettlementTable
        settlements={filteredSettlements}
      />
    </div>
  );
}

export default Settlements;