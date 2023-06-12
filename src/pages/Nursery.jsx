import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import dayjs from "dayjs";
import { useStateContext } from "contexts/ContextProvider";
import DownloadFunction from "components/Buttons/DownloadFunctions/Nursery";
import PageContainer from "../components/LayoutContainers/PageContainer";
import TextFieldDatePicker from "../components/Textfields/date-picker";
import SelectRegion from "../components/Textfields/select-region";
import Service from "../services/service";
import Table from "../components/Tables/TableFunction";
import ImportDataButton from "../components/Buttons/ImportDataButton";
import DownloadDataButton from "../components/Buttons/DownloadDataButton";
import DownloadTemplateButton from "../components/Buttons/DownloadTemplateButton";
import MixBarGraph from "../components/Charts/MixBarChart";

export default function Nursery() {
  const { auth } = useStateContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableDataData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonError, setButtonError] = useState("");

  const [fileName, setFileName] = useState("");
  const moduleName = "nursery";

  const handleSearch = () => {
    setLoading(true);
    setError("");
    Service.searchAPI(region, startDate, endDate, search, moduleName)
      .then((e) => {
        setGraphData(e.graph);
        setTableDataData(e.table);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleSearch();
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
    setFileName(file.name);
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

  const clearFileName = () => {
    setFileName("");
  };

  const handleDownload = () => {
    DownloadFunction.downloadData(tableData);
  };

  return (
    <PageContainer>
      <Grid container spacing={0}>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", py: 2 }}>
          <GrassIcon style={{ fontSize: "80px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
            NURSERY REPORTS
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <DownloadTemplateButton templateName="Nursery_Template" />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
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
                  mr: 6,
                }}
              >
                Filter by:
              </Typography>
              <SelectRegion
                id="outlined-basic"
                name="filterBy"
                value={region}
                onChange={(evt) => setRegion(evt.target.value)}
                sx={{ width: "12vw" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "18vw",
                width: "25vw",
              }}
            >
              <TextFieldDatePicker
                label="Start Date"
                value={dayjs(startDate)}
                onChange={handleStartDate}
                format="MM/DD/YYYY"
              />
              <Typography sx={{ mx: 2 }}>to</Typography>
              <TextFieldDatePicker
                label="End Date"
                value={dayjs(endDate)}
                onChange={handleEndDate}
                format="MM/DD/YYYY"
              />
            </Box>
            <Box item xs={6} sx={{ textAlign: "right", py: 2 }}>
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
                sx={{ my: 1 }}
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", py: 2 }}>
              Nurseries Maintained (Area in Hectares)
            </Typography>

            <Tooltip title="Refresh" placement="top">
              <Button
                onClick={handleSearch}
                sx={{
                  borderRadius: "50%",
                  color: "gray",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "black",
                  },
                }}
              >
                <RefreshIcon sx={{ fontSize: "25px" }} />
              </Button>
            </Tooltip>
          </Box>
          <Box sx={{ mb: 1 }}>
            <MixBarGraph graphData={graphData} />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
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
          justifyContent: "space-between",
          alignItems: "end",
          px: 2,
          my: 8,
        }}
      >
        <ImportDataButton
          fileName={fileName}
          importFunction={handleFile}
          clearFileName={clearFileName}
        />
        <DownloadDataButton downloadData={handleDownload} />
      </Box>
      {/* {auth.role === "admin" || auth.role === "superadmin" ? (
        
      ) : auth.role === "planner" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            px: 2,
            my: 4,
          }}
        >
          <DownloadDataButton downloadData={handleDownload} />
        </Box>
      ) : auth.role === "uploader" ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            px: 2,
            my: 4,
          }}
        >
          <ImportDataButton
            fileName={fileName}
            importFunction={handleFile}
            clearFileName={clearFileName}
          />
        </Box>
      ) : null} */}

      {error}
      {buttonError}
    </PageContainer>
  );
}
