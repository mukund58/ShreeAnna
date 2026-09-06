import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SalesOverview({ data }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-base font-semibold">
          Sales by Millet
        </h3>

        <p className="text-sm text-muted-foreground">
          Quantity sold through the FPO marketplace
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="millet" />

            <YAxis />

            <Tooltip
              formatter={(value) => [
                `${Number(value).toLocaleString()} kg`,
                "Quantity",
              ]}
            />

            <Bar
              dataKey="quantity"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesOverview;