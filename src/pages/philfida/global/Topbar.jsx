import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../../assets/philfida.png";

export default function NavBar() {
  return (
    <Box
      sx={{
        zoom: 0.95,
        display: "flex",
        height: "112px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        zIndex: 100,
        marginLeft: "300px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 10 }}>
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
