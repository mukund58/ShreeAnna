import { useMemo, useState } from "react";

import BuyerStats from "../components/BuyerStats";
import BuyerFilters from "../components/BuyerFilters";
import BuyerTable from "../components/BuyerTable";

import { buyers as buyerData } from "../data/buyers";

function Buyers() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredBuyers = useMemo(() => {
    const query = search.toLowerCase();

    return buyerData.filter((buyer) => {
      const matchesSearch =
        buyer.name.toLowerCase().includes(query) ||
        buyer.contactPerson
          .toLowerCase()
          .includes(query) ||
        buyer.address
          .toLowerCase()
          .includes(query);

      const matchesType =
        type === "All" ||
        buyer.type === type;

      const matchesStatus =
        status === "All" ||
        buyer.status === status;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus
      );
    });
  }, [search, type, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Buyer Management
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage processors and SHGs purchasing millet through the FPO.
        </p>
      </div>

      <BuyerStats />

      <BuyerFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
      />

      <BuyerTable buyers={filteredBuyers} />
    </div>
  );
}

export default Buyers;