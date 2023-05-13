import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import nurseryService from "../../services/nursery-service";

const ImportDataButton = ({ renderData }) => {
  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleFile(e) {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("imported_by", "1");
    formData.append("file", file);

    if (!file) {
      renderData(file);
    } else {
      setFileName(file.name);
      setLoading(true);

      nurseryService
        .importNurseryData(formData)
        .then(() => {
          const data = [file, loading, error];
          renderData(data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }
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
      <div>
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
      </div>
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
        onChange={(e) => handleFile(e)}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default ImportDataButton;
