import React, { useState } from "react";
import PageContainer from "../components/LayoutContainers/PageContainer";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import SearchIcon from "@mui/icons-material/Search";
import TextFieldDatePicker from "../components/Textfields/date-picker";
import SelectFilterBy from "../components/Textfields/select-filterBy";
import nurseryService from "../services/nursery-service";
import NurseryTable from "./Tables/NurseryTable";
import ImportDataButton from "../components/Buttons/ImportDataButton";
import DownloadDataButton from "../components/Buttons/DownloadDataButton";
import BarChart from "../components/Charts/NurseryBarChart.jsx";
import dayjs from "dayjs";

const Nursery = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const [graphData, setGraphData] = useState([]);
  const [totalGraphData, setTotalGraph] = useState([]);
  const [nurseryData, setNurseryData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonError, setButtonError] = useState("");

  const [fileName, setFileName] = useState("");

  const handleSearch = () => {
    setLoading(true);
    nurseryService
      .searchNursery(region, startDate, endDate, search)
      .then((e) => {
        setGraphData(e.monthGraph);
        setTotalGraph(e.totalGraph);
        setNurseryData(e.table);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, startDate, endDate]);

  const validateDateRange = (startDate, endDate) => {
    const start = dayjs(startDate, "YYYY/MM/DD");
    const end = dayjs(endDate, "YYYY/MM/DD");

    if (start.isAfter(end)) {
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

  function handleFile(e) {
    const file = e.target.files[0];

    if (!file) {
      return null;
    } else {
      setFileName(file.name);
      setLoading(true);
      nurseryService
        .importNurseryData(1, file)
        .then((e) => {
          alert(e.data.message);
          handleSearch();
        })
        .catch((error) => {
          setButtonError(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  const clearFileName = () => {
    setFileName("");
  };

  return (
    <PageContainer>
      <Box sx={{ display: "flex", alignItems: "center", py: 0 }}>
        <GrassIcon style={{ fontSize: "80px" }} />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
          NURSERY REPORTS 
        </Typography>
      </Box>
      <Grid container spacing={0}>
        {/* <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "30px", pt: 3 }}>
            NURSERIES MAINTAINED
          </Typography>
        </Grid> */}
        
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
                  mr: 6,
                }}
              >
                Filter by:
              </Typography>
              <SelectFilterBy
                id="outlined-basic"
                name="filterBy"
                value={region}
                onChange={(evt) => setRegion(evt.target.value)}
                sx={{ width: "14vw" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginRight: "18vw",
                width: "25vw",
              }}
            >
              <TextFieldDatePicker
                label="Start Date"
                value={startDate}
                onChange={handleStartDate}
                format="MM/DD/YYYY"
              />
              <Typography sx={{ mx: 2 }}>to</Typography>
              <TextFieldDatePicker
                label="Date"
                value={endDate}
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
                sx={{ my: 1, mx: 1 }}
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
              />
            </Box>
          </Box>
          

          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", pt: 0 }}>
              Nurseries Maintained (Area in Hectares)
            </Typography>
          </Box>
          <Box sx={{mb: 1 }}>
            <BarChart monthData={graphData} totalData={totalGraphData} />
          </Box>
          
        </Grid>
      </Grid>
      <Box>
        <NurseryTable nurseryData={nurseryData} loading={loading} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
        <DownloadDataButton data={nurseryData} moduleName="Nursery" />
      </Box>
      {error}
      {buttonError}
    </PageContainer>
  );
};

export default Nursery;
