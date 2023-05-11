import React from "react";
import PageContainer from "../components/LayoutContainers/PageContainer";
import BarGraph from "../components/Charts/BarChart";
import { Box, Button, Grid, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import TextFieldDatePicker from "../components/Textfields/date-picker";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import SelectFilterBy from "../components/Textfields/select-filterBy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DownloadIcon from "@mui/icons-material/Download";
import moment from "moment";

const Training = () => {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [startFilterBy, setFilterByStart] = React.useState("");
  const [endFilterBy, setFilterByEnd] = React.useState("");

  const validateDateRange = (start, end) => {
    if (start && end) {
      if (new Date(start) >= new Date(end)) {
        alert("Start date can't be equal or later than the End date.");
        setStartDate(null);
        setEndDate(null);
      }
    }
  };

  const handleStartDate = (evt) => {
    const month = String(evt.$M + 1).padStart(2, "0");
    const day = String(evt.$D).padStart(2, "0");
    const date = `${evt.$y}/${month}/${day}`;
    setStartDate(date);
    validateDateRange(date, endDate);
  };

  const handleEndDate = (evt) => {
    const month = String(evt.$M + 1).padStart(2, "0");
    const day = String(evt.$D).padStart(2, "0");
    const date = `${evt.$y}/${month}/${day}`;
    setEndDate(date);
    validateDateRange(startDate, date);
  };

  const startDateMoment = moment(startDate);
  const StartDateDisplay = startDateMoment.format("MMMM D, YYYY");

  const endDateMoment = moment(endDate);
  const EndDateDisplay = endDateMoment.format("MMMM D, YYYY");

  const rows = [
    {
      reportDate: 1,
      fundedBy: "Snow",
      region: "Jon",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 2,
      fundedBy: "Lannister",
      region: "Cersei",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 3,
      fundedBy: "Lannister",
      region: "Jaime",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 4,
      fundedBy: "Stark",
      region: "Arya",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 5,
      fundedBy: "Targaryen",
      region: "Daenerys",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 6,
      fundedBy: "Melisandre",
      region: null,
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 7,
      fundedBy: "Clifford",
      region: "Ferrara",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 8,
      fundedBy: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
    {
      reportDate: 9,
      fundedBy: "Roxie",
      region: "Harvey",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      cooperative: "hasd",
      dateEstablished: "hasd",
      area: "area",
      variety: "area",
      moaPeriod: "area",
    },
  ];

  const columns = [
    { field: "reportDate", headerName: "Report Date", width: 200 },
    { field: "fundedBy", headerName: "Funded By", width: 200 },
    { field: "region", headerName: "Region", width: 200 },
    { field: "province", headerName: "Province", width: 200 },
    {
      field: "district",
      headerName: "District",
      type: "string",
      width: 200,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      type: "string",
      width: 200,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      type: "string",
      width: 200,
    },
    {
      field: "cooperative",
      headerName: "Name of Cooperative",
      type: "string",
      width: 200,
    },
    {
      field: "dateEstablished",
      headerName: "Date Established",
      type: "string",
      width: 200,
    },
    {
      field: "area",
      headerName: "Area(in hectars)",
      type: "string",
      width: 200,
    },
    {
      field: "variety",
      headerName: "Variety",
      type: "string",
      width: 200,
    },
    {
      field: "moaPeriod",
      headerName: "Period of MOA",
      type: "string",
      width: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <GridActionsCellItem icon={<VisibilityIcon />} label="View" />,
      ],
    },
  ];

  return (
    <PageContainer>
      <Box sx={{ display: "flex", alignItems: "center", py: 3 }}>
        <SchoolIcon style={{ fontSize: "80px" }} />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
          Conduct of Training Reports (Last 2 months)
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "30px", pt: 3 }}>
        Conduct of Training
      </Typography>
      <Grid container spacing={0} sx={{ pb: 4 }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "20vw",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  mr: 4,
                }}
              >
                Filter by:
              </Typography>
              <SelectFilterBy
                id="outlined-basic"
                name="filterBy"
                value={startFilterBy}
                onChange={(evt) => setFilterByStart(evt.target.value)}
                sx={{ width: "14vw" }}
              />
            </Box>

            <TextFieldDatePicker
              label="Start Date"
              value={startDate}
              onChange={handleStartDate}
              format="MM/DD/YYYY"
            />
          </Box>
          <Typography
            sx={{
              p: 2,
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {StartDateDisplay !== "Invalid date"
              ? StartDateDisplay
              : "Start Date"}
          </Typography>
          <BarGraph />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  mr: 4,
                }}
              >
                Filter by:
              </Typography>
              <SelectFilterBy
                id="outlined-basic"
                name="endFilterBy"
                value={endFilterBy}
                onChange={(evt) => setFilterByEnd(evt.target.value)}
                sx={{ width: "14vw" }}
              />
            </Box>
            <TextFieldDatePicker
              label="End Date"
              value={endDate}
              onChange={handleEndDate}
              format="MM/DD/YYYY"
            />
          </Box>
          <Typography
            sx={{
              p: 2,
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {EndDateDisplay !== "Invalid date" ? EndDateDisplay : "End Date"}
          </Typography>
          <BarGraph />
        </Grid>
      </Grid>

      <div style={{ height: 530, width: "100%", position: "relative" }}>
        <DataGrid
          getRowId={(row) => row.reportDate}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[1]}
        />
      </div>
      <Box sx={{ display: "flex", px: 2, mt: 10 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mr: 6, height: 50, width: 200, backgroundColor: "#76a66e" }}
        >
          Import Data
          <ArrowUpwardIcon sx={{ ml: 1 }} />
        </Button>
        <Button
          variant="contained"
          sx={{ height: 50, width: 200, backgroundColor: "#76a66e" }}
        >
          Download Data
          <DownloadIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </PageContainer>
  );
};

export default Training;
