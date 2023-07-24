import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

const hrlinks = [
  {
    title: "Home",
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
        name: "Applicants",
        path: "applicants",
        icon: <ContactsOutlinedIcon />,
      },
      {
        name: "Job Positions",
        path: "positions",
        icon: <ReceiptOutlinedIcon />,
      },
      {
        name: "Manage Team",
        path: "team",
        icon: <PeopleOutlinedIcon />,
      },
    ],
  },
  {
    title: "Form",
    links: [
      {
        name: "Job Form",
        path: "jobform",
        icon: <WorkOutlineIcon />,
      },
      {
        name: "Profile Form",
        path: "userform",
        icon: <PersonOutlinedIcon />,
      },
      {
        name: "Calendar",
        path: "calendar",
        icon: <CalendarTodayOutlinedIcon />,
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
    ],
  },
];

export default hrlinks;
