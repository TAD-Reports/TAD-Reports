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
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DownloadFunction from "components/Buttons/DownloadFunctions/Nursery";
import GrassIcon from "@mui/icons-material/Grass";
import SearchIcon from "@mui/icons-material/Search";
import PaletteIcon from "@mui/icons-material/Palette";
import HdrWeakIcon from "@mui/icons-material/HdrWeak";
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

export default function Nursery() {
  const { auth } = useStateContext();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const [lineGraphData, setLineGraphData] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [tableData, setTableDataData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonError, setButtonError] = useState("");

  const [colorChanged, setColorChanged] = useState(false);
  const [decimal, setDecimal] = useState(" >-.2f");
  const [selectedValue, setSelectedValue] = React.useState("c");
  const moduleName = "nursery";

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

  const handleSearch = (filter) => {
    setLoading(true);
    setError("");
    Service.searchAPI(region, startDate, endDate, search || filter, moduleName)
      .then((e) => {
        setLineGraphData(e.lineGraph);
        setBarGraphData(e.barGraph);
        setTableDataData(e.table);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  React.useEffect(() => {
    let filter = null;
    if (selectedValue === "a") {
      filter = "Maintained";
      setSearch();
    } else if (selectedValue === "b") {
      filter = "Established";
    } else {
      filter = null;
    }

    if (
      startDate !== "" ||
      endDate !== "" ||
      (startDate === "" && endDate === "")
    ) {
      handleSearch(filter);
    }
  }, [region, startDate, endDate, selectedValue]);

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
          <GrassIcon style={{ fontSize: "80px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 2 }}>
            NURSERY REPORTS
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
                sx={{ width: "12vw", backgroundColor: "#FFFF" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "calc(30% - 40px)",
                width: "25vw",
              }}
            >
              <TextFieldDatePicker
                sx={{
                  backgroundColor: "#FFFF",
                }}
                label="Start Date"
                value={dayjs(startDate)}
                onChange={handleStartDate}
                format="MM/DD/YYYY"
              />
              <Typography sx={{ mx: 2 }}>to</Typography>
              <TextFieldDatePicker
                sx={{
                  backgroundColor: "#FFFF",
                }}
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
                sx={{ my: 1, backgroundColor: "#FFFF" }}
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
              />
            </Box>
          </Box>

          <Grid container>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", py: 2.3 }}
              >
                Nurseries Maintained / Established (Area in Hectares)
              </Typography>
              <Tooltip title="Colorize Area" placement="right">
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
                  <PaletteIcon sx={{ fontSize: "25px", color: "#321c47" }} />
                </Fab>
              </Tooltip>
              <Tooltip title="Remove or Show Decimals" placement="right">
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
                  <HdrWeakIcon sx={{ fontSize: "25px", color: "#321c47" }} />
                </Fab>
              </Tooltip>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                zoom: 0.9,
                display: "flex",
                justifyContent: "right",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Maintained"
                  control={<Radio {...controlProps("a")} color="warning" />}
                  label="Maintained"
                />
                <FormControlLabel
                  value="Established"
                  control={<Radio {...controlProps("b")} color="warning" />}
                  label="Established"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio {...controlProps("c")} color="warning" />}
                  label="Both"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Box sx={{ mb: 1 }}>
            <MixChart
              areaColor={colorChanged}
              decimal={decimal}
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
          my: -66.64,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="text button group">
          <ImportDataButton importFunction={handleFile} />
          <ExportDataButton downloadData={handleDownload} />
        </ButtonGroup>
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
