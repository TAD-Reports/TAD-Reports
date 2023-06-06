/* eslint-disable no-unused-vars */
import ExcelJS from "exceljs";

const downloadData = (distributionData) => {
  if (!distributionData || distributionData.length === 0) {
    console.log("No data available to export.");
    return;
  }

  const a1 = distributionData.filter(
    (data) => data.nurseries === "Maintained" && data.funded_by === "PhilFIDA"
  );
  const a2 = distributionData.filter(
    (data) => data.nurseries === "Maintained" && data.funded_by === "LGU"
  );
  const a3 = distributionData.filter(
    (data) => data.nurseries === "Established" && data.funded_by === "PhilFIDA"
  );
  const a4 = distributionData.filter(
    (data) => data.nurseries === "Established" && data.funded_by === "LGU"
  );

  const workbook = new ExcelJS.Workbook();
  const sheets = [
    { name: "Maintained (PhilFIDA)", data: a1 },
    { name: "Maintained (LGU)", data: a2 },
    { name: "Established (PhilFIDA)", data: a3 },
    { name: "Established (LGU)", data: a4 },
  ];

  const headers = [
    "Report Date",
    "Region",
    "Province",
    "District",
    "Municipality",
    "Barangay",
    "Complete Name of Cooperator/ Organization",
    "Date Established",
    "Area in Hectares (ha)",
    "Variety Used",
    "Period of MOA",
    "Remarks",
  ];

  sheets.forEach((sheet) => {
    const worksheet = workbook.addWorksheet(sheet.name);

    // Merge cells C to J in rows 1 to 3
    worksheet.mergeCells("C1:J1");
    worksheet.mergeCells("C2:J2");
    worksheet.mergeCells("C3:J3");

    worksheet.getCell("F1").alignment = { horizontal: "center" };
    worksheet.getCell("F1").value = "Regional Office _____________";

    worksheet.getCell("F2").alignment = { horizontal: "center" };
    worksheet.getCell("F2").value = "Monthly Report of Technical Assistance";

    worksheet.getCell("F3").alignment = { horizontal: "center" };
    worksheet.getCell("F3").value = "For the month of ______________";

    worksheet.getCell("A4").value = `Form A.${
      sheets.indexOf(sheet) + 1
    }: Report on Abaca Nurseries ${sheet.name}`;
    worksheet.getCell("A4").alignment = { horizontal: "left" };

    worksheet.getRow(5).values = headers;
    worksheet.getRow(5).height = 65;

    const filteredData = sheet.data;

    // Add "Area in Hectares (ha)" column header
    // eslint-disable-next-line prefer-destructuring
    worksheet.getCell(`I5`).value = headers[8];

    filteredData.forEach((data) => {
      const rowData = [
        data.report_date,
        data.region,
        data.province,
        data.district,
        data.municipality,
        data.barangay,
        data.complete_name_of_cooperator_organization,
        data.date_established,
        data.area_in_hectares_ha,
        data.variety_used,
        data.period_of_moa,
        data.remarks,
      ];
      worksheet.addRow(rowData);
    });

    // Calculate and display the total area
    const totalAreaFormula = `SUM(I6:I${filteredData.length + 5})`;
    worksheet.getCell(`I${filteredData.length + 7}`).value = {
      formula: totalAreaFormula,
    };
    worksheet.getCell(`I${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`I${filteredData.length + 7}`).alignment = {
      horizontal: "center",
    };
    // Set the total area cell format
    const totalAreaCell = worksheet.getCell(`I${filteredData.length + 7}`);
    totalAreaCell.numFmt = "0.00";

    // Add "Total" text in the cell next to "Area in Hectares (ha)"
    worksheet.getCell(`H${filteredData.length + 7}`).value = "Total";
    worksheet.getCell(`H${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`H${filteredData.length + 7}`).alignment = {
      horizontal: "right",
    };

    const columnWidths = [
      { width: 15 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 20 },
      { width: 40 },
      { width: 15 },
      { width: 20 },
      { width: 15 },
      { width: 15 },
      { width: 30 },
    ];

    worksheet.columns = columnWidths;

    // Set border for the table
    const startRow = 5;
    const startCol = 1; // Column A
    const endRow = startRow + filteredData.length;
    const endCol = 12; // Column K

    // eslint-disable-next-line no-plusplus
    for (let row = 1; row <= endRow; row++) {
      // eslint-disable-next-line no-plusplus
      for (let col = startCol; col <= endCol; col++) {
        const cell = worksheet.getCell(row, col);
        if (row >= 5) {
          cell.alignment = {
            horizontal: "center",
            vertical: "middle",
          };
          cell.border = {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          };
        }
        if (row <= 4) {
          // Set white background color for cells A1 to K4
          cell.font = { bold: true };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFFFFFFF" }, // Set the desired color code here (white)
          };
          if (row === 4) {
            cell.font = { italic: true, bold: true };
          }
        } else if (row === startRow) {
          // Apply fill color to headers
          cell.font = { bold: true };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "ffb1a0c7" }, // Set the desired color code here
          };
        }
      }
    }
  });

  const filename = `Distribution_Report_${distributionData[0].report_date}.xlsx`;

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

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
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  downloadData,
};
