import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const hrlinks = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        path: "hrdashboard",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },

  {
    title: "Data",
    links: [
      {
        name: "Manage Team",
        path: "team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        name: "Applicants",
        path: "contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        name: "Job Positions",
        path: "invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        name: "Profile Form",
        path: "form",
        icon: <PersonOutlinedIcon />,
      },
      {
        name: "Calendar",
        path: "calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        name: "FAQ Page",
        path: "faq",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "Bar Chart",
        path: "bar",
        icon: <BarChartOutlinedIcon />,
      },
      {
        name: "Pie Chart",
        path: "pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        name: "Line Chart",
        path: "line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        name: "Geography Chart",
        path: "geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

export default hrlinks;
