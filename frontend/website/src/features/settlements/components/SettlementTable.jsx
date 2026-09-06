import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function statusClass(status) {
  const styles = {
    "Awaiting Delivery":
      "bg-blue-100 text-blue-700",

    "Pending Settlement":
      "bg-amber-100 text-amber-700",

    Paid:
      "bg-emerald-100 text-emerald-700",
  };

  return (
    styles[status] || "bg-gray-100 text-gray-700"
  );
}

function SettlementTable({ settlements }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                Settlement
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Buyer
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Lot
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Quantity
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Amount
              </th>

              <th className="px-4 py-3 text-left font-medium">
                FPO Margin
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Status
              </th>

              <th className="px-4 py-3 text-right font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {settlements.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0 hover:bg-muted/20"
              >
                <td className="px-4 py-4">
                  <div className="font-medium">
                    {item.id}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {item.orderId}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="font-medium">
                    {item.buyerName}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {item.buyerType}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div>{item.lotId}</div>

                  <div className="text-xs text-muted-foreground">
                    {item.millet}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {item.quantity} {item.unit}
                </td>

                <td className="px-4 py-4 font-medium">
                  ₹{item.finalAmount.toLocaleString()}
                </td>

                <td className="px-4 py-4">
                  ₹{item.fpoMargin.toLocaleString()}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <button
                    onClick={() =>
                      navigate(
                        `/settlements/${item.id}`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-muted"
                  >
                    <Eye size={15} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SettlementTable;