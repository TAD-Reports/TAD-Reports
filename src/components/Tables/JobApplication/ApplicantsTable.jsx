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
    field: "lastName",
    headerName: "LAST NAME",
    width: 150,
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "firstName",
    headerName: "FIRST NAME",
    width: 150,
    editable: true,
    headerClassName: "custom-header",
  },
  {
    field: "middleName",
    headerName: "MIDDLE NAME",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "suffix",
    headerName: "SUFFIX",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "positionApplied",
    headerName: "POSITION APPLIED",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "salaryGrade",
    headerName: "SALARY GRADE",
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
    field: "collegeSchool",
    headerName: "COLLEGE SCHOOL",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "collegeYear",
    headerName: "COLLEGE SCHOOL YEAR",
    width: 200,
    editable: false,
    headerClassName: "custom-header",
  },
  {
    field: "collegeCourse",
    headerName: "COLLEGE COURSE",
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
    lastName: "Hernandez",
    firstName: "Raymond",
    middleName: "Mundin",
    suffix: "sr",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 2,
    lastName: "Hernandez",
    firstName: "Raymond",
    middleName: "Mundin",
    suffix: "jr",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 3,
    lastName: "Salem",
    firstName: "Mark Joseph",
    middleName: "Valenzuela",
    suffix: "",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 4,
    lastName: "Romero",
    firstName: "Matthew Lewis",
    middleName: "Espejo",
    suffix: "",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 5,
    lastName: "Casucog",
    firstName: "Tejy",
    middleName: "Pogi",
    suffix: "sr",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 6,
    lastName: "Biccay",
    firstName: "Mike",
    middleName: "Casucog",
    suffix: "sr",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 7,
    lastName: "Hernandez",
    firstName: "Ivy",
    middleName: "Rei",
    suffix: "",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
  },
  {
    no: 8,
    lastName: "Frias",
    firstName: "Kevin",
    middleName: "Barbo",
    suffix: "sr",
    positionApplied: "Full Stack Developer",
    salaryGrade: "kahit ano",
    eligibility: "kahit ano",
    collegeSchool: "kahit ano",
    collegeYear: "ayus lang",
    collegeCourse: "Central Office",
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
