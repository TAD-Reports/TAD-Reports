// prop-types is a library for typechecking of props.
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function PageContainer({ children }) {
  return (
    <Box sx={{ mx: "20px", mt: "128px", mb: "128px", width: "75vw" }}>
      {children}
    </Box>
  );
}

// Typechecking props for the PageContainer
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
