/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import Service from "../../services/pmsurvived-service";
import TableActions from "./TableActions";

export default function TableFunction({
  data,
  loadingState,
  columns,
  dataReload,
  moduleName,
}) {
  const { auth } = useStateContext();
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState("");
  const [rowId, setRowId] = useState(null);

  const handleRemove = (row) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this row?"
    );
    if (!confirmed) {
      return; // User cancelled the removal
    }

    setLoading(true);
    Service.deleteAPI(row.uuid, moduleName)
      .then((e) => {
        alert(e.data.message);
        dataReload();
        setRemarks("");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const headerStyles = {
    backgroundColor: "#f0f0f0",
    color: "blue",
    fontWeight: "bold",
  };

  const handleRowClick = (params) => {
    const rowRemarks = params.row.remarks || "";
    setRemarks(rowRemarks);
  };

  const renderCell = (params) => {
    if (params.field === "report_date") {
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

  const tableContents = [
    {
      field: "update",
      type: "update",
      headerName: "Update",
      headerClassName: "custom-header",
      width: 90,
      renderCell: (params) => (
        <TableActions {...{ params, rowId, setRowId, moduleName }} />
      ),
    },
    ...columns.map((column) => ({
      ...column,
      renderCell,
    })),
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerClassName: "custom-header",
      width: 90,
      renderCell: (params) => {
        if (
          auth.role === "admin" ||
          auth.role === "superadmin" ||
          auth.role === "reviewer"
        ) {
          return (
            <Tooltip title="Remove" placement="top">
              <GridActionsCellItem
                icon={<DeleteIcon />}
                onClick={() => handleRemove(params.row)}
                label="Remove"
              />
            </Tooltip>
          );
        }

        if (auth.role === "planner" || auth.role === "uploader") {
          return null;
        }
        return null;
      },
    },
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
  columns: PropTypes.arrayOf(PropTypes.object),
  dataReload: PropTypes.func,
  moduleName: PropTypes.string,
};
