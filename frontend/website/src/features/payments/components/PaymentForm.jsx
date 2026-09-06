import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PaymentForm({ values, onChange }) {
  return (
    <div className="space-y-2">
      <Label>Payment Method</Label>

      <Select
        value={values.paymentMethod}
        onValueChange={(value) =>
          onChange({
            ...values,
            paymentMethod: value,
          })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select payment method" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Bank Transfer">
            Bank Transfer
          </SelectItem>

          <SelectItem value="UPI">
            UPI
          </SelectItem>

          <SelectItem value="Cash">
            Cash
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default PaymentForm;