import { Building2, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function FarmerPaymentDetails({ payment }) {
  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Farmer Payment Details
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Farmer */}
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
              <User className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Farmer
              </p>

              <p className="mt-1 font-medium text-slate-900">
                {payment.farmerName}
              </p>

              <p className="text-sm text-slate-500">
                {payment.farmerId}
              </p>
            </div>
          </div>

          {/* Bank */}
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
              <Building2 className="h-5 w-5 text-emerald-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Bank Account
              </p>

              <p className="mt-1 font-medium text-slate-900">
                {payment.bankName}
              </p>

              <p className="text-sm text-slate-500">
                {payment.accountNumber}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FarmerPaymentDetails;