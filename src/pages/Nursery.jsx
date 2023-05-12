import React, { useState } from "react";
import PageContainer from "../components/LayoutContainers/PageContainer";
import BarGraph from "../components/Charts/BarChart";
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
import moment from "moment";
import nurseryService from "../services/nursery-service";
import NurseryTable from "../components/Tables/NurseryTable";
import ImportDataButton from "../components/Buttons/ImportDataButton";
import DownloadDataButton from "../components/Buttons/DownloadDataButton";

const Nursery = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startFilterBy, setFilterByStart] = useState("");
  const [endFilterBy, setFilterByEnd] = useState("");

  const [nurseryData, setNurseryData] = useState([]);
  const [search, setSearch] = useState(" ");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateDateRange = (start, end) => {
    if (start && end) {
      if (new Date(start) >= new Date(end)) {
        alert("Start date can't be equal or later than the End date.");
        setStartDate(null);
        setEndDate(null);
      }
    }
  };

  const handleSearch = () => {
    setLoading(true);
    nurseryService
      .searchNursery(search)
      .then((e) => {
        setNurseryData(e);
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
  }, []);

  const handleRenderData = (e) => {
    if (e[0]) {
      handleSearch();
      setLoading(e[1]);
      setError(e[2]);
    }
  };

  const handleStartDate = (evt) => {
    const month = String(evt.$M + 1).padStart(2, "0");
    const day = String(evt.$D).padStart(2, "0");
    const date = `${evt.$y}-${month}-${day}`;
    setStartDate(date);
    validateDateRange(date, endDate);
  };

  const handleEndDate = (evt) => {
    const month = String(evt.$M + 1).padStart(2, "0");
    const day = String(evt.$D).padStart(2, "0");
    const date = `${evt.$y}-${month}-${day}`;
    setEndDate(date);
    validateDateRange(startDate, date);
  };

  const startDateMoment = moment(startDate);
  const StartDateDisplay = startDateMoment.format("MMMM D, YYYY");

  const endDateMoment = moment(endDate);
  const EndDateDisplay = endDateMoment.format("MMMM D, YYYY");

  // const rows = [
  //   {
  //     reportDate: 1,
  //     fundedBy: "Snow",
  //     region: "Jon",
  //     province: "province",
  //     district: "district",
  //     municipality: "municipality",
  //     barangay: "barangay",
  //     cooperative: "cooperative",
  //     dateEstablished: "dateEstablished",
  //     area: "area",
  //     variety: "variety",
  //     moaPeriod: "moaPeriod",
  //   },
  // ];

  return (
    <PageContainer>
      <Box sx={{ display: "flex", alignItems: "center", py: 3 }}>
        <GrassIcon style={{ fontSize: "80px" }} />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
          Nursery Reports (Last 2 months)
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "30px", pt: 3 }}>
        NURSERIES MAINTAINED
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
              label="Date"
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
            {StartDateDisplay !== "Invalid date" ? StartDateDisplay : "Date"}
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
              label="Date"
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
            {EndDateDisplay !== "Invalid date" ? EndDateDisplay : "Date"}
          </Typography>
          <BarGraph />
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
            NURSERY DATA
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right", py: 2 }}>
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
        </Grid>
      </Grid>
      <div>
        <NurseryTable nurseryData={nurseryData} loading={loading} />
      </div>
      {error}
      <Box sx={{ display: "flex", alignItems: "end", px: 2, mt: 10 }}>
        <ImportDataButton renderData={handleRenderData} />
        <DownloadDataButton />
      </Box>
    </PageContainer>
  );
};

export default Nursery;
