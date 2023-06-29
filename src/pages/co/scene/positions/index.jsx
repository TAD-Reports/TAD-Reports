import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import themes from "../../../../themes/co-theme";
import mockData from "../../../../data/mockData";
import Header from "../../../../components/co/Header";

const { tokens } = themes;
const { mockDataInvoices } = mockData;

function Positions() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "location",
      headerName: "location",
      flex: 1,
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
    },
    // {
    //   field: "salary",
    //   headerName: "salary",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Typography color={colors.greenAccent[500]}>
    //       ₱{params.row.cost}
    //     </Typography>
    //   ),
    // },
    {
      field: "salary",
      headerName: "salary",
      flex: 1,
    },
    {
      field: "requirements",
      headerName: "requirements",
      flex: 1,
    },
    {
      field: "benefits",
      headerName: "benefits",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Job positions" subtitle="List of Job positions" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}

export default Positions;
