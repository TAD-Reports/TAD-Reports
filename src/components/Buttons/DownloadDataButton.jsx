import React from "react";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PropTypes from "prop-types";

export default function DownloadDataButton({ downloadData }) {
  return (
    <Button
      onClick={downloadData}
      sx={{
        height: 40,
        width: 150,
        backgroundColor: "#FFFF",
        mr: 0.2,
        color: "black",
        "&:hover": {
          textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
          color: "#46008B",
          backgroundColor: "#E0E0E0",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      <FileDownloadOutlinedIcon sx={{ mr: 0.3 }} />
      Export
    </Button>
  );
}

DownloadDataButton.defaultProps = {
  downloadData: () => {},
};

DownloadDataButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  downloadData: PropTypes.func,
};
