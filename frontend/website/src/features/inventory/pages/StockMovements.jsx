import { useMemo, useState } from "react";
import { ArrowDownToLine, Search } from "lucide-react";

import StockMovementTable from "../components/StockMovementTable";
import { stockMovements } from "../data/stockMovements";
import ReceiveStockForm from "../components/ReceiveStockForm";

function StockMovements() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [showReceiveForm, setShowReceiveForm] = useState(false);
    {
        showReceiveForm && (
            <ReceiveStockForm
                onClose={() => setShowReceiveForm(false)}
            />
        )
    }
    const filteredMovements = useMemo(() => {
        const query = search.toLowerCase();

        return stockMovements.filter((movement) => {
            const matchesSearch =
                movement.id.toLowerCase().includes(query) ||
                movement.lotId.toLowerCase().includes(query) ||
                movement.millet.toLowerCase().includes(query) ||
                movement.warehouse.toLowerCase().includes(query);

            const matchesType =
                type === "All" || movement.type === type;

            return matchesSearch && matchesType;
        });
    }, [search, type]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Stock Movements
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Track stock received, reserved and moved through the FPO.
                    </p>
                </div>

                <button
                    onClick={() => setShowReceiveForm(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                    <ArrowDownToLine size={16} />
                    Receive Stock
                </button>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border bg-white p-4 md:flex-row">
                <div className="relative flex-1">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />

                    <input
                        type="text"
                        placeholder="Search movement, lot or warehouse..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border bg-background py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="rounded-lg border bg-background px-3 py-2 text-sm outline-none"
                >
                    <option value="All">All Movements</option>
                    <option value="Stock Received">
                        Stock Received
                    </option>
                    <option value="Stock Reserved">
                        Stock Reserved
                    </option>
                </select>
            </div>

            <StockMovementTable movements={filteredMovements} />
        </div>
    );
}

export default StockMovements;