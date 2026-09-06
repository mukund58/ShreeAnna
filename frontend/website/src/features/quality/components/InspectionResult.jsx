import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function InspectionResult({ result, remarks, onResultChange, onRemarksChange }) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">
          Inspection Result
        </Label>

        <div className="grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => onResultChange("Passed")}
            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
              result === "Passed"
                ? "border-emerald-500 bg-emerald-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            <div>
              <p className="text-sm font-medium">
                Pass
              </p>
              <p className="text-xs text-slate-500">
                Meets inspection requirements
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onResultChange("Failed")}
            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
              result === "Failed"
                ? "border-red-500 bg-red-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <XCircle className="h-5 w-5 text-red-600" />

            <div>
              <p className="text-sm font-medium">
                Fail
              </p>
              <p className="text-xs text-slate-500">
                Does not meet requirements
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onResultChange("Hold")}
            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
              result === "Hold"
                ? "border-amber-500 bg-amber-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <AlertCircle className="h-5 w-5 text-amber-600" />

            <div>
              <p className="text-sm font-medium">
                Hold
              </p>
              <p className="text-xs text-slate-500">
                Needs further review
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="remarks">
          Inspector Remarks
        </Label>

        <Textarea
          id="remarks"
          value={remarks}
          onChange={(e) => onRemarksChange(e.target.value)}
          placeholder="Add observations, defects, or other inspection remarks..."
          rows={4}
        />
      </div>
    </div>
  );
}

export default InspectionResult;