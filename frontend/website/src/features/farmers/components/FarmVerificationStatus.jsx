import { Badge } from "@/components/ui/badge";

function FarmVerificationStatus({ status }) {
  const variants = {
    "Pending Verification": "secondary",
    "Under Review": "outline",
    Verified: "default",
    Rejected: "destructive",
  };

  return (
    <Badge variant={variants[status] || "outline"}>
      {status}
    </Badge>
  );
}

export default FarmVerificationStatus;