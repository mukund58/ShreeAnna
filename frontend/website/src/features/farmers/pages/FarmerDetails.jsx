import { ArrowLeft, Edit } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { farmers } from "../data/farmers";

import FarmerProfile from "../components/FarmerProfile";
import FarmerFarms from "../components/FarmerFarms";
import FarmerProcurement from "../components/FarmerProcurement";
import FarmerActivity from "../components/FarmerActivity";

function FarmerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const farmer = farmers.find(
    (item) => item.id === id
  );

  if (!farmer) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">
          Farmer not found
        </h1>

        <Button onClick={() => navigate("/farmers")}>
          Back to Farmers
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/farmers")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {farmer.name}
            </h1>

            <p className="text-muted-foreground">
              Farmer ID: {farmer.id}
            </p>
          </div>

        </div>


        <Button onClick={() => navigate(`/farmers/${farmer.id}/edit`)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit Farmer
        </Button>

      </div>


      {/* Profile */}
      <FarmerProfile farmer={farmer} />


      {/* Farms */}
      <FarmerFarms farmer={farmer} />


      {/* Procurement */}
      <FarmerProcurement farmer={farmer} />


      {/* Activity */}
      <FarmerActivity farmer={farmer} />

    </div>
  );
}

export default FarmerDetails;