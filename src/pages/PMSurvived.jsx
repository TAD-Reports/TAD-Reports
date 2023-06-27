/* eslint-disable no-plusplus */
import React, { useState } from "react";
import ExcelJS from "exceljs";
import {
  Box,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { GiPlantSeed } from "react-icons/gi";
import { TbDecimal } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import { useStateContext } from "contexts/ContextProvider";
import PageContainer from "../components/LayoutContainers/PageContainer";
import TextFieldDatePicker from "../components/Textfields/date-picker";
import SelectRegion from "../components/Textfields/select-region";
import Service from "../services/service";
import Table from "../components/Tables/TableFunction";
import ImportDataButton from "../components/Buttons/ImportDataButton";
import ExportDataButton from "../components/Buttons/ExportDataButton";
import DownloadTemplateButton from "../components/Buttons/DownloadTemplateButton";
import MixChart from "../components/Charts/MixChart";

export default function PMSurvived() {
  const { auth } = useStateContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const [lineGraphData, setLineGraphData] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [tableData, setTableDataData] = useState([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonError, setButtonError] = useState("");

  const [colorChanged, setColorChanged] = useState(false);
  const [decimal, setDecimal] = useState("");
  const moduleName = "pmsurvived";

  const handleChangeColor = () => {
    if (colorChanged) {
      setColorChanged(false);
    } else {
      setColorChanged(true);
    }
  };

  const handleDecimal = () => {
    if (decimal !== "") {
      setDecimal("");
    } else {
      setDecimal(" >-.2f");
    }
  };

  const handleSearch = () => {
    setLoading(true);
    setError("");
    Service.searchAPI(region, startDate, endDate, search, moduleName)
      .then((e) => {
        setLineGraphData(e.lineGraph);
        setBarGraphData(e.barGraph);
        setTableDataData(e.table);
        setTotal(e.total);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (
      startDate !== "" ||
      endDate !== "" ||
      (startDate === "" && endDate === "")
    ) {
      handleSearch();
    }
  }, [region, startDate, endDate]);

  const validateDateRange = (start, end) => {
    const dateStart = dayjs(start, "YYYY/MM/DD");
    const dateEnd = dayjs(end, "YYYY/MM/DD");

    if (dateStart.isAfter(dateEnd)) {
      alert("Start date cannot be after end date");
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleStartDate = (evt) => {
    const date = dayjs(evt).format("YYYY/MM/DD");
    setStartDate(date);
    validateDateRange(date, endDate);
  };

  const handleEndDate = (evt) => {
    const date = dayjs(evt).format("YYYY/MM/DD");
    setEndDate(date);
    validateDateRange(startDate, date);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const confirmed = window.confirm(
      `Are you sure you want to import ${file.name}?`
    );
    if (!confirmed) {
      return; // User cancelled the removal
    }
    setButtonError("");
    setLoading(true);
    Service.importDataAPI(auth.uuid, file, moduleName)
      .then((res) => {
        alert(res.data.message);
        handleSearch();
      })
      .catch((err) => {
        setButtonError(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDownload = () => {
    if (tableData.length === 0 || tableData.columnNames) {
      alert("No data available to export.");
      return;
    }
    const a1 = tableData.filter(
      (data) => data.nurseries === "Maintained" && data.funded_by === "PhilFIDA"
    );
    const a2 = tableData.filter(
      (data) => data.nurseries === "Maintained" && data.funded_by === "LGU"
    );
    const a3 = tableData.filter(
      (data) =>
        data.nurseries === "Established" && data.funded_by === "PhilFIDA"
    );
    const a4 = tableData.filter(
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

      for (let row = 1; row <= endRow; row++) {
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

    const filename = `Nursery_Report_${tableData[0].report_date}.xlsx`;

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

  return (
    <PageContainer>
      <Grid container spacing={0}>
        <Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
          <GiPlantSeed style={{ fontSize: "80px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
            PLANTING MATERIALS SURVIVED REPORTS
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <DownloadTemplateButton templateName="PMSurvived_Template" />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "20vw",
                marginRight: "40px",
              }}
            >
              <Typography
                sx={{
                  mr: 4,
                }}
              >
                Filter by:
              </Typography>
              <SelectRegion
                id="outlined-basic"
                name="filterBy"
                value={region}
                onChange={(evt) => setRegion(evt.target.value)}
                sx={{ width: "12vw", backgroundColor: "#FFFF" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "40px",
                width: "25vw",
              }}
            >
              <TextFieldDatePicker
                sx={{
                  backgroundColor: "#FFFF",
                }}
                label="Start Date"
                value={startDate}
                onChange={handleStartDate}
                format="MM/DD/YYYY"
              />
              <Typography sx={{ mx: 2 }}>to</Typography>
              <TextFieldDatePicker
                sx={{
                  backgroundColor: "#FFFF",
                }}
                label="End Date"
                value={endDate}
                onChange={handleEndDate}
                format="MM/DD/YYYY"
              />
            </Box>
            <Box
              sx={{ width: "450px", display: "flex", justifyContent: "center" }}
            />
            <Box sx={{ textAlign: "right", width: "280px", py: 2 }}>
              <TextField
                label="Search"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ my: 1, backgroundColor: "#FFFF" }}
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
              />
            </Box>
          </Box>

          <Grid container>
            <Grid
              item
              xs={9}
              sx={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", py: 2.3 }}
              >
                Survived Planting Materials (No. of Survived PM)
              </Typography>
              <Tooltip title="Line/Area Chart Color" placement="right">
                <Fab
                  color="inherit"
                  sx={{
                    minWidth: 30,
                    minHeight: 30,
                    width: 25,
                    height: 25,
                    mt: 2,
                    ml: 2,
                    zIndex: 1,
                  }}
                  onClick={handleChangeColor}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#321c47",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FcComboChart />
                  </span>
                </Fab>
              </Tooltip>
              <Tooltip title="Remove/Show Decimals" placement="right">
                <Fab
                  color="inherit"
                  sx={{
                    minWidth: 30,
                    minHeight: 30,
                    width: 25,
                    height: 25,
                    mt: 2,
                    ml: 2,
                    zIndex: 1,
                  }}
                  onClick={handleDecimal}
                >
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#4C0099",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <TbDecimal />
                  </span>
                </Fab>
              </Tooltip>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(45deg, #CCCCFF, #FCE6FA)",
                  color: "black",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 15px",
                  borderRadius: "20px 10px 10px 0px  ",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
                }}
              >
                <span>
                  <FaUsers
                    style={{
                      marginRight: "0.3em",
                      marginBottom: "0.1em",
                      fontSize: "25",
                      verticalAlign: "middle",
                    }}
                  />
                  Total number of cooperators: {total}
                </span>
              </div>
            </Grid>
          </Grid>
          <Box sx={{ mb: 1 }}>
            <MixChart
              areaColor={colorChanged}
              decimal={decimal}
              lineChartLegend="No. of Survived PM"
              barChartLegend="No. of Survived PM"
              lineGraphData={lineGraphData}
              barGraphData={barGraphData}
            />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Table
          data={tableData}
          loadingState={loading}
          dataReload={handleSearch}
          moduleName={moduleName}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "end",
          ml: 37.4,
          my: -66.64,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="text button group">
          <ImportDataButton importFunction={handleFile} />
          <ExportDataButton downloadData={handleDownload} />
        </ButtonGroup>
      </Box>
      {error}
      {buttonError}
    </PageContainer>
  );
}
