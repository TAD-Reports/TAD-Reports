// prop-types is a library for typechecking of props.
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function PageContainer({ children }) {
  return <Box sx={{ mx: "20px", mb: "130px", width: "78vw" }}>{children}</Box>;
}

// Typechecking props for the PageContainer
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
