import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

const NurseryTable = ({ nurseryData, loading }) => {
  const columns = [
    { field: "reportDate", headerName: "Report Date", width: 200 },
    { field: "fundedBy", headerName: "Funded By", width: 200 },
    { field: "region", headerName: "Region", width: 200 },
    { field: "province", headerName: "Province", width: 200 },
    {
      field: "district",
      headerName: "District",
      type: "string",
      width: 200,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      type: "string",
      width: 200,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      type: "string",
      width: 200,
    },
    {
      field: "cooperative",
      headerName: "Name of Cooperative",
      type: "string",
      width: 200,
    },
    {
      field: "dateEstablished",
      headerName: "Date Established",
      type: "string",
      width: 200,
    },
    {
      field: "area",
      headerName: "Area(in hectars)",
      type: "string",
      width: 200,
    },
    {
      field: "variety",
      headerName: "Variety",
      type: "string",
      width: 200,
    },
    {
      field: "moaPeriod",
      headerName: "Period of MOA",
      type: "string",
      width: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <GridActionsCellItem icon={<VisibilityIcon />} label="View" />,
      ],
    },
  ];
  return (
    <div style={{ height: 530, width: "100%", position: "relative" }}>
      <DataGrid
        getRowId={(row) => row.reportDate}
        rows={nurseryData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loading}
      />
    </div>
  );
};

export default NurseryTable;
