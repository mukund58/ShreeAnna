import {
  Users,
  UserCheck,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import StatCard from "../../dashboard/components/StatCard";

function FPOStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Members"
        value="6"
        description="Registered FPO staff"
        icon={Users}
        iconBgClass="bg-blue-100/80"
        iconColorClass="text-blue-600"
      />

      <StatCard
        title="Active Members"
        value="6"
        description="Currently active"
        icon={UserCheck}
        iconBgClass="bg-emerald-100/80"
        iconColorClass="text-emerald-600"
      />

      <StatCard
        title="Operational Roles"
        value="6"
        description="Across departments"
        icon={BriefcaseBusiness}
        iconBgClass="bg-purple-100/80"
        iconColorClass="text-purple-600"
      />

      <StatCard
        title="Verified Operations"
        value="100%"
        description="Assigned responsibilities"
        icon={ShieldCheck}
        iconBgClass="bg-amber-100/80"
        iconColorClass="text-amber-600"
      />
    </div>
  );
}

export default FPOStats;