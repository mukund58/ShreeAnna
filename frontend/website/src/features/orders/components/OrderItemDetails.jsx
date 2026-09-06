import {
  Award,
  Package,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function OrderItemDetails({ order }) {
  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Ordered Stock
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                <Package className="h-5 w-5 text-emerald-600" />
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  {order.millet}
                </p>

                <p className="text-sm text-slate-500">
                  Source Lot: {order.lotId}
                </p>
              </div>
            </div>

            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              <Award className="mr-1 h-3.5 w-3.5" />
              {order.grade}
            </Badge>
          </div>

          <div className="mt-5 grid gap-4 border-t border-slate-200 pt-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-slate-500">
                Quantity
              </p>

              <p className="mt-1 font-medium text-slate-900">
                {order.quantity.toLocaleString()} {order.unit}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Price per kg
              </p>

              <p className="mt-1 font-medium text-slate-900">
                ₹{order.pricePerKg}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Total
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                ₹
                {order.totalAmount.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
          </div>
        </div>

        {order.notes && (
          <div className="mt-4 rounded-lg bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500">
              Buyer Notes
            </p>

            <p className="mt-1 text-sm text-slate-700">
              {order.notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default OrderItemDetails;