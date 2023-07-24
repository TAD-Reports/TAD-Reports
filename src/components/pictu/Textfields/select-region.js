import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function SelectRegion(props) {
  const { error, helperText } = props;
  return (
    <Box>
      <FormControl size="small" fullWidth error={error}>
        <InputLabel id="demo-simple-select-label">Select Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Region"
          {...props}
          sx={{
            backgroundColor: "rgba(150, 150, 150, 0.2)",
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Regional Office 1">Regional Office 1</MenuItem>
          <MenuItem value="Regional Office 3">Regional Office 3</MenuItem>
          <MenuItem value="Regional Office 4">Regional Office 4</MenuItem>
          <MenuItem value="Regional Office 5">Regional Office 5</MenuItem>
          <MenuItem value="Regional Office 6">Regional Office 6</MenuItem>
          <MenuItem value="Regional Office 7">Regional Office 7</MenuItem>
          <MenuItem value="Regional Office 8">Regional Office 8</MenuItem>
          <MenuItem value="Regional Office 9">Regional Office 9</MenuItem>
          <MenuItem value="Regional Office 10">Regional Office 10</MenuItem>
          <MenuItem value="Regional Office 13">Regional Office 13</MenuItem>
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

SelectRegion.defaultProps = {
  error: false,
  helperText: "",
};

SelectRegion.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
