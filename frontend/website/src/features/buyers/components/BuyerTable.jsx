import {
  Building2,
  Eye,
  Factory,
  UsersRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function BuyerTable({ buyers }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                Buyer
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Type
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Contact
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Location
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Orders
              </th>

              <th className="px-4 py-3 text-left font-medium">
                Total Purchase
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
            {buyers.map((buyer) => {
              const TypeIcon =
                buyer.type === "Processor"
                  ? Factory
                  : UsersRound;

              return (
                <tr
                  key={buyer.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <Building2 size={17} />
                      </div>

                      <div>
                        <div className="font-medium">
                          {buyer.name}
                        </div>

                        <div className="text-xs text-muted-foreground">
                          {buyer.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1.5">
                      <TypeIcon size={15} />

                      {buyer.type}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="font-medium">
                      {buyer.contactPerson}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {buyer.phone}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    {buyer.address}
                  </td>

                  <td className="px-4 py-4">
                    {buyer.ordersCount}
                  </td>

                  <td className="px-4 py-4 font-medium">
                    ₹{buyer.totalPurchase.toLocaleString()}
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      {buyer.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-right">
                    <button
                      onClick={() =>
                        navigate(
                          `/buyers/${buyer.id}`
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                      <Eye size={15} />
                      View
                    </button>
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

export default BuyerTable;