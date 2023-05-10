import React from "react";
import { Link, NavLink } from "react-router-dom";

import Avatar from "../data/avatar4.jpg";

import { links } from "../data/dummy";

const SideBar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-l-lg bg-white text-black text-md m-2 mr-0";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-l-lg text-md text-gray-100 dark:text-gray-200 dark:hover:text-black hover:bg-green-300 m-2 mr-0";

  return (
    <div className="h-screen relative md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-green-600">
      <div className="absolute w-72">
        <>
          <div className="flex flex-col justify-center items-center w-full mt-5">
            <Link to="/">
              <img
                src={Avatar}
                alt="logo"
                className="w-16 h-16 rounded-full mb-2"
              />
            </Link>
            <label className="font-bold text-sm text-white">
              ROMERO, MATTHEW LEWIS E.
            </label>
            <label className="font-bold text-xs text-white">
              HUMAN RESOURCE
            </label>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title} className="mt-10 w-full">
                <p className="text-white m-3 mt-4 uppercase font-bold">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.path}`}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default SideBar;
