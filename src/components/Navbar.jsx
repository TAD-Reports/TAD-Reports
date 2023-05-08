import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiShopware } from "react-icons/si";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Logo from "../assets/images/philfida.png";

import avatar from "../data/avatar.jpg";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="rounded-full h-10 w-10"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="flex h-28 justify-between items-center p-2 relative border-b-2 border-green-600 border-solid">
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
    </div>
  );
};

export default NavBar;
