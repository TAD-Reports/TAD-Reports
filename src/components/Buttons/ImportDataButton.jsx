import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

export default function ImportDataButton({
  fileName,
  importFunction,
  clearFileName,
}) {
  const fileInputRef = useRef(null);

  const handleClearInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      clearFileName();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mr: 6,
      }}
    >
      <Box sx={{ mr: 6 }}>
        {!fileName && (
          <Typography component="label" variant="label" sx={{ color: "gray" }}>
            File: None selected
          </Typography>
        )}
        {fileName && (
          <Typography component="label" variant="label" sx={{ color: "gray" }}>
            File: {fileName}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button
          type="button"
          className="upload-btn"
          htmlFor="fileUpload"
          sx={{
            height: 50,
            width: 200,
            backgroundColor: "#76a66e",
            color: "#fff",
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
        >
          <Typography
            variant="label"
            component="label"
            htmlFor="fileUpload"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Import Data
            <UploadIcon sx={{ ml: 1 }} />
          </Typography>
        </Button>
        <input
          id="fileUpload"
          type="file"
          accept="xlsx, xls"
          multiple={false}
          onChange={(e) => importFunction(e)}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Box
          sx={{
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloseIcon
            onClick={handleClearInput}
            sx={{
              color: "gray",
              fontSize: "20px",
              cursor: "pointer",
              "&:hover": {
                color: "black",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

ImportDataButton.defaultProps = {
  fileName: "",
  importFunction: () => {},
  clearFileName: () => {},
};

ImportDataButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fileName: PropTypes.string,
  importFunction: PropTypes.func,
  clearFileName: PropTypes.func,
};
