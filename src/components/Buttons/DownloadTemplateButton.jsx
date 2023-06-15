/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import PropTypes from "prop-types";
import downloadService from "services/download-service";
import "../../App.css";
import { Button } from "@mui/material";

export default function DownloadTemplateButton({ templateName }) {
  const handleDownload = async () => {
    try {
      const data = await downloadService.downloadTemplate(templateName);
      const blob = await data.blob();
      const filename = `${templateName}.xlsx`;

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element and set its attributes
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;

      // Append the link element to the document body and click it programmatically
      document.body.appendChild(link);
      link.click();

      // Clean up by revoking the temporary URL and removing the link element
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error occurred while downloading template:", error);
    }
  };

  return (
    <Button
      className="custom-btn btn-7"
      variant="button"
      component="button"
      onClick={handleDownload}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <DownloadIcon sx={{ mr: 0.5 }} />
      DOWNLOAD TEMPLATE
    </Button>
  );
}

DownloadTemplateButton.defaultProps = {
  templateName: "",
};

DownloadTemplateButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  templateName: PropTypes.string,
};
