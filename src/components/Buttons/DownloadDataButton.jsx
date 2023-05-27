import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PropTypes from "prop-types";

export default function DownloadDataButton({ downloadData }) {
  return (
    <Button
      variant="contained"
      onClick={downloadData}
      sx={{
        height: 50,
        width: 200,
        backgroundColor: "#76a66e",
        "&:hover": {
          textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
          color: "black",
          backgroundColor: "#60ec60",
        },
      }}
    >
      Download Data
      <DownloadIcon sx={{ ml: 1 }} />
    </Button>
  );
}

DownloadDataButton.defaultProps = {
  downloadData: [],
};

DownloadDataButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  downloadData: PropTypes.func,
};
