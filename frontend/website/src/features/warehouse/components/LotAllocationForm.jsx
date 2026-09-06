import { useState } from "react";

function LotAllocationForm({ onClose }) {
  const [form, setForm] = useState({
    lotId: "",
    warehouseId: "",
    quantity: "",
    storageSection: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lot allocated:", {
      ...form,
      quantity: Number(form.quantity),
    });

    onClose();
  };

  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Allocate Procurement Lot
        </h2>

        <p className="text-sm text-muted-foreground">
          Assign certified stock to a warehouse location.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Procurement Lot">
            <select
              name="lotId"
              value={form.lotId}
              onChange={handleChange}
              required
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">
                Select procurement lot
              </option>

              <option value="PL-1024">
                PL-1024 — Pearl Millet — 1200 kg
              </option>

              <option value="PL-1020">
                PL-1020 — Pearl Millet — 2100 kg
              </option>

              <option value="PL-1018">
                PL-1018 — Finger Millet — 950 kg
              </option>
            </select>
          </Field>

          <Field label="Warehouse">
            <select
              name="warehouseId"
              value={form.warehouseId}
              onChange={handleChange}
              required
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">
                Select warehouse
              </option>

              <option value="WH-001">
                Dahod FPO Warehouse
              </option>

              <option value="WH-002">
                Mehsana FPO Warehouse
              </option>

              <option value="WH-003">
                Anand FPO Warehouse
              </option>
            </select>
          </Field>

          <Field label="Quantity">
            <input
              type="number"
              name="quantity"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </Field>

          <Field label="Storage Section">
            <input
              type="text"
              name="storageSection"
              value={form.storageSection}
              onChange={handleChange}
              placeholder="Example: Section A-02"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </Field>
        </div>

        <Field label="Remarks">
          <textarea
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            rows={3}
            placeholder="Add allocation remarks..."
            className="w-full resize-none rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
        </Field>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Allocate Lot
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      {children}
    </div>
  );
}

export default LotAllocationForm;