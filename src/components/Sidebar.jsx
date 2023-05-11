import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Avatar from "../data/avatar.jpg";

import { links } from "../data/dummy";
import { Box, Typography } from "@mui/material";

const SideBar = () => {
  const location = useLocation();

  const activeLink = {
    display: "flex",
    alignItems: "center",
    gap: "5",
    paddingLeft: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.625rem",
    borderRadius: "0.5rem 0 0 0.5rem",
    backgroundColor: "white",
    color: "black",
    fontSize: "1rem",
    margin: "0.5rem",
    marginRight: "0",
  };
  const normalLink = {
    display: "flex",
    alignItems: "center",
    gap: "5",
    paddingLeft: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.625rem",
    borderRadius: "0.5rem 0 0 0.5rem",
    fontSize: "1rem",
    color: "#f0f0f0",
    "&:hover": {
      color: "black",
      backgroundColor: "lightyellow",
    },
    "&.dark": {
      color: "gray.200",
      "&:hover": {
        color: "black",
        backgroundColor: "lightyellow",
      },
    },
    "&.active": {
      color: "black",
      backgroundColor: "lightyellow",
    },
    margin: "0.5rem",
    marginRight: "0",
  };

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        "@media screen and (min-width: 768px)": {
          overflow: "auto",
          ":hover": {
            overflow: "auto",
          },
        },
        paddingBottom: "10rem", // Replace with your desired value
        backgroundColor: "#5a9c4e", // Replace with your desired color
      }}
    >
      <Box sx={{ position: "absolute", width: "288px" }}>
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: 3,
            }}
          >
            <Link to="/">
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
              ROMERO, MATTHEW LEWIS E.
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "12px", color: "#fff" }}
            >
              HUMAN RESOURCE
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }}>
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
                  <NavLink
                    to={`/${link.path}`}
                    key={link.name}
                    style={
                      location.pathname === `/${link.path}`
                        ? { ...normalLink, ...activeLink }
                        : normalLink
                    }
                  >
                    {link.icon}
                    <Typography sx={{ textTransform: "capitalize", ml: 1 }}>
                      {link.name}
                    </Typography>
                  </NavLink>
                ))}
              </Box>
            ))}
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default SideBar;
