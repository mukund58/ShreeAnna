import {
  Building2,
  MapPin,
  User,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function BuyerDetails({ order }) {
  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Buyer Details
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Building2 className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Organization
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {order.buyerName}
            </p>

            <p className="text-sm text-slate-500">
              {order.buyerId}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100">
            <User className="h-5 w-5 text-violet-600" />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Buyer Type
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {order.buyerType}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <MapPin className="h-5 w-5 text-amber-600" />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Delivery Location
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {order.deliveryLocation}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default BuyerDetails;