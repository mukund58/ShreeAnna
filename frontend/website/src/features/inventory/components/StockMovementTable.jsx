import { ArrowDownToLine, LockKeyhole } from "lucide-react";

function getMovementStyle(type) {
  if (type === "Stock Received") {
    return {
      className: "bg-emerald-100 text-emerald-700",
      icon: ArrowDownToLine,
    };
  }

  if (type === "Stock Reserved") {
    return {
      className: "bg-amber-100 text-amber-700",
      icon: LockKeyhole,
    };
  }

  return {
    className: "bg-gray-100 text-gray-700",
    icon: ArrowDownToLine,
  };
}

function StockMovementTable({ movements }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                Movement
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Lot
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Type
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Quantity
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Warehouse
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Reference
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Date
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Performed By
              </th>
            </tr>
          </thead>

          <tbody>
            {movements.map((movement) => {
              const style = getMovementStyle(movement.type);
              const Icon = style.icon;

              return (
                <tr
                  key={movement.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  <td className="px-4 py-4 font-medium">
                    {movement.id}
                  </td>

                  <td className="px-4 py-4">
                    <div className="font-medium">
                      {movement.lotId}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {movement.millet}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.className}`}
                    >
                      <Icon size={14} />
                      {movement.type}
                    </span>
                  </td>

                  <td className="px-4 py-4 font-medium">
                    {movement.quantity} {movement.unit}
                  </td>

                  <td className="px-4 py-4">
                    {movement.warehouse}
                  </td>

                  <td className="px-4 py-4">
                    <div>{movement.referenceType}</div>

                    <div className="text-xs text-muted-foreground">
                      {movement.referenceId}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    {movement.date}
                  </td>

                  <td className="px-4 py-4">
                    {movement.performedBy}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockMovementTable;