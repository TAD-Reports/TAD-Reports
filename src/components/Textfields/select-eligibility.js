import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectEligibility(props) {
  return (
    <Box>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">Eligibility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Eligibility"
          {...props}
        >
          <MenuItem value="prof">Professional</MenuItem>
          <MenuItem value="sub-prof">Sub-Professional</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
