import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const procurementData = [
  {
    millet: "Pearl Millet",
    quantity: "4.2 MT",
    value: "₹1,26,000",
  },
  {
    millet: "Finger Millet",
    quantity: "3.1 MT",
    value: "₹1,08,500",
  },
  {
    millet: "Foxtail Millet",
    quantity: "2.4 MT",
    value: "₹96,000",
  },
];

function ProcurementSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Procurement Summary</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Millet</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">
                Value
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {procurementData.map((item) => (
              <TableRow key={item.millet}>
                <TableCell className="font-medium">
                  {item.millet}
                </TableCell>

                <TableCell>
                  {item.quantity}
                </TableCell>

                <TableCell className="text-right">
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ProcurementSummary;