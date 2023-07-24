/* eslint-disable import/no-duplicates */
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import themes from "../../../themes/co-theme";

const { ColorModeContext } = themes;

function Topbar() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box display="flex" justifyContent="end" alignItems="center" p={2}>
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
