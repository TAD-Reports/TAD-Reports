/* eslint-disable no-nested-ternary */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TableActions from "./TableActions";

export default function TableFunction({
  data,
  loadingState,
  // eslint-disable-next-line no-unused-vars
  dataReload,
  moduleName,
}) {
  const { auth } = useStateContext();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState("");
  const [rowId, setRowId] = useState(null);
  const [columnData, setColumnData] = useState([]);
  const [tableHeight, setTableHight] = useState(600);
  const [action, setAction] = useState(
    auth.role === "admin" ||
      auth.role === "superadmin" ||
      auth.role === "reviewer"
  );

  const handleTableHeight = () => {
    if (tableHeight < 1000) {
      setTableHight(1000);
    } else {
      setTableHight(600);
    }
  };

  const headerStyles = {
    backgroundColor: "#f0f0f0",
    color: "blue",
    fontWeight: "bold",
  };

  const handleSwitchChange = (event) => {
    setAction(event.target.checked);
  };

  const handleRowClick = (params) => {
    const rowRemarks = params.row.remarks || "";
    setRemarks(rowRemarks);
  };

  const actionsColumn = {
    field: "controls",
    type: "controls",
    headerName: "",
    headerClassName: "custom-header",
    width: 140,
    renderCell: (params) => (
      <TableActions {...{ params, rowId, setRowId, moduleName, dataReload }} />
    ),
  };

  const columnDataFuntion = () => {
    const excludedKeys = [
      "uuid",
      "created_at",
      "updated_at",
      "imported_by",
      "password",
      "refresh_token",
    ];
    if (data && !data.columnNames && data.length > 0) {
      const columns = Object.keys(data[0])
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => {
          const formattedHeader = () => {
            const formattedKey = key.replace(/_/g, " ");
            let formattedLabel = formattedKey;
            if (
              key !== "type_of_planting_materials" &&
              key !== "name_of_cooperative_individual" &&
              key !== "address_of_beneficiary" &&
              key !== "name_of_recipient_bene" &&
              key !== "period_of_moa"
            ) {
              formattedLabel = formattedKey
                .replace(/ ha/g, "")
                .replace(/pm/g, "PM")
                .replace(/ of /g, ". ")
                .replace(/available/g, "")
                .replace(/([A-Z])[a-z]+(?! PM)/g, (match) =>
                  match.charAt(0).toUpperCase()
                );
            } else {
              formattedLabel = formattedKey
                .replace(/period of moa/g, "MOA period")
                .replace(/name of recipient bene/g, "recipient name")
                .replace(/address of beneficiary/g, "beneficiary address")
                .replace(/planting materials/g, "PM")
                .replace(/cooperative individual/g, "Cooperative/Individual");
            }
            return (
              formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1)
            );
          };
          const formattedWidth = () => {
            const maxWidth = data.reduce(
              (width, record) => Math.max(width, String(record[key]).length),
              formattedHeader().length
            );
            const finalWidth =
              maxWidth < 10
                ? maxWidth * 13
                : maxWidth >= 28 && key === "remarks"
                ? maxWidth * 111
                : maxWidth >= 28 && key !== "remarks"
                ? maxWidth * 6
                : maxWidth * 10;
            const limitedFinalWidth = Math.min(finalWidth, 873);
            return limitedFinalWidth;
          };
          const formattedType = () => {
            const value = data[0][key];
            if (typeof value === "string") {
              if (value.includes("Region")) {
                return "singleSelect";
              }
              return "string";
            } else if (typeof value === "number") {
              return "number";
            } else if (typeof value === "boolean") {
              return "boolean";
            } else {
              return "Date";
            }
          };
          const options =
            key === "region"
              ? [
                  "Regional Office 1",
                  "Regional Office 3",
                  "Regional Office 4",
                  "Regional Office 5",
                  "Regional Office 6",
                  "Regional Office 7",
                  "Regional Office 8",
                  "Regional Office 9",
                  "Regional Office 10",
                  "Regional Office 13",
                ]
              : undefined;

          return {
            field: key,
            headerName: formattedHeader(),
            headerClassName: "custom-header",
            editable: true,
            type: formattedType(),
            width: formattedWidth(),
            valueOptions: options,
          };
        });
      setColumnData(columns);
    } else if (data.columnNames) {
      const columnNames = data.columnNames
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => {
          const formattedKey = key.replace(/_/g, " ");
          const formattedLabel =
            formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
          const width = String(key).length;
          const fotmattedWidth =
            key === "remarks"
              ? width * 111
              : width < 10
              ? width * 13
              : width * 9;
          return {
            field: key,
            headerName: formattedLabel,
            headerClassName: "custom-header",
            editable: true,
            type: "string",
            width: fotmattedWidth,
          };
        });
      setColumnData(columnNames);
    }
  };

  useEffect(() => {
    columnDataFuntion();
  }, [data, auth.role]);

  const tableContents = [
    ...(action ? [actionsColumn] : []),
    ...columnData.map((column) => ({
      ...column,
    })),
  ];

  return (
    <div
      style={{
        height: 533,
        width: "100%",
        position: "relative",
      }}
    >
      <Grid container spacing={0}>
        {auth.role === "pictu" ||
        auth.role === "admin" ||
        auth.role === "superadmin" ||
        auth.role === "reviewer" ? (
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
            }}
          >
            <ButtonGroup variant="outlined" aria-label="text button group">
              <Button
                sx={{
                  ml: 0.2,
                  height: 40,
                  width: 150,
                  backgroundColor: "#D1D1D1",
                  color: "black",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "black",
                    backgroundColor: "lightgreen",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 200,
                }}
              >
                <Switch
                  defaultChecked
                  color="warning"
                  onChange={handleSwitchChange}
                />
                {action ? <span>HIDE</span> : <span>SHOW</span>}
              </Button>
              <Button
                onClick={handleTableHeight}
                sx={{
                  height: 40,
                  width: 150,
                  backgroundColor: "#D1D1D1",
                  color: "black",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "black",
                    backgroundColor: "lightgreen",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 200,
                }}
              >
                <KeyboardDoubleArrowDownIcon
                  sx={{
                    mr: 0.3,
                    fontSize: "28px",
                  }}
                />
                EXTEND
              </Button>
            </ButtonGroup>
          </Grid>
        ) : (
          <Grid item xs={2} sx={{ py: 2.6 }} />
        )}
        {remarks.length > 0 ? (
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="remarks-box"
              style={{ zIndex: 2, fontSize: "12px" }}
            >
              <span />
              <span />
              {remarks}
            </div>
          </Grid>
        ) : (
          <Grid item xs={8} />
        )}
      </Grid>
      <Box
        sx={{
          mt: -0.1,
          height: tableHeight,
          backgroundColor: (themeMode) =>
            themeMode.palette.mode === "dark" ? "#262b32" : "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
          zoom: 0.85,
        }}
      >
        <DataGrid
          getRowId={(row) => row.uuid}
          rows={data}
          columns={columnData.length > 0 ? tableContents : []}
          headerClassName={headerStyles}
          pageSize={10}
          rowsPerPageOptions={[1]}
          loading={loading}
          onRowClick={handleRowClick}
          onCellEditStop={(params) => setRowId(params.row.uuid)}
          columnBuffer={1}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
      {auth.role === "pictu" ? null : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: -4,
            color: "grey",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              zIndex: 100,
              color: (themeMode) =>
                themeMode.palette.mode === "dark" ? "#fff" : "gray",
            }}
          >
            By default, this table data is automatically set to the current
            month and chart data is set to 6 months. Use the filters to see
            changes.
          </Typography>
        </Box>
      )}
    </div>
  );
}

TableFunction.defaultProps = {
  data: [],
  loadingState: false,
  dataReload: () => {},
  moduleName: "",
};

TableFunction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
  moduleName: PropTypes.string,
};
