import { Typography, Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import themes from "../../themes/co-theme";

const { tokens } = themes;

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;

Header.defaultProps = {
  title: "",
  subtitle: "",
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
