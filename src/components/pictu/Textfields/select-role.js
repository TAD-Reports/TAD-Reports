import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function SelectRole(props) {
  const { error, helperText } = props;
  return (
    <Box>
      <FormControl size="small" fullWidth error={error}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          {...props}
          sx={{
            backgroundColor: "rgba(150, 150, 150, 0.2)",
          }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="superadmin">Super Admin</MenuItem>
          <MenuItem value="reviewer">Reviewer</MenuItem>
          <MenuItem value="uploader">Uploader</MenuItem>
          <MenuItem value="planner">Planner</MenuItem>
          <MenuItem value="pictu">Pictu</MenuItem>
        </Select>
        {error && (
          <Typography
            sx={{ fontSize: "10px", color: "red", m: "5px 0 0 12px" }}
          >
            {helperText}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}

SelectRole.defaultProps = {
  error: false,
  helperText: "",
};

SelectRole.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
