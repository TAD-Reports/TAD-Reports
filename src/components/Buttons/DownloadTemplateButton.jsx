import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadTemplateButton = ({ data, moduleName }) => {
  const handleDownload = () => {
    if (!data || data.length === 0) {
      console.log("No data available to export.");
      return;
    }

    const filename = `${moduleName}${data[0].report_date}.xlsx`;

    // Create a new Blob with the data
    const blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

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
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
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
};

export default DownloadTemplateButton;
