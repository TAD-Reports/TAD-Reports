import theme from "../themes/co-theme";

const { tokens } = theme;

const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

const mockDataInvoices = [
  {
    id: 1,
    title: "Frontend Developer",
    salary: "₱600,000 - ₱800,000",
    description:
      "We are seeking a talented Frontend Developer to join our team...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in frontend development",
      "Proficiency in HTML, CSS, and JavaScript",
    ],
    benefits: [
      "Health insurance",
      "Remote work options",
      "Professional development opportunities",
    ],
  },
  {
    id: 2,
    title: "UX Designer",
    salary: "₱700,000 - ₱900,000",
    description:
      "We are looking for a creative UX Designer to enhance user experiences...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Design or related field",
      "3+ years of experience in UX design",
      "Strong portfolio demonstrating user-centered design solutions",
    ],
    benefits: [
      "Flexible work hours",
      "Paid parental leave",
      "Employee stock purchase plan",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    salary: "₱500,000 - ₱700,000",
    description:
      "We are hiring a Data Analyst to interpret data and turn it into information...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
      "Proficiency in SQL and data visualization tools",
      "Strong analytical and problem-solving skills",
    ],
    benefits: [
      "401(k) with company match",
      "Paid vacation and holidays",
      "Wellness program",
    ],
  },
  {
    id: 4,
    title: "Sales Representative",
    salary: "₱400,000 - ₱600,000",
    description:
      "We are seeking an enthusiastic Sales Representative to join our team...",
    location: "DA Office",
    requirements: [
      "High school diploma or equivalent",
      "Excellent communication and negotiation skills",
      "Proven sales experience",
    ],
    benefits: [
      "Commission-based incentives",
      "Training and development programs",
      "Team-building activities",
    ],
  },
  {
    id: 5,
    title: "Full Stack Developer",
    salary: "₱800,000 - ₱1,000,000",
    description:
      "We are hiring a Full Stack Developer to work on exciting projects...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in full stack development",
      "Proficiency in HTML, CSS, JavaScript, and a backend language",
    ],
    benefits: [
      "Flexible work schedule",
      "Health and wellness benefits",
      "Company-sponsored events",
    ],
  },
  {
    id: 6,
    title: "Marketing Manager",
    salary: "₱900,000 - ₱1,200,000",
    description:
      "We are seeking a dynamic Marketing Manager to lead our marketing efforts...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "5+ years of experience in marketing roles",
      "Proven track record of successful marketing campaigns",
    ],
    benefits: [
      "Performance bonuses",
      "Company car allowance",
      "Paid professional development courses",
    ],
  },
  {
    id: 7,
    title: "Graphic Designer",
    salary: "₱500,000 - ₱700,000",
    description:
      "We are looking for a creative Graphic Designer to produce visually stunning designs...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Graphic Design or related field",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio showcasing design skills",
    ],
    benefits: [
      "Flexible work environment",
      "Annual performance bonus",
      "Employee referral program",
    ],
  },
  {
    id: 8,
    title: "Project Manager",
    salary: "₱800,000 - ₱1,000,000",
    description:
      "We are seeking an experienced Project Manager to oversee project execution...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Project Management or related field",
      "Proven track record of managing complex projects",
      "Excellent leadership and communication skills",
    ],
    benefits: [
      "Generous vacation policy",
      "Employee stock options",
      "Professional development stipend",
    ],
  },
  {
    id: 9,
    title: "Customer Service Representative",
    salary: "₱350,000 - ₱500,000",
    description:
      "We are hiring a Customer Service Representative to provide exceptional support...",
    location: "DA Office",
    requirements: [
      "High school diploma or equivalent",
      "Excellent verbal and written communication skills",
      "Ability to handle customer inquiries and resolve issues",
    ],
    benefits: [
      "Healthcare coverage",
      "Employee assistance program",
      "Opportunity for career growth",
    ],
  },
  {
    id: 10,
    title: "Quality Assurance Analyst",
    salary: "₱600,000 - ₱800,000",
    description:
      "We are seeking a detail-oriented Quality Assurance Analyst to ensure product quality...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Experience in software testing and quality assurance",
      "Knowledge of test automation frameworks",
    ],
    benefits: [
      "401(k) retirement plan",
      "Flexible spending accounts",
      "Team-building activities",
    ],
  },
  {
    id: 11,
    title: "Human Resources Manager",
    salary: "₱900,000 - ₱1,200,000",
    description:
      "We are looking for an HR Manager to oversee all aspects of human resources...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "5+ years of experience in HR roles",
      "Strong knowledge of labor laws and regulations",
    ],
    benefits: [
      "Competitive salary package",
      "Paid parental leave",
      "Employee wellness program",
    ],
  },
  {
    id: 12,
    title: "Content Writer",
    salary: "₱400,000 - ₱600,000",
    description:
      "We are seeking a talented Content Writer to create engaging and informative content...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in English, Journalism, or related field",
      "Excellent writing and editing skills",
      "Experience in content creation for digital platforms",
    ],
    benefits: [
      "Flexible work hours",
      "Professional growth opportunities",
      "Company-provided laptop",
    ],
  },
];

const mockTransactions = [
  {
    txId: "Node.js Developer",
    user: "Ray Hernandez",
    date: "2023-06-28",
    cost: "View Data",
  },
  {
    txId: "Sr. Software Engineer",
    user: "Matthew Romero",
    date: "22023-06-24",
    cost: "View Data",
  },
  {
    txId: "Full Stack Developer",
    user: "Mark Salem",
    date: "2023-06-19",
    cost: "View Data",
  },
  {
    txId: "Friendly Neighborhood",
    user: "Spider Man",
    date: "22023-06-12",
    cost: "View Data",
  },
  {
    txId: "I Love You 3000",
    user: "Iron Man",
    date: "2022-11-02",
    cost: "View Data",
  },
  {
    txId: "Cashier",
    user: "Ant Man",
    date: "2021-09-01",
    cost: "View Data",
  },
  {
    txId: "CEO",
    user: "Bat man",
    date: "2019-04-15",
    cost: "View Data",
  },
  {
    txId: "Swimming Instructor",
    user: "Aqua Man",
    date: "2022-04-01",
    cost: "View Data",
  },
];

const mockBarData = [
  {
    country: "Web Dev",
    Total: 90,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "Software Engr",
    Total: 38,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "IT Spec",
    Total: 23,
    TotalColor: "hsl(96, 70%, 50%)",
  },
  {
    country: "Data Analyst",
    Total: 52,
    TotalColor: "hsl(326, 70%, 50%)",
  },
  {
    country: "Project Manager",
    Total: 80,
    TotalColor: "hsl(325, 70%, 50%)",
  },
];

const mockPieData = [
  {
    id: "Male",
    label: "Male",
    value: 20,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Female",
    label: "Female",
    value: 16,
    color: "hsl(162, 70%, 50%)",
  },
];

const mockLineData = [
  {
    id: "Web Developer",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "February",
        y: 88,
      },
      {
        x: "March",
        y: 232,
      },
      {
        x: "April",
        y: 281,
      },
      {
        x: "May",
        y: 1,
      },
      {
        x: "June",
        y: 35,
      },
      {
        x: "July",
        y: 236,
      },
    ],
  },
  {
    id: "Software Engineer",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "February",
        y: 189,
      },
      {
        x: "March",
        y: 97,
      },
      {
        x: "April",
        y: 87,
      },
      {
        x: "May",
        y: 299,
      },
      {
        x: "June",
        y: 251,
      },
      {
        x: "July",
        y: 33,
      },
    ],
  },
  {
    id: "IT Specialist",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "February",
        y: 152,
      },
      {
        x: "March",
        y: 8,
      },
      {
        x: "April",
        y: 197,
      },
      {
        x: "May",
        y: 107,
      },
      {
        x: "June",
        y: 170,
      },
      {
        x: "July",
        y: 189,
      },
    ],
  },
];

const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];

export default {
  mockDataTeam,
  mockDataContacts,
  mockDataInvoices,
  mockTransactions,
  mockBarData,
  mockPieData,
  mockLineData,
  mockGeographyData,
};
