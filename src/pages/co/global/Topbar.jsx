/* eslint-disable import/no-duplicates */
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import themes from "../../../themes/co-theme";

const { tokens, ColorModeContext } = themes;

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box width="30%" />
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
        paddingLeft="16px"
        paddingRight="16px"
        boxShadow="1px 1px 5px rgba(0, 0, 0, 0.5)"
        sx={{ flexGrow: 1 }}
      >
        <InputBase sx={{ flex: 1 }} placeholder="Explore" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{ mr: 1 }} />
        </IconButton>
      </Box>
      <Box width="30%" />

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
