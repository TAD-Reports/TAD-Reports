import DashboardIcon from "@mui/icons-material/Dashboard";
import { TbSeeding, TbVirusOff, TbButterfly } from "react-icons/tb";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { LiaBaconSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { PiTreePalmBold } from "react-icons/pi";
import { GiPlantSeed } from "react-icons/gi";

const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        path: "dashboard",
        icon: <DashboardIcon />,
      },
    ],
  },

  {
    title: "Reports",
    links: [
      {
        name: "Nursery Reports",
        path: "nursery",
        icon: <TbSeeding style={{ fontSize: 29 }} />,
      },
      {
        name: "Distribution Reports",
        path: "distribution",
        icon: <HandshakeOutlinedIcon />,
      },
      {
        name: "PM Survived Reports",
        path: "pmsurvived",
        icon: <GiPlantSeed style={{ fontSize: 24 }} />,
      },
      {
        name: "Expansion and Rehabilitation Reports",
        path: "expansionandrehab",
        icon: <LiaBaconSolid />,
      },
      {
        name: "Cotton Reports",
        path: "cotton",
        icon: <TiWeatherWindyCloudy style={{ fontSize: 27 }} />,
      },
      {
        name: "Cocoon Reports",
        path: "cocoon",
        icon: <TbButterfly style={{ fontSize: 27 }} />,
      },
      {
        name: "Training Reports",
        path: "training",
        icon: <SchoolOutlinedIcon style={{ fontSize: 27 }} />,
      },
      {
        name: "IEC Material Reports",
        path: "iec",
        icon: <HiOutlineDocumentDuplicate style={{ fontSize: 27 }} />,
      },
      {
        name: "Expansion Under Coconut Projects Reports",
        path: "expansioncoconut",
        icon: <PiTreePalmBold style={{ fontSize: 29 }} />,
      },
      {
        name: "Abaca Disease Management Project Reports",
        path: "diseasemanagement",
        icon: <TbVirusOff style={{ fontSize: 36 }} />,
      },
    ],
  },
];

export default links;
