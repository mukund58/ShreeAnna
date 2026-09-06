import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const districtData = [
  { district: "Mehsana", totalFarms: 280, verified: 210, pending: 52, rejected: 18 },
  { district: "Patan", totalFarms: 240, verified: 190, pending: 38, rejected: 12 },
  { district: "Banaskantha", totalFarms: 180, verified: 140, pending: 32, rejected: 8 },
  { district: "Gandhinagar", totalFarms: 150, verified: 120, pending: 24, rejected: 6 },
  { district: "Other", totalFarms: 189, verified: 132, pending: 28, rejected: 10 },
];

function FarmsByDistrict() {
  return (
    <Card className="shadow-xs border-slate-200/80 bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-bold text-slate-900">
          Farms by District (Verification)
        </CardTitle>

        <Button
          variant="outline"
          size="sm"
          className="h-8 text-xs font-medium text-slate-700 hover:text-slate-900 border-slate-200"
        >
          View Report
          <ChevronRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </CardHeader>

      <CardContent className="px-0 pb-2">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-100 bg-slate-50/50 hover:bg-slate-50/50">
              <TableHead className="text-xs font-semibold text-slate-600 pl-6">
                District
              </TableHead>
              <TableHead className="text-xs font-semibold text-slate-600 text-right">
                Total Farms
              </TableHead>
              <TableHead className="text-xs font-semibold text-slate-600 text-right">
                Verified
              </TableHead>
              <TableHead className="text-xs font-semibold text-slate-600 text-right">
                Pending
              </TableHead>
              <TableHead className="text-xs font-semibold text-slate-600 text-right pr-6">
                Rejected
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {districtData.map((row) => (
              <TableRow
                key={row.district}
                className="border-slate-100 hover:bg-slate-50/80 transition-colors"
              >
                <TableCell className="font-semibold text-xs text-slate-800 pl-6">
                  {row.district}
                </TableCell>
                <TableCell className="text-xs text-slate-700 text-right font-medium">
                  {row.totalFarms}
                </TableCell>
                <TableCell className="text-xs text-slate-700 text-right font-medium">
                  {row.verified}
                </TableCell>
                <TableCell className="text-xs text-slate-700 text-right font-medium">
                  {row.pending}
                </TableCell>
                <TableCell className="text-xs text-slate-700 text-right font-medium pr-6">
                  {row.rejected}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default FarmsByDistrict;
