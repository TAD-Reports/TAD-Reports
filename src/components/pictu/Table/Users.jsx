import React, { useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UsersUpdateModal from "../Modal/UsersUpdateModal";

export default function UsersTable({ data, loadingState, dataReload }) {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = React.useState(null);

  const UpdateHandleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  const columns = React.useMemo(() => [
    {
      field: "username",
      headerName: "Username",
      width: 250,
      headerClassName: "custom-header",
    },
    {
      field: "firstname",
      headerName: "First Name",
      width: 225,
      headerClassName: "custom-header",
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 225,
      headerClassName: "custom-header",
    },
    {
      field: "region",
      headerName: "Region",
      width: 225,
      headerClassName: "custom-header",
    },
    {
      field: "role",
      headerName: "Role",
      width: 225,
      headerClassName: "custom-header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 225,
      headerClassName: "custom-header",
      valueGetter: (params) =>
        ["Inactive", "Active", "Disabled"][params?.row?.status] || "Unknown",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 225,
      headerClassName: "custom-header",
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            setOpen(true);
            setSelected(params.row);
          }}
          label="Update"
        />,
        <UsersUpdateModal
          open={open && params.id === selected?.uuid}
          onClose={UpdateHandleClose}
          selected={params.row}
          onSuccess={() => {
            setSelected(null);
            dataReload();
          }}
        />,
      ],
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: (themeMode) =>
          themeMode.palette.mode === "dark" ? "#262b32" : "#f3f3f3",
        height: "60vh",
      }}
    >
      <DataGrid
        getRowId={(row) => row?.uuid}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[1]}
        loading={loadingState}
      />
    </Box>
  );
}

UsersTable.defaultProps = {
  data: [],
  loadingState: false,
  dataReload: () => {},
};

UsersTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.bool,
  dataReload: PropTypes.func,
};
