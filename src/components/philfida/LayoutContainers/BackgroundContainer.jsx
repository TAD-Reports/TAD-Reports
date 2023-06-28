// prop-types is a library for typechecking of props.
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./background.css";

export default function BackgroundContainer({ children }) {
  return (
    <Box
      className="background"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        zIndex: 1500,
      }}
    >
      {children}
    </Box>
  );
}

// Typechecking props for the PageContainer
BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
