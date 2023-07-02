import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Topbar, Sidebar } from "../pages/philfida/global";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <Box
          sx={{ height: "100vh", width: "100vw", flex: "1", overflowY: "auto" }}
        >
          <Topbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default Layout;
