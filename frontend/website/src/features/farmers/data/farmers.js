export const farmers = [
  {
    id: "F001",
    name: "Ramesh Patel",
    phone: "9876543210",
    email: "ramesh.patel@example.com",

    village: "Rampur",
    taluka: "Dahod",
    district: "Dahod",

    address: "Rampur, Dahod, Gujarat",

    status: "Active",

    totalLand: 12,

    farms: [
      {
        id: "FM-001",
        name: "Green Hill Farm",
        area: 7,
        soilType: "Black Soil",
        currentCrop: "Pearl Millet",
        status: "Verified",
        surveyNumber: "34/7",
        district: "Dahod",
        taluka: "Dahod",
        village: "Bordi",
      },
      {
        id: "FM-002",
        name: "River Side Farm",
        area: 5,
        soilType: "Loamy Soil",
        currentCrop: "Finger Millet",
        status: "Pending Verification",
        surveyNumber: "41/2",
        district: "Dahod",
        taluka: "Dahod",
        village: "Bordi",
      },
    ],

    procurementHistory: [
      {
        lotId: "PL-1024",
        millet: "Pearl Millet",
        quantity: "1.2 MT",
        price: "₹30/kg",
        status: "Certified",
        date: "5 Sep 2026",
      },
      {
        lotId: "PL-0988",
        millet: "Finger Millet",
        quantity: "850 kg",
        price: "₹35/kg",
        status: "Completed",
        date: "12 Aug 2026",
      },
    ],

    activity: [
      {
        title: "Farm FM-001 verified",
        description: "Green Hill Farm was verified by FPO admin.",
        time: "Today, 10:30 AM",
      },
      {
        title: "Farm FM-002 submitted",
        description: "River Side Farm submitted for verification.",
        time: "Yesterday",
      },
      {
        title: "Procurement payment received",
        description: "Payment received for lot PL-0988.",
        time: "12 Aug 2026",
      },
    ],
  },

  {
    id: "F002",
    name: "Suresh Kumar",
    phone: "9876543211",
    email: "suresh.kumar@example.com",
    village: "Anand",
    taluka: "Anand",
    district: "Anand",
    address: "Anand, Gujarat",
    status: "Active",
    totalLand: 8,

    farms: [
      {
        id: "FM-006",
        name: "River Side Farm",
        area: 8,
        soilType: "Black Soil",
        currentCrop: "Pearl Millet",
        status: "Pending Verification",
        surveyNumber: "88/1",
        district: "Anand",
        taluka: "Anand",
        village: "Anand",
      },
    ],

    procurementHistory: [],

    activity: [
      {
        title: "New farm submitted",
        description: "River Side Farm submitted for verification.",
        time: "Today",
      },
    ],
  },

  {
    id: "F003",
    name: "Mahesh Solanki",
    phone: "9876543212",
    email: "mahesh.solanki@example.com",
    village: "Vijapur",
    taluka: "Vijapur",
    district: "Mehsana",
    address: "Vijapur, Mehsana, Gujarat",
    status: "Pending",
    totalLand: 18,

    farms: [
      {
        id: "FM-007",
        name: "Patel Farm",
        area: 18,
        soilType: "Loamy Soil",
        currentCrop: "Finger Millet",
        status: "Pending Verification",
        surveyNumber: "102/4",
        district: "Mehsana",
        taluka: "Vijapur",
        village: "Vijapur",
      },
    ],

    procurementHistory: [],

    activity: [
      {
        title: "Farm submitted",
        description: "Patel Farm submitted for verification.",
        time: "Yesterday",
      },
    ],
  },

  {
    id: "F004",
    name: "Kiran Patel",
    phone: "9876543213",
    email: "kiran.patel@example.com",
    village: "Mehsana",
    taluka: "Mehsana",
    district: "Mehsana",
    address: "Mehsana, Gujarat",
    status: "Inactive",
    totalLand: 6,

    farms: [
      {
        id: "FM-008",
        name: "Shanti Farm",
        area: 6,
        soilType: "Black Soil",
        currentCrop: "Foxtail Millet",
        status: "Under Review",
        surveyNumber: "45/2",
        district: "Mehsana",
        taluka: "Mehsana",
        village: "Mehsana",
      },
    ],

    procurementHistory: [],

    activity: [],
  },

  {
    id: "F005",
    name: "Dinesh Chauhan",
    phone: "9876543214",
    email: "dinesh.chauhan@example.com",
    village: "Unjha",
    taluka: "Unjha",
    district: "Mehsana",
    address: "Unjha, Mehsana, Gujarat",
    status: "Active",
    totalLand: 10,

    farms: [
      {
        id: "FM-009",
        name: "Green Fields",
        area: 10,
        soilType: "Alluvial Soil",
        currentCrop: "Pearl Millet",
        status: "Verified",
        surveyNumber: "76/1",
        district: "Mehsana",
        taluka: "Unjha",
        village: "Unjha",
      },
    ],

    procurementHistory: [],

    activity: [],
  },
];