import React from "react";
import { Box, Button, Typography } from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import PropTypes from "prop-types";

function NavigationCard({ cardColor, title, icon: Icon }) {
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const hexColor = `#${cardColor}`;
  const rgbaColor = hexToRgba(hexColor, 0.8);

  return (
    <Button
      sx={{
        backgroundColor: `#${cardColor}`,
        borderRadius: "15px",
        width: "7vw",
        height: "16vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "black",
        ":hover": {
          transition: "all 0.3s ease",
          mx: "5px",
          backgroundColor: `${rgbaColor}`,
          border: "solid 2px gray",
          width: "8vw",
          height: "17vh",
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
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Icon ? (
            <Icon style={{ fontSize: "50px" }} />
          ) : (
            <GrassIcon style={{ fontSize: "50px" }} />
          )}
        </Box>
      </Box>

      <Typography sx={{ fontWeight: "bolder", fontSize: "12px", mt: 2 }}>
        {title.toUpperCase()}
      </Typography>
    </Button>
  );
}

// Setting default values for the props of GenerateReportsCard
NavigationCard.defaultProps = {
  cardColor: "",
  title: "",
  icon: {},
};

NavigationCard.propTypes = {
  cardColor: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.elementType,
};

export default NavigationCard;
