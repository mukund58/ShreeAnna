import { Eye } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OrdersTable({ orders, onView }) {
  const getStatusClass = (status) => {
    if (status === "Pending Approval") {
      return "bg-amber-100 text-amber-700 hover:bg-amber-100";
    }

    if (status === "Approved") {
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    }

    if (status === "Completed") {
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    }

    return "bg-red-100 text-red-700 hover:bg-red-100";
  };

  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Buyer Orders
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">
                  Order
                </TableHead>

                <TableHead>Buyer</TableHead>

                <TableHead>Type</TableHead>

                <TableHead>Millet</TableHead>

                <TableHead>Quantity</TableHead>

                <TableHead>Amount</TableHead>

                <TableHead>Status</TableHead>

                <TableHead className="pr-6 text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="h-32 text-center text-slate-500"
                  >
                    No orders found.
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="pl-6">
                      <div>
                        <p className="font-medium text-slate-900">
                          {order.id}
                        </p>

                        <p className="text-xs text-slate-500">
                          {order.lotId}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      {order.buyerName}
                    </TableCell>

                    <TableCell>
                      {order.buyerType}
                    </TableCell>

                    <TableCell>
                      {order.millet}
                    </TableCell>

                    <TableCell>
                      {order.quantity.toLocaleString()}{" "}
                      {order.unit}
                    </TableCell>

                    <TableCell className="font-medium">
                      ₹
                      {order.totalAmount.toLocaleString(
                        "en-IN"
                      )}
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={getStatusClass(
                          order.status
                        )}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="pr-6 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          onView(order.id)
                        }
                      >
                        <Eye className="mr-2 h-3.5 w-3.5" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrdersTable;