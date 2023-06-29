import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Topbar, Sidebar } from "../pages/philfida/global";

function Layout() {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Sidebar />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
