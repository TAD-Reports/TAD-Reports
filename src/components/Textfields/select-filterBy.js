import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
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
          <MenuItem value="fundSource">Fund Source</MenuItem>
          <MenuItem value="fundSauce">Fund Sauce</MenuItem>
          <MenuItem value="fundSows">Fund Sows</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
