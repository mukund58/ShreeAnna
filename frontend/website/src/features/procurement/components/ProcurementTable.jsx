import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

function getStatusVariant(status) {
  switch (status) {
    case "Completed":
      return "default";

    case "Ready for Payment":
      return "secondary";

    case "Quality Inspection":
    case "Pending Inspection":
      return "outline";

    default:
      return "outline";
  }
}

function ProcurementTable({ lots, onView }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-xs">

      <Table>

        <TableHeader>
          <TableRow className="bg-slate-50/50">

            <TableHead className="pl-6">
              Lot
            </TableHead>

            <TableHead>
              Farmer
            </TableHead>

            <TableHead>
              Millet
            </TableHead>

            <TableHead>
              Quantity
            </TableHead>

            <TableHead>
              Price
            </TableHead>

            <TableHead>
              Total Value
            </TableHead>

            <TableHead>
              Status
            </TableHead>

            <TableHead className="pr-6 text-right">
              Actions
            </TableHead>

          </TableRow>
        </TableHeader>


        <TableBody>

          {lots.length > 0 ? (

            lots.map((lot) => (
              <TableRow
                key={lot.id}
                className="border-slate-100 hover:bg-slate-50/80"
              >

                <TableCell className="pl-6">
                  <div>
                    <p className="font-semibold text-sm">
                      {lot.id}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {lot.procurementDate}
                    </p>
                  </div>
                </TableCell>


                <TableCell>
                  <div>
                    <p className="text-sm font-medium">
                      {lot.farmerName}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {lot.farmName}
                    </p>
                  </div>
                </TableCell>


                <TableCell className="text-sm">
                  {lot.millet}
                </TableCell>


                <TableCell className="text-sm">
                  {lot.quantity.toLocaleString("en-IN")} kg
                </TableCell>


                <TableCell className="text-sm">
                  ₹{lot.pricePerKg}/kg
                </TableCell>


                <TableCell className="text-sm font-medium">
                  ₹{lot.totalValue.toLocaleString("en-IN")}
                </TableCell>


                <TableCell>
                  <Badge
                    variant={getStatusVariant(lot.status)}
                  >
                    {lot.status}
                  </Badge>
                </TableCell>


                <TableCell className="pr-6 text-right">

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onView?.(lot)}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>

                </TableCell>

              </TableRow>
            ))

          ) : (

            <TableRow>
              <TableCell
                colSpan={8}
                className="h-32 text-center"
              >
                <p className="font-medium">
                  No procurement lots found
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Try changing your filters.
                </p>
              </TableCell>
            </TableRow>

          )}

        </TableBody>

      </Table>

    </div>
  );
}

export default ProcurementTable;