import { Box, Button, Typography } from "@mui/material";
import WholePageContainer from "components/LayoutContainers/WholePageContainer";
import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <WholePageContainer>
      <Box sx={{ mb: "10vh" }}>
        <Typography component="h1" variant="h1" sx={{ fontWeight: "bold" }}>
          Landing Page
        </Typography>
      </Box>
      <Box>
        <NavLink to="/app-form">
          <Button
            sx={{
              height: 50,
              width: 150,
              backgroundColor: "#76a66e",
              color: "#fff",
              mr: 8,
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "#60ec60",
              },
            }}
          >
            <Typography
              variant="label"
              component="label"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Apply for Job
            </Typography>
          </Button>
        </NavLink>
        <NavLink to="/sign-in">
          <Button
            sx={{
              height: 50,
              width: 150,
              backgroundColor: "#76a66e",
              color: "#fff",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "#60ec60",
              },
            }}
          >
            <Typography
              variant="label"
              component="label"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Go to PhilFIDA
            </Typography>
          </Button>
        </NavLink>
      </Box>
    </WholePageContainer>
  );
}

export default LandingPage;
