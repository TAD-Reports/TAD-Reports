import React from "react";
import { Card, Grid } from "@mui/material";
import PropTypes from "prop-types";

function HrCard({ cardColor, label, total, icon: Icon }) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: cardColor,
        width: "100%",
        height: "100%",
        px: 4,
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Icon style={{ fontSize: "30px" }} />
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>{total}</span>
          <span style={{ fontSize: "12px", textTransform: "capitalize" }}>
            {label}
          </span>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Icon style={{ fontSize: "80px" }} />
        </Grid>
      </Grid>
    </Card>
  );
}

// Setting default values for the props of HrCard
HrCard.defaultProps = {
  cardColor: "",
  label: "",
  total: "",
  icon: null,
};

HrCard.propTypes = {
  cardColor: PropTypes.string,
  label: PropTypes.string,
  total: PropTypes.string,
  icon: PropTypes.elementType,
};

export default HrCard;
