import {
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function OrderApproval({
  order,
  decision,
  remarks,
  onDecisionChange,
  onRemarksChange,
  onSubmit,
}) {
  const isPending =
    order.status === "Pending Approval";

  if (!isPending) {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center gap-3">
          {order.status === "Approved" ||
          order.status === "Completed" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          ) : (
            <XCircle className="h-5 w-5 text-red-600" />
          )}

          <div>
            <p className="text-sm font-medium text-slate-900">
              Order {order.status.toLowerCase()}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              This order no longer requires approval.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">
          Decision
        </Label>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() =>
              onDecisionChange("Approved")
            }
            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
              decision === "Approved"
                ? "border-emerald-500 bg-emerald-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            <div>
              <p className="text-sm font-medium">
                Approve Order
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Reserve stock and proceed to dispatch.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              onDecisionChange("Rejected")
            }
            className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
              decision === "Rejected"
                ? "border-red-500 bg-red-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <XCircle className="h-5 w-5 text-red-600" />

            <div>
              <p className="text-sm font-medium">
                Reject Order
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Reject the buyer request.
              </p>
            </div>
          </button>
        </div>
      </div>

      {decision === "Rejected" && (
        <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />

          <div>
            <p className="text-sm font-medium text-red-900">
              Rejection reason required
            </p>

            <p className="mt-1 text-xs text-red-700">
              Add a clear reason so the buyer knows why the
              order was rejected.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="approvalRemarks">
          Manager Remarks
        </Label>

        <Textarea
          id="approvalRemarks"
          value={remarks}
          onChange={(e) =>
            onRemarksChange(e.target.value)
          }
          placeholder={
            decision === "Rejected"
              ? "Enter reason for rejecting this order..."
              : "Add approval remarks..."
          }
          rows={4}
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!decision}
          className={
            decision === "Rejected"
              ? "bg-red-600 hover:bg-red-700"
              : ""
          }
        >
          {decision === "Rejected" ? (
            <>
              <XCircle className="mr-2 h-4 w-4" />
              Reject Order
            </>
          ) : (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Approve Order
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default OrderApproval;