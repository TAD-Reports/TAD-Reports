/* eslint-disable no-unused-vars */
import ExcelJS from "exceljs";

const downloadData = (tableData) => {
  if (tableData.length === 0 || tableData.columnNames) {
    alert("No data available to export.");
    return;
  }

  const a1 = tableData.filter(
    (data) => data.category === "SC" || data.category === "Senior"
  );
  const a2 = tableData.filter((data) => data.category === "Youth");
  const a3 = tableData.filter((data) => data.category === "Adult");

  const workbook = new ExcelJS.Workbook();
  const sheets = [
    { name: "SC", data: a1 },
    { name: "Youth", data: a2 },
    { name: "Adult", data: a3 },
  ];

  const headers = [
    "Report Date",
    "Complete Name of Cooperator/ Organization",
    "Region",
    "Province",
    "District",
    "Municipality",
    "Barangay",
    "Age",
    "Birthdate",
    "Gender",
    "Category",
    "No. of Box Reared",
    "Date of Rearing",
    "Total Production in Kg",
    "Value In Php",
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
    }: Report on Cocoon (${sheet.name})`;
    worksheet.getCell("A4").alignment = { horizontal: "left" };

    worksheet.getRow(5).values = headers;
    worksheet.getRow(5).height = 65;

    const filteredData = sheet.data;

    // Add "Area in Hectares (ha)" column header
    // eslint-disable-next-line prefer-destructuring
    // worksheet.getCell(`J5`).value = headers[9];

    filteredData.forEach((data) => {
      const rowData = [
        data.report_date,
        data.complete_name_of_cooperator_organization,
        data.region,
        data.province,
        data.district,
        data.municipality,
        data.barangay,
        data.age,
        data.birthdate,
        data.gender,
        data.category,
        data.no_of_box_reared,
        data.date_of_rearing,
        data.total_production_in_kg,
        data.value_in_php,
        data.remarks,
      ];
      worksheet.addRow(rowData);
    });

    // Calculate and display the total area
    const totalAreaFormula = `SUM(N6:N${filteredData.length + 5})`;
    worksheet.getCell(`N${filteredData.length + 7}`).value = {
      formula: totalAreaFormula,
    };
    worksheet.getCell(`N${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`N${filteredData.length + 7}`).alignment = {
      horizontal: "center",
    };
    // Set the total area cell format
    const totalAreaCell = worksheet.getCell(`N${filteredData.length + 7}`);
    totalAreaCell.numFmt = "0.00";

    // Add "Total" text in the cell next to "Area in Hectares (ha)"
    worksheet.getCell(`M${filteredData.length + 7}`).value = "Total";
    worksheet.getCell(`M${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`M${filteredData.length + 7}`).alignment = {
      horizontal: "right",
    };

    const columnWidths = [
      { width: 15 }, // A
      { width: 40 }, // B
      { width: 20 }, // C
      { width: 20 }, // D
      { width: 20 }, // E
      { width: 20 }, // F
      { width: 15 }, // G
      { width: 15 }, // H
      { width: 15 }, // I
      { width: 15 }, // J
      { width: 15 }, // K
      { width: 15 }, // L
      { width: 15 }, // M
      { width: 20 }, // N
      { width: 15 }, // O
      { width: 30 }, // P
    ];

    worksheet.columns = columnWidths;

    // Set border for the table
    const startRow = 5;
    const startCol = 1; // Column A
    const endRow = startRow + filteredData.length;
    const endCol = 16; // Column P

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

  const filename = `Cocoon_Report_${tableData[0].report_date}.xlsx`;

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
