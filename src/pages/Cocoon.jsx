import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { GiCobweb } from "react-icons/gi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DownloadIcon from "@mui/icons-material/Download";
import moment from "moment";
import SearchIcon from "@mui/icons-material/Search";
import CocoonBarGraph from "../components/Charts/CocoonChart";
import PageContainer from "../components/LayoutContainers/PageContainer";
import SelectFilterBy from "../components/Textfields/select-filterBy";
import TextFieldDatePicker from "../components/Textfields/date-picker";

export default function Cocoon() {
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
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 2,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 3,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 4,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 5,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 6,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 7,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 8,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
    {
      reportDate: 9,
      nameOfCooperative: "Frances",
      region: "Rossini",
      province: "hasd",
      district: "hasd",
      municipality: "hasd",
      barangay: "hasd",
      gender: "hasd",
      category: "hasd",
      noOfBox: "area",
      dateOfRearing: "area",
      totalKg: "area",
      valuePhp: "area",
    },
  ];

  const columns = [
    { field: "reportDate", headerName: "Report Date", width: 200 },
    {
      field: "nameOfCooperative",
      headerName: "Name of Cooperative / Individual",
      width: 200,
    },
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
      field: "gender",
      headerName: "Gender",
      type: "string",
      width: 200,
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
      width: 200,
    },
    {
      field: "noOfBox",
      headerName: "No. Of Box Reared",
      type: "string",
      width: 200,
    },
    {
      field: "dateOfRearing",
      headerName: "Date of Rearing",
      type: "string",
      width: 200,
    },
    {
      field: "totalKg",
      headerName: "Total Production in Kg",
      type: "string",
      width: 200,
    },
    {
      field: "valuePhp",
      headerName: "Value in Php",
      type: "string",
      width: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: () => [
        <GridActionsCellItem icon={<VisibilityIcon />} label="View" />,
      ],
    },
  ];

  return (
    <PageContainer>
      <Box sx={{ display: "flex", alignItems: "center", py: 3 }}>
        <GiCobweb style={{ fontSize: "80px" }} />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
          Cocoon Production Reports (Last 2 months)
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "30px", pt: 3 }}>
        Cocoon Production
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
          <CocoonBarGraph />
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
            {EndDateDisplay !== "Invalid Date" ? EndDateDisplay : "End Date"}
          </Typography>
          <CocoonBarGraph />
        </Grid>
      </Grid>

      <Divider sx={{ m: 4 }} />

      <Grid container>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", py: 2 }}>
          <Typography
            variant="label"
            component="label"
            sx={{ ml: 1, fontWeight: "bold", fontSize: "25px" }}
          >
            COCOON PRODUCTION DATA
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right", py: 2 }}>
          <TextField
            label="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                  // onClick={handleSearch}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ my: 1, mx: 1 }}
            // onChange={(evt) => setSearch(evt.target.value)}
            // value={search}
          />
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
          sx={{
            mr: 6,
            height: 50,
            width: 200,
            backgroundColor: "#76a66e",
          }}
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
}
