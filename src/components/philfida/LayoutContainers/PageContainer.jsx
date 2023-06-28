// prop-types is a library for typechecking of props.
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function PageContainer({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        m: "80px 0 80px 285px",
        padding: "5vh 3.2vw",
        width: "calc(94% - 285px)",
        zIndex: 1500,
      }}
    >
      {children}
    </Box>
  );
}

// Typechecking props for the PageContainer
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
