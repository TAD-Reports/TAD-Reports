import React, { useEffect, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export default function AttachFileButton({ importFunction }) {
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }, [importFunction]);

  return (
    <>
      <Button
        type="button"
        className="upload-btn"
        onClick={() => fileInputRef.current.click()}
        sx={{
          backgroundColor: "#616161",
          color: "#fff",
          "&:hover": {
            textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
            color: "#46008B",
            backgroundColor: "#E0E0E0",
          },
        }}
      >
        <AttachFileIcon />
      </Button>
      <input
        id="fileUpload"
        type="file"
        accept="pdf, png, jpeg"
        multiple={false}
        onChange={(e) => importFunction(e)}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </>
  );
}

AttachFileButton.defaultProps = {
  importFunction: () => {},
};

AttachFileButton.propTypes = {
  importFunction: PropTypes.func,
};
