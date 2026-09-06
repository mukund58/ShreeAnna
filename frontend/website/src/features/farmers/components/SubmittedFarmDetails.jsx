import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function DetailItem({ label, value }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function SubmittedFarmDetails({ farm }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Submitted Farm Details</CardTitle>
      </CardHeader>

      <CardContent>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">

          <DetailItem
            label="Farm ID"
            value={farm.id}
          />

          <DetailItem
            label="Farm Name"
            value={farm.farmName}
          />

          <DetailItem
            label="Area"
            value={`${farm.area} acres`}
          />

          <DetailItem
            label="Soil Type"
            value={farm.soilType}
          />

          <DetailItem
            label="District"
            value={farm.district}
          />

          <DetailItem
            label="Taluka"
            value={farm.taluka}
          />

          <DetailItem
            label="Village"
            value={farm.village}
          />

          <DetailItem
            label="Survey Number"
            value={farm.surveyNumber}
          />

          <DetailItem
            label="Submitted On"
            value={farm.submittedAt}
          />

        </div>


        {/* Location / photo placeholders */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-lg border p-5">

            <p className="text-sm font-medium">
              Farm Location
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Location captured from farmer's mobile application.
            </p>

            <div className="mt-4 flex h-32 items-center justify-center rounded-md bg-muted">
              <p className="text-sm text-muted-foreground">
                Map / coordinates
              </p>
            </div>

          </div>


          <div className="rounded-lg border p-5">

            <p className="text-sm font-medium">
              Farm Photo
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Photo submitted by the farmer.
            </p>

            <div className="mt-4 flex h-32 items-center justify-center rounded-md bg-muted">
              <p className="text-sm text-muted-foreground">
                Farm photo
              </p>
            </div>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}

export default SubmittedFarmDetails;