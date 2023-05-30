import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import NurseryUpdateModal from "../../Modal/nursery/nursery-update-modal";
import nurseryService from "../../../services/nursery-service";

export default function NurseryTable({
  nurseryData,
  loadingState,
  dataReload,
}) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState(""); // State to hold the remarks value

  const handleUpdateClose = () => {
    setSelected(null);
    setRemarks("");
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

  const columns = [
    {
      field: "report_date",
      headerName: "Report Date",
      headerClassName: "custom-header",
      width: 120,
      renderCell,
    },
    {
      field: "funded_by",
      headerName: "Funded By",
      headerClassName: "custom-header",
      width: 100,
      renderCell,
    },
    {
      field: "region",
      headerName: "Region",
      headerClassName: "custom-header",
      width: 150,
      renderCell,
    },
    {
      field: "province",
      headerName: "Province",
      headerClassName: "custom-header",
      width: 170,
      renderCell,
    },
    {
      field: "district",
      headerName: "District",
      headerClassName: "custom-header",
      type: "string",
      width: 150,
      renderCell,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      headerClassName: "custom-header",
      type: "string",
      width: 170,
      renderCell,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      headerClassName: "custom-header",
      type: "string",
      width: 170,
      renderCell,
    },
    {
      field: "complete_name_of_cooperator_organization",
      headerName: "Name of Cooperative",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "date_established",
      headerName: "Date Established",
      headerClassName: "custom-header",
      type: "string",
      width: 140,
      renderCell,
    },
    {
      field: "area_in_hectares_ha",
      headerName: "Area(in hectars)",
      headerClassName: "custom-header",
      type: "string",
      width: 130,
      renderCell,
    },
    {
      field: "variety_used",
      headerName: "Variety",
      headerClassName: "custom-header",
      type: "string",
      width: 120,
      renderCell,
    },
    {
      field: "period_of_moa",
      headerName: " MOA",
      headerClassName: "custom-header",
      type: "string",
      width: 90,
      renderCell,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      headerClassName: "custom-header",
      type: "string",
      width: 150,
      renderCell,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerClassName: "custom-header",
      width: 90,
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
          onSuccess={() => {
            setSelected(null);
            dataReload?.();
            handleUpdateClose();
          }}
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
        headerClassName={headerStyles}
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loading}
        onRowClick={handleRowClick}
      />
      {remarks.length > 0 ? (
        <div style={{ textAlign: "center", padding: "10px" }}>
          Remarks: <span>{remarks}</span>
        </div>
      ) : null}
    </div>
  );
}

NurseryTable.defaultProps = {
  nurseryData: null,
  loadingState: false,
  dataReload: () => {},
};

NurseryTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nurseryData: PropTypes.object,
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
};
