import React from "react";
import Logo from "../assets/images/philfida.png";

import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        height: 112,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 5 }}>
        <img src={Logo} alt="logo" width="80px" height="80px" />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            TECHNOLOGICAL ASSISTANCE DIVISION (TAD) - REPORTS COMPILATION
          </Typography>
        </Box>
      </Box>
      <div class="absolute inset-x-0 bottom-0 h-1 shadow"></div>
    </Box>
  );
};

export default NavBar;
