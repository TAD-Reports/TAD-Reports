import React, { useEffect, useRef } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export default function ImportDataButton({ importFunction }) {
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
          height: 40,
          width: 150,
          backgroundColor: "#FFF",
          color: "black",
          "&:hover": {
            textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
            color: "#46008B",
            backgroundColor: "#76A66E",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        <FileUploadOutlinedIcon sx={{ mr: 0.3 }} />
        Import
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
    </>
  );
}

ImportDataButton.defaultProps = {
  importFunction: () => {},
};

ImportDataButton.propTypes = {
  importFunction: PropTypes.func,
};
