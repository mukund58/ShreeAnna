import { CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function InspectionResultCard({ inspection }) {
  return (
    <Card className="border-emerald-200 bg-emerald-50/40 shadow-xs">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            Quality Inspection Result
          </CardTitle>

          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
            Passed
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs text-slate-500">
              Moisture
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {inspection.parameters.moisture}%
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Foreign Matter
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {inspection.parameters.foreignMatter}%
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Damaged Grains
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {inspection.parameters.damagedGrains}%
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Insect Damage
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {inspection.parameters.insectDamage}
            </p>
          </div>
        </div>

        {inspection.remarks && (
          <div className="mt-5 border-t border-emerald-200 pt-4">
            <p className="text-xs text-slate-500">
              Inspector Remarks
            </p>

            <p className="mt-1 text-sm text-slate-700">
              {inspection.remarks}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default InspectionResultCard;