import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const pictulinks = [
  {
    title: "Home",
    links: [
      {
        name: "Dashboard",
        path: "pictudashboard",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },

  {
    title: "Users",
    links: [
      {
        name: "Users",
        path: "users",
        icon: <ContactsOutlinedIcon />,
      },
    ],
  },
  {
    title: "Form",
    links: [
      {
        name: "Create New User",
        path: "register",
        icon: <PersonOutlinedIcon />,
      },
    ],
  },
];

export default pictulinks;
