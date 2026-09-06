import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import FarmerStats from "../components/FarmerStats";
import FarmerFilters from "../components/FarmerFilters";
import FarmerTable from "../components/FarmerTable";

import { farmers } from "../data/farmers";


function Farmers() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");


  const filteredFarmers = useMemo(() => {

    return farmers.filter((farmer) => {

      const matchesSearch =
        farmer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        farmer.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        farmer.status === status;

      return matchesSearch && matchesStatus;
    });

  }, [search, status]);


  const handleReset = () => {
    setSearch("");
    setStatus("all");
  };


  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Farmer Management
          </h1>

          <p className="text-muted-foreground">
            Manage farmers registered under your FPO.
          </p>
        </div>


        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Farmer
        </Button>

      </div>


      {/* Stats */}
      <FarmerStats farmers={farmers} />


      {/* Filters */}
      <FarmerFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        onReset={handleReset}
      />


      {/* Table */}
      <FarmerTable farmers={filteredFarmers} />

    </div>
  );
}

export default Farmers;