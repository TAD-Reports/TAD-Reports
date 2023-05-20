import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Moment from "react-moment";
import NurseryUpdateModal from "../Modal/nursery-update-modal";
import nurseryService from "../../services/nursery-service";

const NurseryTable = ({ nurseryData, loading }) => {
  const [selected, setSelected] = useState(null);
  const handleUpdateClose = () => {
    setSelected(null);
  };
  const handleRemove = (nursery) => {
    console.log(nursery.uuid);
    loading(true);
    nurseryService
      .deleteNursery(nursery.uuid)
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
      width: 200 
    },
    { 
      field: "region", 
      headerName: "Region",
      headerClassName: "custom-header", 
      width: 200 },
    { 
      field: "province", 
      headerName: "Province", 
      headerClassName: "custom-header",
      width: 200 },
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
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => setSelected(params.row)}
          label="Edit"
        />,
        <NurseryUpdateModal
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
        rows={nurseryData}
        columns={columns}
        headerClassName={headerStyles} // Apply the header styles
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loading}
      />
    </div>
  );
};

export default NurseryTable;
