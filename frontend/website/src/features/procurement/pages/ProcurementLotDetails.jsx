import {
    ArrowLeft,
    CheckCircle2,
    ClipboardCheck,
    Clock3,
    IndianRupee,
    Package,
    User,
} from "lucide-react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { procurementLots } from "../data/procurementLots";

function ProcurementLotDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const lot = procurementLots.find(
        (item) => item.id === id
    );

    if (!lot) {
        return (
            <div className="space-y-4">

                <h1 className="text-2xl font-bold">
                    Procurement lot not found
                </h1>

                <Button
                    onClick={() =>
                        navigate("/procurement-lots")
                    }
                >
                    Back to Procurement Lots
                </Button>

            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-3">

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                            navigate("/procurement-lots")
                        }
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Button>

                    <div>

                        <div className="flex flex-wrap items-center gap-3">

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                                {lot.id}
                            </h1>

                            <LotStatus status={lot.status} />

                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Procurement lot · {lot.procurementDate}
                        </p>

                    </div>

                </div>


                <Button
                    variant="outline"
                    onClick={() =>
                        navigate(`/farmers/${lot.farmerId}`)
                    }
                >
                    <User className="mr-2 h-4 w-4" />
                    View Farmer
                </Button>

            </div>


            {/* Summary */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <SummaryCard
                    title="Quantity"
                    value={`${lot.quantity.toLocaleString("en-IN")} kg`}
                    icon={Package}
                />

                <SummaryCard
                    title="Price"
                    value={`₹${lot.pricePerKg}/kg`}
                    icon={IndianRupee}
                />

                <SummaryCard
                    title="Total Value"
                    value={`₹${lot.totalValue.toLocaleString("en-IN")}`}
                    icon={IndianRupee}
                />

                <SummaryCard
                    title="Quality"
                    value={lot.qualityStatus}
                    icon={CheckCircle2}
                />

            </div>


            {/* Farmer + Farm */}
            <div className="grid gap-6 lg:grid-cols-2">

                <FarmerCard lot={lot} />

                <FarmCard lot={lot} />

            </div>


            {/* Procurement Details */}
            <Card className="border-slate-200/80 bg-white shadow-xs">

                <CardHeader>
                    <CardTitle className="text-lg font-bold">
                        Procurement Details
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">

                        <Detail
                            label="Lot ID"
                            value={lot.id}
                        />

                        <Detail
                            label="Millet"
                            value={lot.millet}
                        />

                        <Detail
                            label="Quantity"
                            value={`${lot.quantity.toLocaleString("en-IN")} kg`}
                        />

                        <Detail
                            label="Procurement Date"
                            value={lot.procurementDate}
                        />

                        <Detail
                            label="Price per Kg"
                            value={`₹${lot.pricePerKg}`}
                        />

                        <Detail
                            label="Total Value"
                            value={`₹${lot.totalValue.toLocaleString("en-IN")}`}
                        />

                        <Detail
                            label="Quality Status"
                            value={lot.qualityStatus}
                        />

                        <Detail
                            label="Lot Status"
                            value={lot.status}
                        />

                    </div>

                </CardContent>

            </Card>


            {/* Workflow */}
            <ProcurementWorkflow lot={lot} />


            {/* Actions */}
            <Card className="border-slate-200/80 bg-white shadow-xs">

                <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:justify-end">

                    {(lot.status === "Pending Inspection" ||
                        lot.status === "Quality Inspection") && (
                            <Button
                                onClick={() =>
                                    navigate(
                                        `/procurement-lots/${lot.id}/inspection`
                                    )
                                }
                            >
                                <ClipboardCheck className="mr-2 h-4 w-4" />
                                Open Quality Inspection
                            </Button>
                        )}

                    {lot.status === "Ready for Payment" && (
                        <Button onClick={() =>
                            navigate(`/procurement-lots/${lot.id}/payment`)
                        }>
                            <IndianRupee className="mr-2 h-4 w-4" />
                            Process Payment
                        </Button>
                    )}

                    {lot.status === "Completed" && (
                        <Button variant="outline" onClick={() =>
                            navigate(`/procurement-lots/${lot.id}/certification`)
                        }>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            View Certification
                        </Button>
                    )}

                </CardContent>

            </Card>

        </div>
    );
}


/* ---------------- Summary Card ---------------- */

function SummaryCard({
    title,
    value,
    icon: Icon,
}) {
    return (
        <Card className="border-slate-200/80 bg-white shadow-xs">

            <CardContent className="flex items-center justify-between p-5">

                <div>
                    <p className="text-xs font-medium text-slate-500">
                        {title}
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                        {value}
                    </p>
                </div>

                <div className="rounded-lg bg-slate-100 p-3">
                    <Icon className="h-5 w-5 text-slate-600" />
                </div>

            </CardContent>

        </Card>
    );
}


/* ---------------- Farmer Card ---------------- */

function FarmerCard({ lot }) {
    return (
        <Card className="border-slate-200/80 bg-white shadow-xs">

            <CardHeader>
                <CardTitle className="text-lg font-bold">
                    Farmer
                </CardTitle>
            </CardHeader>

            <CardContent>

                <div className="flex items-center gap-4">

                    <div className="rounded-full bg-slate-100 p-3">
                        <User className="h-5 w-5 text-slate-600" />
                    </div>

                    <div>

                        <p className="font-semibold text-slate-900">
                            {lot.farmerName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Farmer ID: {lot.farmerId}
                        </p>

                    </div>

                </div>

            </CardContent>

        </Card>
    );
}


/* ---------------- Farm Card ---------------- */

function FarmCard({ lot }) {
    return (
        <Card className="border-slate-200/80 bg-white shadow-xs">

            <CardHeader>
                <CardTitle className="text-lg font-bold">
                    Farm
                </CardTitle>
            </CardHeader>

            <CardContent>

                <p className="font-semibold text-slate-900">
                    {lot.farmName}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                    Linked to {lot.farmerName}
                </p>

                <div className="mt-4">

                    <Badge variant="secondary">
                        Farm verified
                    </Badge>

                </div>

            </CardContent>

        </Card>
    );
}


/* ---------------- Detail ---------------- */

function Detail({
    label,
    value,
}) {
    return (
        <div>

            <p className="text-xs text-muted-foreground">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
                {value}
            </p>

        </div>
    );
}


/* ---------------- Status ---------------- */

function LotStatus({ status }) {
    if (status === "Completed") {
        return (
            <Badge>
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Completed
            </Badge>
        );
    }

    if (status === "Ready for Payment") {
        return (
            <Badge variant="secondary">
                Ready for Payment
            </Badge>
        );
    }

    if (
        status === "Pending Inspection" ||
        status === "Quality Inspection"
    ) {
        return (
            <Badge variant="outline">
                <Clock3 className="mr-1 h-3 w-3" />
                {status}
            </Badge>
        );
    }

    return (
        <Badge variant="outline">
            {status}
        </Badge>
    );
}


/* ---------------- Workflow ---------------- */

function ProcurementWorkflow({ lot }) {
    const steps = [
        {
            label: "Procurement Created",
            completed: true,
        },
        {
            label: "Quality Inspection",
            completed:
                lot.status === "Ready for Payment" ||
                lot.status === "Completed",
        },
        {
            label: "Certification",
            completed:
                lot.status === "Completed",
        },
        {
            label: "Payment",
            completed:
                lot.status === "Completed",
        },
    ];

    return (
        <Card className="border-slate-200/80 bg-white shadow-xs">

            <CardHeader>
                <CardTitle className="text-lg font-bold">
                    Procurement Workflow
                </CardTitle>
            </CardHeader>

            <CardContent>

                <div className="grid gap-4 md:grid-cols-4">

                    {steps.map((step, index) => (
                        <div
                            key={step.label}
                            className="relative"
                        >

                            <div className="flex items-center gap-3">

                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${step.completed
                                            ? "bg-emerald-100 text-emerald-600"
                                            : "bg-slate-100 text-slate-400"
                                        }`}
                                >
                                    {step.completed ? (
                                        <CheckCircle2 className="h-5 w-5" />
                                    ) : (
                                        <span className="text-sm font-bold">
                                            {index + 1}
                                        </span>
                                    )}
                                </div>

                                <div>

                                    <p className="text-sm font-semibold">
                                        {step.label}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        {step.completed
                                            ? "Completed"
                                            : "Pending"}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </CardContent>

        </Card>
    );
}

export default ProcurementLotDetails;