import {
  ArrowRight,
  MapPin,
  Search,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle

} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

const pendingFarms = [
  {
    id: "FM-006",
    farmer: "Suresh Kumar",
    farm: "Green Valley Farm",
    village: "Anand",
    surveyNumber: "88/1",
    submitted: "Today",
  },
  {
    id: "FM-007",
    farmer: "Mahesh Solanki",
    farm: "Shree Farm",
    village: "Vijapur",
    surveyNumber: "102/4",
    submitted: "Yesterday",
  },
  {
    id: "FM-008",
    farmer: "Kiran Patel",
    farm: "Patel Farm",
    village: "Mehsana",
    surveyNumber: "45/2",
    submitted: "Yesterday",
  },
];

function FarmVerification() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Farm Verification</CardTitle>

          <p className="mt-1 text-sm text-muted-foreground">
            Farms waiting for land verification
          </p>
        </div>

        <Badge variant="secondary">
          {pendingFarms.length} Pending
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3">

        {pendingFarms.map((farm) => (
          <div
            key={farm.id}
            className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
          >

            {/* Farm information */}
            <div className="flex items-start gap-3">

              <div className="rounded-lg bg-muted p-2">
                <MapPin className="h-4 w-4" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">
                    {farm.farm}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    {farm.id}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {farm.farmer}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {farm.village} · Survey No. {farm.surveyNumber}
                </p>
              </div>

            </div>


            {/* Action */}
            <Button
              variant="outline"
              size="sm"
            >
              <Search className="mr-2 h-4 w-4" />
              Verify
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </div>
        ))}


        {/* View all */}
        <div className="pt-2">
          <Button
            variant="ghost"
            className="w-full"
          >
            View All Farm Verifications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default FarmVerification;