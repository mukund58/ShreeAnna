function InventoryOverview({ data }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-base font-semibold">
          Inventory Overview
        </h3>

        <p className="text-sm text-muted-foreground">
          Current stock availability by millet
        </p>
      </div>

      <div className="space-y-5">
        {data.map((item) => {
          const reservedPercentage =
            item.total > 0
              ? (item.reserved / item.total) * 100
              : 0;

          return (
            <div key={item.millet}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                  {item.millet}
                </span>

                <span className="text-sm text-muted-foreground">
                  {item.available.toLocaleString()} kg available
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{
                    width: `${reservedPercentage}%`,
                  }}
                />
              </div>

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>
                  Total: {item.total.toLocaleString()} kg
                </span>

                <span>
                  Reserved: {item.reserved.toLocaleString()} kg
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InventoryOverview;