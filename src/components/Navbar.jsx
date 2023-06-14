import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/images/philfida.png";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        height: "112px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        zIndex: 100,
        marginLeft: "300px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 5 }}>
        <img src={Logo} alt="logo" width="80px" height="80px" />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            TECHNICAL ASSISTANCE DIVISION (TAD) - REPORTS COMPILATION
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
