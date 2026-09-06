import {
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function FarmerProfile({ farmer }) {
  return (
    <Card className="border-slate-200/80 shadow-xs">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Farmer Profile
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <ProfileItem
            icon={User}
            label="Farmer ID"
            value={farmer.id}
          />

          <ProfileItem
            icon={Phone}
            label="Phone"
            value={farmer.phone}
          />

          <ProfileItem
            icon={Mail}
            label="Email"
            value={farmer.email}
          />

          <ProfileItem
            icon={MapPin}
            label="Location"
            value={`${farmer.village}, ${farmer.district}`}
          />

        </div>

        <div className="mt-6 flex items-center gap-3 border-t pt-5">
          <span className="text-sm text-muted-foreground">
            Status
          </span>

          <Badge
            variant={
              farmer.status === "Active"
                ? "default"
                : farmer.status === "Pending"
                  ? "secondary"
                  : "outline"
            }
          >
            {farmer.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-slate-100 p-2">
        <Icon className="h-4 w-4 text-slate-600" />
      </div>

      <div>
        <p className="text-xs text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-900">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
}

export default FarmerProfile;