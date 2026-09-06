import ReportStats from "../components/ReportStats";
import ReportFilters from "../components/ReportFilters";
import ProcurementOverview from "../components/ProcurementOverview";
import SalesOverview from "../components/SalesOverview";
import InventoryOverview from "../components/InventoryOverview";
import BuyerPerformance from "../components/BuyerPerformance";

import {
  reportStats,
  procurementByMillet,
  salesByMillet,
  inventoryOverview,
  buyerPerformance,
} from "../data/reports";

function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Reports & Analytics
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Monitor procurement, sales, inventory, buyers, and FPO
          financial performance.
        </p>
      </div>

      {/* Filters */}
      <ReportFilters />

      {/* Stats */}
      <ReportStats stats={reportStats} />

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ProcurementOverview data={procurementByMillet} />

        <SalesOverview data={salesByMillet} />
      </div>

      {/* Inventory + Buyers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <InventoryOverview data={inventoryOverview} />

        <BuyerPerformance data={buyerPerformance} />
      </div>
    </div>
  );
}

export default Reports;