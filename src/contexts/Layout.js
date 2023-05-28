import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../components";

function Layout() {
  return (
    <div>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Sidebar />
        <Navbar />
      </Box>
      <Outlet />
    </div>
  );
}

export default Layout;
