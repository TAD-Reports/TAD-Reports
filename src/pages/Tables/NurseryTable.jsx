import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";

const NurseryTable = ({ nurseryData, loading }) => {
  const columns = [
    {
      field: "month_report",
      headerName: "Report Date",
      renderCell: ({ row }) =>
        row?.month_report && (
          <Moment format="YYYY/MM/DD">{row?.month_report}</Moment>
        ),
      width: 200,
    },
    { field: "funded_by", headerName: "Funded By", width: 200 },
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
      field: "complete_name_of_cooperator_organization",
      headerName: "Name of Cooperative",
      type: "string",
      width: 200,
    },
    {
      field: "date_established",
      headerName: "Date Established",
      type: "string",
      width: 200,
    },
    {
      field: "area_in_hectares_ha",
      headerName: "Area(in hectars)",
      type: "string",
      width: 200,
    },
    {
      field: "variety_used",
      headerName: "Variety",
      type: "string",
      width: 200,
    },
    {
      field: "period_of_moa",
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
        getRowId={(row) => row.uuid}
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
