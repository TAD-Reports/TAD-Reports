import { Typography, Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import themes from "../../theme";

const { tokens } = themes;

export default function Header({ title, subtitle }) {
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
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

Header.defaultProps = {
  title: "",
  subtitle: "",
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
