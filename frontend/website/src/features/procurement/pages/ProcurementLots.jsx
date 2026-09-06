import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import ProcurementStats from "../components/ProcurementStats";
import ProcurementFilters from "../components/ProcurementFilters";
import ProcurementTable from "../components/ProcurementTable";

import { procurementLots } from "../data/procurementLots";

function ProcurementLots() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [millet, setMillet] = useState("all");

  const filteredLots = useMemo(() => {
    const searchText = search.toLowerCase();

    return procurementLots.filter((lot) => {

      const matchesSearch =
        lot.id.toLowerCase().includes(searchText) ||
        lot.farmerName.toLowerCase().includes(searchText) ||
        lot.farmName.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "all" ||
        lot.status === status;

      const matchesMillet =
        millet === "all" ||
        lot.millet === millet;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesMillet
      );
    });
  }, [search, status, millet]);


  const handleReset = () => {
    setSearch("");
    setStatus("all");
    setMillet("all");
  };


  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Procurement Lots
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage millet procurement from FPO farmers.
          </p>
        </div>


        <Button
          onClick={() =>
            navigate("/procurement-lots/new")
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Procurement Lot
        </Button>

      </div>


      {/* Stats */}
      <ProcurementStats
        lots={procurementLots}
      />


      {/* Filters */}
      <ProcurementFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        millet={millet}
        setMillet={setMillet}
        onReset={handleReset}
      />


      {/* Table */}
      <ProcurementTable
        lots={filteredLots}
        onView={(lot) =>
          navigate(`/procurement-lots/${lot.id}`)
        }
      />

    </div>
  );
}

export default ProcurementLots;