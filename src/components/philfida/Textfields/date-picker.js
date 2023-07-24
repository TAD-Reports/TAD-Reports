import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

export default function TextFieldDatePicker({
  label,
  value,
  onChange,
  txprops,
  ...rest
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          onChange?.(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} {...txprops} error={false} fullWidth />
        )}
        slotProps={{
          textField: {
            size: "small",
            error: false,
          },
        }}
        sx={{
          backgroundColor: (themeMode) =>
            themeMode.palette.mode === "dark" ? "#2e3442" : "#fff",
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
}

TextFieldDatePicker.defaultProps = {
  label: null,
  value: null,
  onChange: () => {},
  txprops: {},
};
// Typechecking props of the MDAlert
TextFieldDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  txprops: PropTypes.object,
};
