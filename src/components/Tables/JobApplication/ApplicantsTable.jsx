import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  {
    field: "no",
    headerName: "NO",
    width: 90,
    headerClassName: "custom-header",
  },
  {
    field: "position",
    headerName: "POSITIONS TITLE",
    width: 150,
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "plantilia",
    headerName: "PLANTILIA ITEM",
    width: 150,
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "paygrade",
    headerName: "SALARY JOB/PAYGRADE",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "salary",
    headerName: "MONTHLY SALARY",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "education",
    headerName: "EDUCATION",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "training",
    headerName: "TRAINING",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "experience",
    headerName: "EXPERIENCE",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "eligibility",
    headerName: "ELIGIBILITY",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "competency",
    headerName: "COMPETENCY",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "place",
    headerName: "PLACE OF ASSIGNMENT",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    type: "actions",
    width: 200,
    headerClassName: "custom-header",
    getActions: () => [
      <GridActionsCellItem icon={<CreateIcon />} label="edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="delete" />,
    ],
  },
];

const rows = [
  {
    no: 1,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 30000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 2,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 20000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 3,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 10000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 4,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 9000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 5,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 1000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 6,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 40000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 7,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 100000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
  {
    no: 8,
    position: "kahit ano",
    plantilia: "Flower Vase",
    paygrade: 35000,
    salary: 40000,
    education: "Master's Degree",
    training: "kahit ano",
    experience: "kahit ano",
    eligibility: "kahit ano",
    competency: "ayus lang",
    place: "Central Office",
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.no}
        rows={rows}
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[8]}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
