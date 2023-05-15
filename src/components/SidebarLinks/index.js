import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CloudIcon from "@mui/icons-material/Cloud";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import SchoolIcon from "@mui/icons-material/School";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        path: "",
        icon: <DashboardIcon />,
      },
    ],
  },

  {
    title: "Reports",
    links: [
      {
        name: "nursery reports",
        path: "nursery",
        icon: <GrassIcon />,
      },
      {
        name: "distribution reports",
        path: "distribution",
        icon: <HandshakeIcon />,
      },
      {
        name: "pm survived reports",
        path: "pmsurvived",
        icon: <GppGoodIcon />,
      },
      {
        name: "expansion and rehabilitation reports",
        path: "expansionandrehab",
        icon: <ApartmentIcon />,
      },
      {
        name: "cotton reports",
        path: "cotton",
        icon: <CloudIcon />,
      },
      {
        name: "cocoon reports",
        path: "cocoon",
        icon: <SportsRugbyIcon />,
      },
      {
        name: "training reports",
        path: "training",
        icon: <SchoolIcon />,
      },
      {
        name: "iec material reports",
        path: "iec",
        icon: <FolderCopyIcon />,
      },
      {
        name: "expansion under coconut projects reports",
        path: "expansioncoconut",
        icon: <RiceBowlIcon />,
      },
      {
        name: "abaca disease management project reports",
        path: "diseasemanagement",
        icon: <CoronavirusIcon />,
      },
    ],
  },
];
