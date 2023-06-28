import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";

const hrlinks = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        path: "hrdashboard",
        icon: <DashboardIcon />,
      },
    ],
  },

  {
    title: "Data/Library",
    links: [
      {
        name: "applicants",
        path: "applicants",
        icon: <GroupIcon />,
      },
      {
        name: "job positions",
        path: "jobpositions",
        icon: <WorkIcon />,
      },
    ],
  },
];

export default hrlinks;
