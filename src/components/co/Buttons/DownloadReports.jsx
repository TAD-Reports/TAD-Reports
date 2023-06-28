import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PropTypes from "prop-types";

export default function DownloadReports({ downloadData }) {
  return (
    <Button
      onClick={downloadData}
      sx={{
        padding: "8px 15px",
        backgroundColor: "#a795ce",
        mr: 0.2,
        color: "black",
        "&:hover": {
          textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
          color: "black",
          backgroundColor: "lightgreen",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      <DownloadIcon sx={{ mr: 0.5 }} />
      Download Reports
    </Button>
  );
}

DownloadReports.defaultProps = {
  downloadData: () => {},
};

DownloadReports.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  downloadData: PropTypes.func,
};
