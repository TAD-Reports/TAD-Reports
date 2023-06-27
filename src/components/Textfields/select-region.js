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
      </FormControl>
    </Box>
  );
}
