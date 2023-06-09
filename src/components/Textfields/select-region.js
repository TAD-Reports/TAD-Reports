import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function SelectRegion(props) {
  return (
    <Box>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">Select Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Region"
          {...props}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Regional Office 1">Region 1</MenuItem>
          <MenuItem value="Regional Office 3">Region 3</MenuItem>
          <MenuItem value="Regional Office 4">Region 4</MenuItem>
          <MenuItem value="Regional Office 5">Region 5</MenuItem>
          <MenuItem value="Regional Office 6">Region 6</MenuItem>
          <MenuItem value="Regional Office 7">Region 7</MenuItem>
          <MenuItem value="Regional Office 8">Region 8</MenuItem>
          <MenuItem value="Regional Office 9">Region 9</MenuItem>
          <MenuItem value="Regional Office 10">Region 10</MenuItem>
          <MenuItem value="Regional Office 13">Region 13</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
