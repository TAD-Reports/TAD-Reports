import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectFilterBy(props) {
  return (
    <Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...props}
        >
          <MenuItem value="r1">Region 1</MenuItem>
          <MenuItem value="r3">Region 3</MenuItem>
          <MenuItem value="r4">Region 4</MenuItem>
          <MenuItem value="r5">Region 5</MenuItem>
          <MenuItem value="r6">Region 6</MenuItem>
          <MenuItem value="r7">Region 7</MenuItem>
          <MenuItem value="r8">Region 8</MenuItem>
          <MenuItem value="r9">Region 9</MenuItem>
          <MenuItem value="r10">Region 10</MenuItem>
          <MenuItem value="r13">Region 13</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
