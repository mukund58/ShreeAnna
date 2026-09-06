import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function CertificationForm({
  values,
  onChange,
}) {
  const updateValue = (field, value) => {
    onChange({
      ...values,
      [field]: value,
    });
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="certificateNumber">
          Certificate Number
        </Label>

        <Input
          id="certificateNumber"
          value={values.certificateNumber}
          onChange={(e) =>
            updateValue(
              "certificateNumber",
              e.target.value
            )
          }
          placeholder="e.g. CERT-2026-001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="issuedBy">
          Issued By
        </Label>

        <Input
          id="issuedBy"
          value={values.issuedBy}
          onChange={(e) =>
            updateValue("issuedBy", e.target.value)
          }
          placeholder="Inspector / Officer name"
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="certificationRemarks">
          Certification Remarks
        </Label>

        <Textarea
          id="certificationRemarks"
          value={values.remarks}
          onChange={(e) =>
            updateValue("remarks", e.target.value)
          }
          placeholder="Add any certification remarks..."
          rows={4}
        />
      </div>
    </div>
  );
}

export default CertificationForm;