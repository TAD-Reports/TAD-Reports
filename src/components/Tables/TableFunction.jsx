/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import TableActions from "./TableActions";

export default function TableFunction({
  data,
  loadingState,
  columns,
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
    width: 120,
    renderCell: (params) => (
      <TableActions {...{ params, rowId, setRowId, moduleName }} />
    ),
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
    ...(action === true &&
    (auth.role === "admin" ||
      auth.role === "superadmin" ||
      auth.role === "reviewer")
      ? [actionsColumn]
      : []),
    ...columns.map((column) => ({
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
  columns: PropTypes.arrayOf(PropTypes.object),
  dataReload: PropTypes.func,
  action: PropTypes.bool,
  moduleName: PropTypes.string,
};
