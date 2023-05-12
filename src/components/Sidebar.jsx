import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Avatar from "../data/avatar.jpg";

import { links } from "../data/dummy";
import { Box, Button, Typography } from "@mui/material";

const SideBar = () => {
  const location = useLocation();

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
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        "@media screen and (min-width: 768px)": {
          overflow: "auto",
          ":hover": {
            overflow: "auto",
          },
        },
        paddingBottom: "10rem",
        backgroundColor: "#5a9c4e",
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
              mt: 5,
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
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default SideBar;
