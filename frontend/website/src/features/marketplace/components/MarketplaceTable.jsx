import { Eye } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function MarketplaceTable({
  listings,
  onView,
}) {
  const getStatusClass = (status) => {
    if (status === "Available") {
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    }

    if (status === "Partially Sold") {
      return "bg-amber-100 text-amber-700 hover:bg-amber-100";
    }

    return "bg-slate-100 text-slate-600 hover:bg-slate-100";
  };

  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-base">
          Marketplace Listings
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">
                  Listing
                </TableHead>

                <TableHead>Millet</TableHead>

                <TableHead>Grade</TableHead>

                <TableHead>Available</TableHead>

                <TableHead>Price / kg</TableHead>

                <TableHead>Value</TableHead>

                <TableHead>Status</TableHead>

                <TableHead className="pr-6 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {listings.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="h-32 text-center text-slate-500"
                  >
                    No marketplace listings found.
                  </TableCell>
                </TableRow>
              ) : (
                listings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell className="pl-6">
                      <div>
                        <p className="font-medium text-slate-900">
                          {listing.id}
                        </p>

                        <p className="text-xs text-slate-500">
                          {listing.lotId}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      {listing.millet}
                    </TableCell>

                    <TableCell>
                      {listing.grade}
                    </TableCell>

                    <TableCell>
                      {listing.availableQuantity.toLocaleString()}{" "}
                      {listing.unit}
                    </TableCell>

                    <TableCell>
                      ₹{listing.pricePerKg}
                    </TableCell>

                    <TableCell className="font-medium">
                      ₹
                      {(
                        listing.availableQuantity *
                        listing.pricePerKg
                      ).toLocaleString("en-IN")}
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={getStatusClass(
                          listing.status
                        )}
                      >
                        {listing.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="pr-6 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          onView(listing.id)
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

export default MarketplaceTable;