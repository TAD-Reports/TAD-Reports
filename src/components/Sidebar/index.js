import React from "react";
import "./sidebar.css";
import { Box, Typography } from "@mui/material";
import { SidebarData } from "../SidebarData";

function Sidebar() {
  return (
    <Box className="Sidebar">
      <ul className="SideBarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {""}
              <div id="Icon">
                <Typography sx={{ color: "white" }}>{val.icon}</Typography>
              </div>
              {""}
              <div id="Title">
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  {val.title}
                </Typography>
              </div>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default Sidebar;
