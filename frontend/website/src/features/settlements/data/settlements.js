export const settlements = [
  {
    id: "SET-001",
    orderId: "ORD-001",
    dispatchId: "DSP-001",

    buyerId: "BUY-001",
    buyerName: "Healthy Foods Processing",
    buyerType: "Processor",

    farmerId: "F003",
    farmerName: "Mahesh Solanki",

    lotId: "PL-1018",
    millet: "Finger Millet",
    grade: "Grade A",

    quantity: 500,
    unit: "kg",
    pricePerKg: 48,

    grossAmount: 24000,

    procurementAmount: 17500,
    fpoMargin: 6500,

    transportCost: 1000,
    otherCharges: 0,

    finalAmount: 23000,

    paymentMethod: "Bank Transfer",

    status: "Pending Settlement",

    deliveryDate: null,
    paymentDate: null,
    transactionId: null,

    notes: "",
  },

  {
    id: "SET-002",
    orderId: "ORD-002",
    dispatchId: "DSP-002",

    buyerId: "BUY-002",
    buyerName: "Shree Agro Foods",
    buyerType: "Processor",

    farmerId: "F004",
    farmerName: "Kiran Patel",

    lotId: "PL-1015",
    millet: "Foxtail Millet",
    grade: "Grade B",

    quantity: 700,
    unit: "kg",
    pricePerKg: 45,

    grossAmount: 31500,

    procurementAmount: 28000,
    fpoMargin: 3500,

    transportCost: 1200,
    otherCharges: 0,

    finalAmount: 30300,

    paymentMethod: "Bank Transfer",

    status: "Paid",

    deliveryDate: "1 Sep 2026",
    paymentDate: "2 Sep 2026",
    transactionId: "TXN-20260902-002",

    notes: "Settlement completed after delivery confirmation.",
  },

  {
    id: "SET-003",
    orderId: "ORD-003",
    dispatchId: null,

    buyerId: "BUY-003",
    buyerName: "Aarogya Foods SHG",
    buyerType: "SHG",

    farmerId: "F001",
    farmerName: "Ramesh Patel",

    lotId: "PL-1024",
    millet: "Pearl Millet",
    grade: "Grade A",

    quantity: 300,
    unit: "kg",
    pricePerKg: 42,

    grossAmount: 12600,

    procurementAmount: 9000,
    fpoMargin: 3600,

    transportCost: 500,
    otherCharges: 0,

    finalAmount: 12100,

    paymentMethod: "Bank Transfer",

    status: "Awaiting Delivery",

    deliveryDate: null,
    paymentDate: null,
    transactionId: null,

    notes: "Payment settlement after delivery.",
  },
];