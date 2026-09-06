import {
  CheckCircle2,
  Clock3,
  MapPin,
  Ruler,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VerificationSummary({ farm }) {
  const isVerified = farm.status === "Verified";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verification Summary</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-muted p-2">
              {isVerified ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <Clock3 className="h-5 w-5" />
              )}
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Verification Status
              </p>

              <p className="text-sm font-medium">
                {farm.status}
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-muted p-2">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Location
              </p>

              <p className="text-sm font-medium">
                {farm.village}, {farm.district}
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-muted p-2">
              <Ruler className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Submitted Area
              </p>

              <p className="text-sm font-medium">
                {farm.area} acres
              </p>
            </div>
          </div>


          <div>
            <p className="text-xs text-muted-foreground">
              Submitted
            </p>

            <p className="mt-1 text-sm font-medium">
              {farm.submittedAt}
            </p>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

export default VerificationSummary;