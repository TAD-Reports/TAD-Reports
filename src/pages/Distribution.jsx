import React, { useState } from "react";
import {
  Divider,
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { GiShakingHands } from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import { useStateContext } from "contexts/ContextProvider";
import DownloadFunction from "components/Buttons/DownloadFunctions/Distribution";
import PageContainer from "../components/LayoutContainers/PageContainer";
import DistributionChart from "../components/Charts/DistributionChart";
import TextFieldDatePicker from "../components/Textfields/date-picker";
import SelectFilterBy from "../components/Textfields/select-filterBy";
import DistributionTable from "../components/Tables/Columns/DistributionTable";
import distributionService from "../services/distribution-service";
import DownloadTemplateButton from "../components/Buttons/DownloadTemplateButton";
import ImportDataButton from "../components/Buttons/ImportDataButton";
import DownloadDataButton from "../components/Buttons/DownloadDataButton";

export default function Distribution() {
  const { auth } = useStateContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const [graphData, setGraphData] = useState([]);
  const [totalGraphData, setTotalGraph] = useState([]);
  const [distributionData, setDistributionData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonError, setButtonError] = useState("");

  const [fileName, setFileName] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");
    distributionService
      .searchDistribution(region, startDate, endDate, search)
      .then((e) => {
        setGraphData(e.monthGraph);
        setTotalGraph(e.totalGraph);
        setDistributionData(e.table);
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
    distributionService
      .importDistributionData(auth.uuid, file)
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
    DownloadFunction.downloadData(distributionData);
  };

  return (
    <PageContainer>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", py: 2 }}>
          <GiShakingHands style={{ fontSize: "80px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
            DISTRIBUTION OF PLANTING MATERIALS
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
          <DownloadTemplateButton templateName="Distribution_Template" />
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
              <SelectFilterBy
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
                sx={{ my: 1 }}
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
              />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px", py: 2 }}>
              Distribution of Planting Materials (Total No. Of Planting
              Materials Distributed)
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <DistributionChart
              monthData={graphData}
              totalData={totalGraphData}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ m: 4 }} />

      <Box>
        <DistributionTable
          distributionData={distributionData}
          loading={loading}
        />
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
        <DownloadDataButton downloadData={handleDownload} />
      </Box>
      {error}
      {buttonError}
    </PageContainer>
  );
}
