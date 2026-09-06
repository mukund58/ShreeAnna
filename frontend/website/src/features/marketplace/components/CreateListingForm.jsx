import { useMemo } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CreateListingForm({
  lots,
  values,
  onChange,
}) {
  const selectedLot = useMemo(
    () =>
      lots.find(
        (lot) => lot.id === values.lotId
      ),
    [lots, values.lotId]
  );

  const updateValue = (field, value) => {
    onChange({
      ...values,
      [field]: value,
    });
  };

  const maxQuantity =
    selectedLot?.availableQuantity || 0;

  const totalValue =
    Number(values.quantity || 0) *
    Number(values.pricePerKg || 0);

  return (
    <div className="space-y-6">
      {/* Lot Selection */}
      <div className="space-y-2">
        <Label>Certified Procurement Lot</Label>

        <Select
          value={values.lotId}
          onValueChange={(value) =>
            updateValue("lotId", value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select certified lot" />
          </SelectTrigger>

          <SelectContent>
            {lots.map((lot) => (
              <SelectItem
                key={lot.id}
                value={lot.id}
              >
                {lot.id} — {lot.millet} —{" "}
                {lot.availableQuantity.toLocaleString()} kg
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <p className="text-xs text-slate-500">
          Only certified lots with available stock are shown.
        </p>
      </div>

      {/* Selected Lot */}
      {selectedLot && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-slate-500">
                Millet
              </p>

              <p className="mt-1 font-medium text-slate-900">
                {selectedLot.millet}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Grade
              </p>

              <p className="mt-1 font-medium text-slate-900">
                {selectedLot.grade}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Available Stock
              </p>

              <p className="mt-1 font-medium text-emerald-700">
                {selectedLot.availableQuantity.toLocaleString()} kg
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quantity + Price */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quantity">
            Listing Quantity (kg)
          </Label>

          <Input
            id="quantity"
            type="number"
            min="1"
            max={maxQuantity}
            value={values.quantity}
            onChange={(e) =>
              updateValue(
                "quantity",
                e.target.value
              )
            }
            placeholder="Enter quantity"
          />

          {selectedLot && (
            <p className="text-xs text-slate-500">
              Maximum:{" "}
              {maxQuantity.toLocaleString()} kg
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pricePerKg">
            Selling Price per kg (₹)
          </Label>

          <Input
            id="pricePerKg"
            type="number"
            min="1"
            step="0.01"
            value={values.pricePerKg}
            onChange={(e) =>
              updateValue(
                "pricePerKg",
                e.target.value
              )
            }
            placeholder="e.g. 42"
          />
        </div>
      </div>

      {/* Listing Title */}
      <div className="space-y-2">
        <Label htmlFor="title">
          Listing Title
        </Label>

        <Input
          id="title"
          value={values.title}
          onChange={(e) =>
            updateValue(
              "title",
              e.target.value
            )
          }
          placeholder="e.g. Grade A Pearl Millet"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">
          Description
        </Label>

        <Textarea
          id="description"
          rows={4}
          value={values.description}
          onChange={(e) =>
            updateValue(
              "description",
              e.target.value
            )
          }
          placeholder="Describe the millet available for buyers..."
        />
      </div>

      {/* Calculated value */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Estimated Listing Value
          </span>

          <span className="text-lg font-semibold text-slate-900">
            ₹{totalValue.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreateListingForm;