import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Topbar, Sidebar } from "../pages/philfida/global";

function Layout() {
  return (
    <div>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <Topbar />
      </Box>
      <Outlet />
    </div>
  );
}

export default Layout;
