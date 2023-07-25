/* eslint-disable no-unused-vars */
import ExcelJS from "exceljs";

const downloadData = (tableData) => {
  if (tableData.length === 0 || tableData.columnNames) {
    alert("No data available to export.");
    return;
  }

  const a1 = tableData.filter(
    (data) =>
      data.category === "SC" ||
      data.category === "Senior" ||
      data.category === "Senior Citizen"
  );
  const a2 = tableData.filter((data) => data.category === "Youth");
  const a3 = tableData.filter((data) => data.category === "Adult");

  const workbook = new ExcelJS.Workbook();
  const sheets = [
    { name: "Senior Citizen", data: a1 },
    { name: "Youth", data: a2 },
    { name: "Adult", data: a3 },
  ];

  const headers = [
    "Report Date",
    "Name of Fiber Crops",
    "Region",
    "Province",
    "District",
    "Municipality",
    "Barangay",
    "Name of Beneficiary",
    "Birthdate",
    "Age",
    "Gender",
    "Category",
    "Area Planted (has)",
    "Variety",
    "No. of seed-derived PM distributed",
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
    }: Report on Expansion Under Coconut Project (${sheet.name})`;
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
        data.name_of_fiber_crops,
        data.region,
        data.province,
        data.district,
        data.municipality,
        data.barangay,
        data.name_of_beneficiary,
        data.birthdate,
        data.age,
        data.gender,
        data.category,
        data.area_planted_has,
        data.variety,
        data.no_of_seed_derived_pm_distributed,
        data.remarks,
      ];
      worksheet.addRow(rowData);
    });

    // Calculate and display the total area
    const totalAreaFormula = `SUM(O6:O${filteredData.length + 5})`;
    worksheet.getCell(`O${filteredData.length + 7}`).value = {
      formula: totalAreaFormula,
    };
    worksheet.getCell(`O${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`O${filteredData.length + 7}`).alignment = {
      horizontal: "center",
    };
    // Set the total area cell format
    const totalAreaCell = worksheet.getCell(`O${filteredData.length + 7}`);
    totalAreaCell.numFmt = "0.00";

    // Add "Total" text in the cell next to "Area in Hectares (ha)"
    worksheet.getCell(`N${filteredData.length + 7}`).value = "Total";
    worksheet.getCell(`N${filteredData.length + 7}`).font = {
      bold: true,
    };
    worksheet.getCell(`N${filteredData.length + 7}`).alignment = {
      horizontal: "right",
    };

    const columnWidths = [
      { width: 15 }, // A
      { width: 20 }, // B
      { width: 20 }, // C
      { width: 20 }, // D
      { width: 20 }, // E
      { width: 20 }, // F
      { width: 20 }, // G
      { width: 20 }, // H
      { width: 20 }, // I
      { width: 20 }, // J
      { width: 20 }, // K
      { width: 20 }, // L
      { width: 20 }, // M
      { width: 20 }, // N
      { width: 40 }, // O
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

  const filename = `ExpansionUnderCoconutProj_Report_${tableData[0].report_date}.xlsx`;

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
