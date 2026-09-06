import { useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, Save } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import InspectionSummary from "../components/InspectionSummary";
import QualityParameters from "../components/QualityParameters";
import InspectionResult from "../components/InspectionResult";

import { inspections } from "../data/inspections";

function QualityInspection() {
  const navigate = useNavigate();
  const { id } = useParams();

  const inspection = useMemo(
    () => inspections.find((item) => item.lotId === id),
    [id]
  );

  const [parameters, setParameters] = useState(
    inspection?.parameters || {
      moisture: "",
      foreignMatter: "",
      damagedGrains: "",
      immatureGrains: "",
      insectDamage: "None",
      grade: "Grade A",
    }
  );

  const [result, setResult] = useState(
    inspection?.result || "Pending"
  );

  const [remarks, setRemarks] = useState(
    inspection?.remarks || ""
  );

  if (!inspection) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            Inspection not found
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            No inspection exists for procurement lot {id}.
          </p>

          <Button
            className="mt-4"
            onClick={() => navigate("/procurement-lots")}
          >
            Back to Procurement
          </Button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    console.log("Inspection saved:", {
      inspectionId: inspection.id,
      lotId: inspection.lotId,
      parameters,
      result,
      remarks,
    });

    navigate(`/procurement-lots/${inspection.lotId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button
            variant="ghost"
            className="-ml-3 mb-2"
            onClick={() =>
              navigate(`/procurement-lots/${inspection.lotId}`)
            }
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lot
          </Button>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Quality Inspection
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Inspect and record quality parameters for{" "}
            <span className="font-medium text-slate-700">
              {inspection.lotId}
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() =>
              navigate(`/procurement-lots/${inspection.lotId}`)
            }
          >
            Cancel
          </Button>

          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Inspection
          </Button>
        </div>
      </div>

      {/* Summary */}
      <InspectionSummary inspection={inspection} />

      {/* Quality Parameters */}
      <Card className="border-slate-200/80 shadow-xs">
        <CardHeader>
          <CardTitle className="text-base">
            Quality Parameters
          </CardTitle>

          <p className="text-sm text-slate-500">
            Record the observed quality measurements from the
            sampled lot.
          </p>
        </CardHeader>

        <CardContent>
          <QualityParameters
            values={parameters}
            onChange={setParameters}
          />
        </CardContent>
      </Card>

      {/* Result */}
      <Card className="border-slate-200/80 shadow-xs">
        <CardHeader>
          <CardTitle className="text-base">
            Inspection Decision
          </CardTitle>
        </CardHeader>

        <CardContent>
          <InspectionResult
            result={result}
            remarks={remarks}
            onResultChange={setResult}
            onRemarksChange={setRemarks}
          />
        </CardContent>
      </Card>

      {/* Bottom action */}
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />

          <div>
            <p className="text-sm font-medium text-slate-900">
              Ready to submit inspection
            </p>

            <p className="text-xs text-slate-500">
              Save the inspection after reviewing all measurements.
            </p>
          </div>
        </div>

        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Inspection
        </Button>
      </div>
    </div>
  );
}

export default QualityInspection;