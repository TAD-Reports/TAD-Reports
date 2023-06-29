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
        mt: "30px",
        ml: "80px",
        width: "78vw",
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
