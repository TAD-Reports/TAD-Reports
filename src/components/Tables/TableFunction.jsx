/* eslint-disable no-nested-ternary */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Box, Button, ButtonGroup, Grid, Switch, Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import ExpandOutlinedIcon from "@mui/icons-material/ExpandOutlined";
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
      <TableActions {...{ params, rowId, setRowId, moduleName }} />
    ),
  };

  const renderCell = (params) => {
    if (params.field === "report_date" || params.field === "date_received") {
      return (
        <Tooltip title={params.value} placement="top">
          <span>
            {params.value && (
              <Moment format="YYYY/MM/DD">{params.value}</Moment>
            )}
          </span>
        </Tooltip>
      );
    }
    if (params.value) {
      return (
        <Tooltip title={params.value} placement="top">
          <span>{params.value}</span>
        </Tooltip>
      );
    }
    return null;
  };

  const columnDataFuntion = () => {
    const excludedKeys = ["uuid", "created_at", "updated_at", "imported_by"];
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
                : maxWidth >= 28 && key !== "remarks"
                ? maxWidth * 6
                : maxWidth * 10;
            const limitedFinalWidth = Math.min(finalWidth, 170);
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
                  "Region 1",
                  "Region 3",
                  "Region 4",
                  "Region 5",
                  "Region 6",
                  "Region 7",
                  "Region 8",
                  "Region 9",
                  "Region 10",
                  "Region 13",
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
          const fotmattedWidth = width < 10 ? width * 13 : width * 9;
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
      renderCell,
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
        {auth.role === "admin" ||
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
                  height: 40,
                  width: 150,
                  backgroundColor: "#FFF",
                  color: "black",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "#46008B",
                    backgroundColor: "#76A66E",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  cursor: "default",
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
                  backgroundColor: "#FFF",
                  color: "black",
                  "&:hover": {
                    textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                    color: "#46008B",
                    backgroundColor: "#76A66E",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 200,
                }}
              >
                <ExpandOutlinedIcon sx={{ mr: 0.3 }} />
                EXPAND
              </Button>
            </ButtonGroup>
          </Grid>
        ) : (
          <Grid item xs={2} />
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
            <div className="remarks-box" style={{ zIndex: 2 }}>
              <span />
              <span />
              {remarks}
            </div>
          </Grid>
        ) : (
          <Grid item xs={8} />
        )}
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 0.7,
          }}
        />
      </Grid>
      <Box
        sx={{
          mt: -0.1,
          height: tableHeight,
          width: "100%",
          backgroundColor: "#FFFF",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.4)",
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
        />
      </Box>
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
