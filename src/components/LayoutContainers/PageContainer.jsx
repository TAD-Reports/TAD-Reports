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
        m: "80px 0 80px 300px",
        padding: "5vh 3vw",
        width: "calc(95% - 300px)",
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
