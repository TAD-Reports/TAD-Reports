import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import UpdateModal from "../../Modal/distribution/distribution-update-modal";
import Service from "../../../services/pmsurvived-service";

export default function PmsurvivedTable({ data, loadingState, dataReload }) {
  const { auth } = useStateContext();
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(loadingState);
  const [remarks, setRemarks] = useState(""); // State to hold the remarks value

  const handleUpdateClose = () => {
    setSelected(null);
    setRemarks("");
  };

  const handleRemove = (row) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this data?"
    );
    if (!confirmed) {
      return; // User cancelled the removal
    }

    console.log(selected);
    setLoading(true);
    Service.deleteAPI(row.uuid)
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
      width: 200,
      renderCell,
    },
    {
      field: "type_of_planting_materials",
      headerName: "Type of Planting Materials",
      headerClassName: "custom-header",
      width: 200,
      renderCell,
    },
    {
      field: "name_of_cooperative_individual",
      headerName: "Name of Cooperator",
      headerClassName: "custom-header",
      width: 200,
      renderCell,
    },
    {
      field: "region",
      headerName: "Region",
      headerClassName: "custom-header",
      width: 200,
      renderCell,
    },
    {
      field: "province",
      headerName: "Province",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "district",
      headerName: "District",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "no_of_pm_available_during_establishment",
      headerName: "No of PM Available",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "variety",
      headerName: "Variety",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "no_of_pm_distributed",
      headerName: "No of PM Distributed",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "name_of_recipient_bene",
      headerName: "Name of Recipient",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "address_of_beneficiary",
      headerName: "Address of Recipient",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "gender",
      headerName: "Gender",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "category",
      headerName: "Category",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
      renderCell,
    },
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
            <>
              <Tooltip title="Edit" placement="top">
                <GridActionsCellItem
                  icon={<EditIcon />}
                  onClick={() => setSelected(params.row)}
                  label="Edit"
                />
              </Tooltip>
              <UpdateModal
                open={params.id === selected?.uuid}
                onClose={handleUpdateClose}
                selected={params.row}
                onSuccess={() => {
                  setSelected(null);
                  dataReload?.();
                  handleUpdateClose();
                }}
              />
              <Tooltip title="Remove" placement="top">
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  onClick={() => handleRemove(params.row)}
                  label="Remove"
                />
              </Tooltip>
            </>
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

PmsurvivedTable.defaultProps = {
  data: null,
  loadingState: false,
  dataReload: () => {},
};

PmsurvivedTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
};
