import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchTextField({
  label,
  value,
  onChange,
  txprops,
  searchFunction,
  ...rest
}) {
  return (
    <TextField
      label={label}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={searchFunction}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={(newValue) => {
        onChange?.(newValue);
      }}
      value={value}
      {...rest}
      sx={{
        backgroundColor: (themeMode) =>
          themeMode.palette.mode === "dark" ? "#2e3442" : "#fff",
      }}
    />
  );
}

SearchTextField.defaultProps = {
  label: null,
  value: null,
  onChange: () => {},
  searchFunction: () => {},
  txprops: {},
};
// Typechecking props of the MDAlert
SearchTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  searchFunction: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  txprops: PropTypes.object,
};
