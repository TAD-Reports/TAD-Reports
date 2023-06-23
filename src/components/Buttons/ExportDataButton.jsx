import React from "react";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PropTypes from "prop-types";

export default function ExportDataButton({ downloadData }) {
  return (
    <Button
      onClick={downloadData}
      sx={{
        height: 40,
        width: 150,
        backgroundColor: "#D1D1D1",
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
      <FileDownloadOutlinedIcon sx={{ mr: 0.3 }} />
      Export
    </Button>
  );
}

ExportDataButton.defaultProps = {
  downloadData: () => {},
};

ExportDataButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  downloadData: PropTypes.func,
};
