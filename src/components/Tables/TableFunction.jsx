/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Grid, Switch, Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import TableActions from "./TableActions";

export default function TableFunction({
  data,
  loadingState,
  // eslint-disable-next-line no-unused-vars
  dataReload,
  moduleName,
}) {
  // eslint-disable-next-line no-unused-vars
  const { auth } = useStateContext();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState("");
  const [rowId, setRowId] = useState(null);
  const [columnData, setColumnData] = useState([]);
  const [action, setAction] = useState(true);

  const headerStyles = {
    backgroundColor: "#f0f0f0",
    color: "blue",
    fontWeight: "bold",
  };

  const handleSwitchChange = (event) => {
    const isChecked = event.target.checked;
    const newAction = !!isChecked;
    setAction(newAction);
  };

  const handleRowClick = (params) => {
    const rowRemarks = params.row.remarks || "";
    setRemarks(rowRemarks);
    console.log(remarks);
  };

  const actionsColumn = {
    field: "actions",
    type: "actions",
    headerName: "Actions",
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

  useEffect(() => {
    if (
      !(
        auth.role === "admin" ||
        auth.role === "superadmin" ||
        auth.role === "reviewer"
      )
    ) {
      setAction(false);
    }
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
              // String(record[key]) is the values
              (width, record) => Math.max(width, String(record[key]).length),
              formattedHeader().length
            );
            const finalWidth =
              // eslint-disable-next-line no-nested-ternary
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
              // eslint-disable-next-line no-else-return
            } else if (typeof value === "number") {
              return "number";
            } else if (typeof value === "boolean") {
              return "boolean";
            } else {
              return "Date";
            }
          };
          const options =
            key === "Region" || data[0][key]
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
  }, [data, auth.role]);

  const tableContents = [
    ...(action === true ? [actionsColumn] : []),
    ...columnData.map((column) => ({
      ...column,
      renderCell,
    })),
  ];

  return (
    <div style={{ height: 530, width: "100%", position: "relative" }}>
      <Grid container spacing={0}>
        {auth.role === "admin" ||
        auth.role === "superadmin" ||
        auth.role === "reviewer" ? (
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              alignItems: "center",
              color: action === true ? "purple" : "inherit",
            }}
          >
            <Switch
              defaultChecked
              color="secondary"
              onChange={handleSwitchChange}
            />
            {action === true ? "Hide Actions" : "Show Actions"}
          </Grid>
        ) : (
          <Grid item xs={2} />
        )}
        {remarks.length > 0 ? (
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: 37,
              marginBottom: 0.5,
            }}
          >
            <div className="remarks-box" style={{ zIndex: -1 }}>
              <span />
              <span />
              {remarks}
            </div>
          </Grid>
        ) : null}
      </Grid>
      <DataGrid
        getRowId={(row) => row.uuid}
        rows={data}
        columns={tableContents}
        headerClassName={headerStyles}
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loading}
        onRowClick={handleRowClick}
        onCellEditStart={(params) => setRowId(params.row.uuid)}
      />
    </div>
  );
}

TableFunction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
  moduleName: PropTypes.string,
};
