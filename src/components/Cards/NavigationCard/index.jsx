import React from "react";
import { Box, Button, Typography } from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import links from "../../SidebarLinks";

function NavigationCard({ cardColor, pathName, title, icon: Icon }) {
  const path = (linkName) => {
    const reportLinks = links.filter((item) => item.title === "Reports")[0]
      .links;
    const reportLink = reportLinks.find((link) => link.path === linkName);
    if (!reportLink) {
      throw new Error(`Link not found: ${linkName}`);
    }
    return reportLink.path;
  };

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const hexColor = `#${cardColor}`;
  const rgbaColor = hexToRgba(hexColor, 0.7);

  return (
    <NavLink to={`/${path(`${pathName}`)}`}>
      <Button
        sx={{
          backgroundColor: `#${cardColor}`,
          borderRadius: "15px",
          width: "15vw",
          height: "22vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "black",
          ":hover": {
            backgroundColor: `${rgbaColor}`,
            border: "solid 1px gray",
            width: "16.5vw",
            height: "23vh",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              border: "solid 1px #bbb",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Icon ? (
              <Icon style={{ fontSize: "80px" }} />
            ) : (
              <GrassIcon style={{ fontSize: "80px" }} />
            )}
          </Box>
        </Box>

        <Typography sx={{ fontWeight: "bold", fontFamily: "Poppins", mt: 2 }}>
          {title.toUpperCase()}
        </Typography>
      </Button>
    </NavLink>
  );
}

// Setting default values for the props of GenerateReportsCard
NavigationCard.defaultProps = {
  cardColor: "",
  pathName: "",
  title: "",
  icon: {},
};

NavigationCard.propTypes = {
  cardColor: PropTypes.string,
  pathName: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.elementType,
};

export default NavigationCard;
