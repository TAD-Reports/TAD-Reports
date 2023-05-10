import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiShopware } from "react-icons/si";
// import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import Logo from "../assets/images/philfida.png";

import { useStateContext } from "../contexts/ContextProvider";
import { Box } from "@mui/material";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{ background: dotColor }} className="rounded-full h-2 w-2" />
      {icon}
    </button>
  </Tooltip>
);

const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        height: 112,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: activeMenu ? "85%" : "100%",
      }}
    >
      <div className="flex items-center">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="gray"
          icon={<AiOutlineMenu />}
        />
        <div className="flex items-center ml-5">
          <img src={Logo} alt="logo" className="w-20 h-20" />
          <div className="flex flex-col ml-3">
            <label className="font-bold text-2xl">
              PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY
            </label>
            <label className="font-bold">
              TECHNOLOGICAL ASSISTANCE DIVISION (TAD) - REPORTS COMPILATION
            </label>
          </div>
        </div>
      </div>
      <div>
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="gray"
          icon={<SiShopware />}
        />
      </div>
      <div class="absolute inset-x-0 bottom-0 h-1 shadow"></div>
    </Box>
  );
};

export default NavBar;
