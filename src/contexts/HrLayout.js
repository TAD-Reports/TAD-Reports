import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Topbar from "../pages/JobApplication/scenes/global/Topbar";
import Sidebar from "../pages/JobApplication/scenes/global/Sidebar";

function HrLayout() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Sidebar isSidebar={isSidebar} />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
}

export default HrLayout;
