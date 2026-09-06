import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function getStatusClass(status) {
  const styles = {
    Available: "bg-emerald-100 text-emerald-700",
    "Partially Reserved":
      "bg-amber-100 text-amber-700",
    "Fully Reserved":
      "bg-blue-100 text-blue-700",
  };

  return styles[status] || "bg-gray-100 text-gray-700";
}

function InventoryTable({ inventory }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                Lot
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Farmer
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Millet
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Total
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Reserved
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Available
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Warehouse
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
            {inventory.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0 hover:bg-muted/20"
              >
                <td className="px-4 py-4">
                  <div className="font-medium">
                    {item.lotId}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {item.id}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="font-medium">
                    {item.farmerName}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {item.farmName}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {item.millet}

                  <div className="text-xs text-muted-foreground">
                    {item.grade}
                  </div>
                </td>

                <td className="px-4 py-4">
                  {item.totalQuantity} {item.unit}
                </td>

                <td className="px-4 py-4">
                  {item.reservedQuantity} {item.unit}
                </td>

                <td className="px-4 py-4 font-medium">
                  {item.availableQuantity} {item.unit}
                </td>

                <td className="px-4 py-4">
                  {item.warehouse}

                  <div className="text-xs text-muted-foreground">
                    {item.warehouseLocation}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-right">
                  <button
                    onClick={() =>
                      navigate(`/inventory/${item.id}`)
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

export default InventoryTable;