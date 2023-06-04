import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import DistributionUpdateModal from "../Modal/distribution/distribution-update-modal";
import distributionService from "../../services/distribution-service";

export default function DistributionTable({ distributionData, loading }) {
  const [selected, setSelected] = useState(null);
  const handleUpdateClose = () => {
    setSelected(null);
  };
  const handleRemove = (distribution) => {
    loading(true);
    distributionService
      .deleteDistribution(distribution.uuid)
      .then((e) => {
        alert(e.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally(() => {
        loading(false);
      });
  };

  const headerStyles = {
    backgroundColor: "#f0f0f0", // Set the desired background color
    color: "blue", // Set the desired text color
    fontWeight: "bold", // Optionally adjust the font weight
  };

  const columns = [
    {
      field: "report_date",
      headerName: "Report Date",
      headerClassName: "custom-header",
      width: 200,
    },
    {
      field: "type_of_planting_materials",
      headerName: "Type of Planting Materials",
      headerClassName: "custom-header",
      width: 200,
    },
    {
      field: "name_of_cooperative_individual",
      headerName: "Name of Cooperator",
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
      type: "string",
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
      field: "no_of_pm_available_during_establishment",
      headerName: "No of PM Available",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "variety",
      headerName: "Variety",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "no_of_pm_distributed",
      headerName: "No of PM Distributed",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "name_of_recipient_bene",
      headerName: "Name of Recipient",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "address_of_beneficiary",
      headerName: "Address of Recipient",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "category",
      headerName: "Category",
      headerClassName: "custom-header",
      type: "string",
      width: 200,
    },
    {
      field: "remarks",
      headerName: "Remarks",
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
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => setSelected(params.row)}
          label="Edit"
        />,
        <DistributionUpdateModal
          open={params.id === selected?.uuid}
          onClose={handleUpdateClose}
          selected={params.row}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => handleRemove(params.row)}
          label="Delete"
        />,
      ],
    },
  ];
  return (
    <div style={{ height: 530, width: "100%", position: "relative" }}>
      <DataGrid
        getRowId={(row) => row.uuid}
        rows={distributionData}
        columns={columns}
        headerClassName={headerStyles}
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loading}
      />
    </div>
  );
}

DistributionTable.defaultProps = {
  distributionData: null,
  loading: false,
};

DistributionTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  distributionData: PropTypes.object,
  loading: PropTypes.bool,
};
