import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import * as XLSX from "xlsx";

const DownloadDataButton = ({ data }) => {
  const handleDownload = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const filename = "data.xlsx";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // For IE browser
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // For other browsers
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
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

export default DownloadDataButton;
