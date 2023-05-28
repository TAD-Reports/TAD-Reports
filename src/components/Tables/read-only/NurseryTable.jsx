import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";

export default function NurseryTable({ nurseryData, loadingState }) {
  const headerStyles = {
    backgroundColor: "#f0f0f0",
    color: "blue",
    fontWeight: "bold",
  };

  const columns = [
    {
      field: "report_date",
      headerName: "Report Date",
      headerClassName: "custom-header", // Apply the header styles to all headers
      renderCell: ({ row }) =>
        row?.month_report && (
          <Moment format="YYYY/MM/DD">{row?.report_date}</Moment>
        ),
      width: 200,
    },
    {
      field: "funded_by",
      headerName: "Funded By",
      headerClassName: "custom-header",
      width: 200,
    },
    {
      field: "region",
      headerName: "Region",
      headerClassName: "custom-header",
      width: 200,
    },
    {
      field: "province",
      headerName: "Province",
      headerClassName: "custom-header",
      width: 200,
    },
    {
      field: "district",
      headerName: "District",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "complete_name_of_cooperator_organization",
      headerName: "Name of Cooperative",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "date_established",
      headerName: "Date Established",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "area_in_hectares_ha",
      headerName: "Area(in hectars)",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "variety_used",
      headerName: "Variety",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "period_of_moa",
      headerName: "Period of MOA",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
  ];
  return (
    <div style={{ height: 530, width: "100%", position: "relative" }}>
      <DataGrid
        getRowId={(row) => row.uuid}
        rows={nurseryData}
        columns={columns}
        headerClassName={headerStyles} // Apply the header styles
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loadingState}
      />
    </div>
  );
}

NurseryTable.defaultProps = {
  nurseryData: null,
  loadingState: false,
};

NurseryTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nurseryData: PropTypes.object,
  loadingState: PropTypes.bool,
};
