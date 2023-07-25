/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import userImg from "../../../assets/philfida copy.png";
import themes from "../../../themes/co-theme";
import hrlinks from "../../../components/SidebarLinks/hrlinks";
import "react-pro-sidebar/dist/css/styles.css";

const { tokens } = themes;

function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#fff",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `linear-gradient(100deg, ${colors.theme[100]}, ${colors.theme[200]})`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#00FFF7 !important",
        },
        "& .pro-menu-item.active": {
          color: "#fff !important",
          backgroundColor: colors.theme[300],
          marginRight: isCollapsed ? "0.5px" : "29px",
          borderRadius: "10px",
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
              margin: "auto",
              color: "#fff",
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
                  <MenuOutlinedIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25">
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
                  color="#fff"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Matthew
                </Typography>
                <Typography variant="h5" color="#00FFF7">
                  HR Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {hrlinks.map((item) => (
              <Box key={item.title} sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    color: "#fff",
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

export default Sidebar;

Item.defaultProps = {
  title: "",
  to: "",
  icon: null,
  selected: "",
  setSelected: "",
};

Item.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.elementType,
  selected: PropTypes.string,
  setSelected: PropTypes.string,
};
