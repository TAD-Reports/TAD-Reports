import React, { useContext } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Logo from "../../../assets/philfida.png";
import themes from "../../../themes/co-theme";

const { ColorModeContext } = themes;

export default function NavBar() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        zoom: 0.95,
        display: "flex",
        height: "112px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: (themeMode) =>
          themeMode.palette.mode === "dark" ? "#1f2a40" : "#fff",
        zIndex: 100,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 8 }}>
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
      <Box sx={{ mr: 5 }}>
        <Button
          type="button"
          // eslint-disable-next-line react/destructuring-assignment
          onClick={colorMode.toggleColorMode}
          sx={{
            midWidth: 0,
            height: "58px",
            width: "40px",
            borderRadius: "50%",
            padding: 0,
            backgroundColor: "lightgray",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "lightgreen",
            },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </Button>
      </Box>
    </Box>
  );
}
