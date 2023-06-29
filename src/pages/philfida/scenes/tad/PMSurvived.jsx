/* eslint-disable no-plusplus */
import React, { useState } from "react";
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
import Service from "../../../../services/tad-service";
import DownloadFunction from "../../../../components/philfida/Buttons/DownloadFunctions/Distribution";
import PageContainer from "../../../../components/philfida/LayoutContainers/PageContainer";
import TextFieldDatePicker from "../../../../components/philfida/Textfields/date-picker";
import SelectRegion from "../../../../components/philfida/Textfields/select-region";
import Table from "../../../../components/philfida/Tables/TableFunction";
import ImportDataButton from "../../../../components/philfida/Buttons/ImportDataButton";
import ExportDataButton from "../../../../components/philfida/Buttons/ExportDataButton";
import DownloadTemplateButton from "../../../../components/philfida/Buttons/DownloadTemplateButton";
import MixChart from "../../../../components/philfida/Charts/MixChart";

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
    DownloadFunction.downloadData(tableData);
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
                sx={{ width: "12vw" }}
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
                label="Start Date"
                value={startDate}
                onChange={handleStartDate}
                format="MM/DD/YYYY"
              />
              <Typography sx={{ mx: 2 }}>to</Typography>
              <TextFieldDatePicker
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
                sx={{ my: 1 }}
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
