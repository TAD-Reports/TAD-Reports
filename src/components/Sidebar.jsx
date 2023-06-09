import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Typography } from "@mui/material";
import Avatar from "../data/avatarMale.jpg";

import links from "./SidebarLinks";

import { useStateContext } from "../contexts/ContextProvider";

export default function SideBar() {
  const { auth, setAuth } = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    navigate("/");
  };

  const activeLink = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    textAlign: "left",
    width: "100%",
    gap: "5",
    paddingLeft: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.625rem",
    borderRadius: "0.5rem 0 0 0.5rem",
    backgroundColor: "white",
    color: "black",
    fontSize: "1rem",
    margin: "5px",
    "&:hover": {
      color: "black",
      backgroundColor: "#fff",
    },
  };

  const normalLink = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    textAlign: "left",
    width: "100%",
    gap: "5",
    paddingLeft: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.625rem",
    borderRadius: "0.5rem 0 0 0.5rem",
    fontSize: "1rem",
    color: "#f0f0f0",
    margin: "5px",
    "&:hover": {
      color: "black",
      backgroundColor: "lightgreen",
    },
  };

  return (
    <Box
      sx={{
        width: "300px",
        height: "100vh",
        position: "fixed",
        overflow: "hidden",
        "@media screen and (min-width: 768px)": {
          overflow: "auto",
          ":hover": {
            overflow: "auto",
          },
        },
        backgroundColor: "#5a9c4e",
        zIndex: 1000,
      }}
    >
      <Box sx={{ position: "absolute", width: "288px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 5,
          }}
        >
          <Link to={auth.role === "superadmin" ? "/register" : "/dashboard"}>
            <img
              src={Avatar}
              alt="logo"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
              }}
            />
          </Link>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#fff",
              mt: 1,
            }}
          >
            {auth.lastname}, {auth.lastname}
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "12px",
              color: "#fff",
            }}
          >
            {auth.role === "superadmin" ? "SUPER ADMIN" : auth.role}
          </Typography>
        </Box>
        <Box sx={{ my: 5 }}>
          {links.map((item) => (
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
                <NavLink to={`/${link.path}`} key={link.name}>
                  <Button
                    sx={
                      location.pathname === `/${link.path}`
                        ? activeLink
                        : normalLink
                    }
                  >
                    {link.icon}
                    <Typography sx={{ textTransform: "capitalize", ml: 1 }}>
                      {link.name}
                    </Typography>
                  </Button>
                </NavLink>
              ))}
            </Box>
          ))}
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: "#fff",
                m: 2,
                mt: 4,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Log out
            </Typography>
            <Button sx={normalLink} onClick={handleLogout}>
              <LogoutIcon />
              <Typography sx={{ textTransform: "capitalize", ml: 1 }}>
                Logout
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
