import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Topbar, Sidebar } from "../pages/philfida/global";

function Layout() {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Sidebar />
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
