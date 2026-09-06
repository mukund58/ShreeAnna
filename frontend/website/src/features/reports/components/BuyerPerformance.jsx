import { Building2, Users } from "lucide-react";

function BuyerPerformance({ data }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-base font-semibold">
          Buyer Performance
        </h3>

        <p className="text-sm text-muted-foreground">
          Top buyers by purchase value
        </p>
      </div>

      <div className="space-y-4">
        {data.map((buyer) => (
          <div
            key={buyer.name}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2">
                {buyer.type === "Processor" ? (
                  <Building2 className="h-4 w-4" />
                ) : (
                  <Users className="h-4 w-4" />
                )}
              </div>

              <div>
                <p className="text-sm font-medium">
                  {buyer.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {buyer.type} · {buyer.orders} orders
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold">
              ₹{buyer.purchaseValue.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerPerformance;