import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import NurseryUpdateModal from "../Modal/nursery/nursery-update-modal";
import nurseryService from "../../services/nursery-service";

export default function NurseryTable({ nurseryData, loadingState, onSuccess }) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(loadingState);

  const handleUpdateClose = () => {
    setSelected(null);
  };

  const handleRemove = (nursery) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this data?"
    );
    if (!confirmed) {
      return; // User cancelled the removal
    }

    console.log(selected);
    setLoading(true);
    nurseryService
      .deleteNursery(nursery.uuid)
      .then((e) => {
        alert(e.data.message);
        onSuccess();
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
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerClassName: "custom-header",
      width: 200,
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <Tooltip title="Edit" placement="top">
          <GridActionsCellItem
            icon={<EditIcon />}
            onClick={() => setSelected(params.row)}
            label="Edit"
          />
        </Tooltip>,
        <NurseryUpdateModal
          open={params.id === selected?.uuid}
          onClose={handleUpdateClose}
          selected={params.row}
        />,
        <Tooltip title="Remove" placement="top">
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => handleRemove(params.row)}
            label="Remove"
          />
        </Tooltip>,
      ],
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
        loading={loading}
      />
    </div>
  );
}

NurseryTable.defaultProps = {
  nurseryData: null,
  loadingState: false,
  onSuccess: () => {},
};

NurseryTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nurseryData: PropTypes.object,
  loadingState: PropTypes.bool,
  onSuccess: PropTypes.func,
};