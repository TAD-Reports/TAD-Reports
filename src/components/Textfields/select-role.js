import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectRole(props) {
  return (
    <Box>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          {...props}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="superadmin">Super Admin</MenuItem>
          <MenuItem value="reviewer">Reviewer</MenuItem>
          <MenuItem value="uploader">Uploader</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
