export const marketplaceListings = [
  {
    id: "ML-001",

    lotId: "PL-1024",

    farmerId: "F001",
    farmerName: "Ramesh Patel",
    farmName: "Green Hill Farm",

    millet: "Pearl Millet",
    grade: "Grade A",

    quantity: 1200,
    availableQuantity: 1200,
    unit: "kg",

    pricePerKg: 42,
    totalValue: 50400,

    certificationId: "CERT-001",
    inspectionId: "QI-003",

    listedDate: "5 Sep 2026",

    status: "Available",

    description:
      "Certified Pearl Millet sourced from a verified farmer and quality-inspected procurement lot.",

    orders: [],
  },

  {
    id: "ML-002",

    lotId: "PL-1020",

    farmerId: "F005",
    farmerName: "Dinesh Chauhan",
    farmName: "Green Fields",

    millet: "Pearl Millet",
    grade: "Grade A",

    quantity: 2100,
    availableQuantity: 2100,
    unit: "kg",

    pricePerKg: 41,
    totalValue: 86100,

    certificationId: "CERT-002",
    inspectionId: "QI-004",

    listedDate: "4 Sep 2026",

    status: "Available",

    description:
      "Grade A Pearl Millet available for bulk purchase.",

    orders: [],
  },

  {
    id: "ML-003",

    lotId: "PL-1018",

    farmerId: "F003",
    farmerName: "Mahesh Solanki",
    farmName: "Patel Farm",

    millet: "Finger Millet",
    grade: "Grade A",

    quantity: 950,
    availableQuantity: 450,
    unit: "kg",

    pricePerKg: 48,
    totalValue: 45600,

    certificationId: "CERT-003",
    inspectionId: "QI-005",

    listedDate: "2 Sep 2026",

    status: "Partially Sold",

    description:
      "Certified Finger Millet available for processor and SHG purchase.",

    orders: [
      {
        id: "ORD-001",
        buyerName: "Healthy Foods Processing",
        buyerType: "Processor",
        quantity: 500,
        amount: 24000,
        status: "Approved",
        orderDate: "3 Sep 2026",
      },
    ],
  },

  {
    id: "ML-004",

    lotId: "PL-1015",

    farmerId: "F004",
    farmerName: "Kiran Patel",
    farmName: "Shanti Farm",

    millet: "Foxtail Millet",
    grade: "Grade B",

    quantity: 700,
    availableQuantity: 0,
    unit: "kg",

    pricePerKg: 45,
    totalValue: 31500,

    certificationId: "CERT-004",
    inspectionId: "QI-006",

    listedDate: "30 Aug 2026",

    status: "Sold Out",

    description:
      "Foxtail Millet lot completely sold to a processing partner.",

    orders: [
      {
        id: "ORD-002",
        buyerName: "Shree Agro Foods",
        buyerType: "Processor",
        quantity: 700,
        amount: 31500,
        status: "Completed",
        orderDate: "31 Aug 2026",
      },
    ],
  },
];