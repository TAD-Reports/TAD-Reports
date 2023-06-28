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
        name: "dashboard",
        path: "dashboard",
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
        icon: <TbSeeding style={{ fontSize: 29 }} />,
      },
      {
        name: "distribution reports",
        path: "distribution",
        icon: <HandshakeOutlinedIcon />,
      },
      {
        name: "pm survived reports",
        path: "pmsurvived",
        icon: <GiPlantSeed style={{ fontSize: 24 }} />,
      },
      {
        name: "expansion and rehabilitation reports",
        path: "expansionandrehab",
        icon: <LiaBaconSolid />,
      },
      {
        name: "cotton reports",
        path: "cotton",
        icon: <TiWeatherWindyCloudy style={{ fontSize: 27 }} />,
      },
      {
        name: "cocoon reports",
        path: "cocoon",
        icon: <TbButterfly style={{ fontSize: 27 }} />,
      },
      {
        name: "training reports",
        path: "training",
        icon: <SchoolOutlinedIcon style={{ fontSize: 27 }} />,
      },
      {
        name: "iec material reports",
        path: "iec",
        icon: <HiOutlineDocumentDuplicate style={{ fontSize: 27 }} />,
      },
      {
        name: "expansion under coconut projects reports",
        path: "expansioncoconut",
        icon: <PiTreePalmBold style={{ fontSize: 29 }} />,
      },
      {
        name: "abaca disease management project reports",
        path: "diseasemanagement",
        icon: <TbVirusOff style={{ fontSize: 36 }} />,
      },
    ],
  },
];

export default links;
