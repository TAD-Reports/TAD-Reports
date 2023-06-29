/* eslint-disable import/no-duplicates */
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import userImg from "../../../assets/user2.jpg";
import themes from "../../../themes/co-theme";
import links from "../../../components/philfida/SidebarLinks/defaultlinks";
import "react-pro-sidebar/dist/css/styles.css";

const { tokens } = themes;

function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}

Item.defaultProps = {
  title: "",
  to: "",
  icon: null,
  selected: null,
  setSelected: () => {},
};

Item.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.object,
  setSelected: PropTypes.func,
};

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userImg}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ray Hernandez
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  HR Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {links.map((item) => (
              <Box key={item.title} sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    m: 2,
                    mt: 4,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
                {item.links.map((link) => (
                  <Item
                    title={link.name}
                    to={`/${link.path}`}
                    icon={link.icon}
                    selected={selected}
                    setSelected={setSelected}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
