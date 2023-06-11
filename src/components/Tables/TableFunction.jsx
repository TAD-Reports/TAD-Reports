/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import TableActions from "./TableActions";

export default function TableFunction({
  data,
  loadingState,
  // eslint-disable-next-line no-unused-vars
  dataReload,
  action,
  moduleName,
}) {
  // eslint-disable-next-line no-unused-vars
  const { auth } = useStateContext();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState("");
  const [rowId, setRowId] = useState(null);
  const [columnData, setColumnData] = useState([]);

  const headerStyles = {
    backgroundColor: "#f0f0f0",
    color: "blue",
    fontWeight: "bold",
  };

  const handleRowClick = (params) => {
    const rowRemarks = params.row.remarks || "";
    setRemarks(rowRemarks);
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
              key !== "name_of_cooperative_individual"
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
                : maxWidth > 30 && key !== "remarks"
                ? maxWidth * 5
                : maxWidth * 9;
            return finalWidth;
          };

          const formattedType = () => {
            const value = data[0][key];
            if (typeof value === "string") {
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

          console.log(formattedType());

          return {
            field: key,
            headerName: formattedHeader(),
            headerClassName: "custom-header",
            editable: true,
            type: formattedType(),
            width: formattedWidth(),
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
  }, [data]);

  const tableContents = [
    ...(action === true ? [actionsColumn] : []),
    ...columnData.map((column) => ({
      ...column,
      renderCell,
    })),
  ];

  return (
    <div style={{ height: 530, width: "100%", position: "relative" }}>
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
      {remarks.length > 0 ? (
        <div style={{ textAlign: "center", padding: "10px" }}>
          Remarks: <span>{remarks}</span>
        </div>
      ) : null}
    </div>
  );
}

TableFunction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
  action: PropTypes.bool,
  moduleName: PropTypes.string,
};
