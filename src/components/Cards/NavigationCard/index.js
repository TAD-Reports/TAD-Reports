import React from "react";
import { Box, Card, Typography } from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import { NavLink } from "react-router-dom";
import { links } from "../../../data/dummy";
import PropTypes from "prop-types";

const NavigationCard = ({ cardColor, pathName, title, icon: Icon }) => {
  const path = (linkName) => {
    const reportLinks = links.filter((item) => item.title === "Reports")[0]
      .links;
    const link = reportLinks.find((link) => link.path === linkName);
    if (!link) {
      throw new Error(`Link not found: ${linkName}`);
    }
    return link.path;
  };

  return (
    <Card
      sx={{
        backgroundColor: `#${cardColor}`,
        border: "solid 1px #bbb",
        borderRadius: "15px",
        width: "15vw",
        height: "22vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <NavLink to={`/${path(`${pathName}`)}`}>
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
      </NavLink>
    </Card>
  );
};

// Setting default values for the props of GenerateReportsCard
NavigationCard.defaultProps = {
  cardColor: "",
  pathName: "",
  title: "",
};

NavigationCard.propTypes = {
  cardColor: PropTypes.string,
  pathName: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.elementType,
};

export default NavigationCard;
