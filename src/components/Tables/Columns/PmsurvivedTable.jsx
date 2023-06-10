/* eslint-disable react/prop-types */
import React from "react";
import TableFunction from "../TableFunction";

export default function PmsurvivedTable({
  data,
  loadingState,
  dataReload,
  action,
  moduleName,
}) {
  const columns = [
    {
      field: "report_date",
      headerName: "Report Date",
      headerClassName: "custom-header",
      editable: true,
      type: "Date",
      width: 120,
    },
    {
      field: "type_of_planting_materials",
      headerName: "Type of PM",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 100,
    },
    {
      field: "name_of_cooperative_individual",
      headerName: "Coop Name",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 100,
    },
    {
      field: "region",
      headerName: "Region",
      headerClassName: "custom-header",
      type: "singleSelect",
      valueOptions: [
        "Regional Office 1",
        "Regional Office 3",
        "Regional Office 4",
        "Regional Office 5",
        "Regional Office 6",
        "Regional Office 7",
        "Regional Office 8",
        "Regional Office 9",
        "Regional Office 10",
        "Regional Office 13",
      ],
      editable: true,
      width: 150,
    },
    {
      field: "province",
      headerName: "Province",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 170,
    },
    {
      field: "district",
      headerName: "District",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 150,
    },
    {
      field: "municipality",
      headerName: "Municipality",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 170,
    },
    {
      field: "barangay",
      headerName: "Barangay",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 170,
    },
    {
      field: "no_of_pm_available_during_establishment",
      headerName: "No. PM Available",
      headerClassName: "custom-header",
      editable: true,
      type: "number",
      width: 200,
    },
    {
      field: "variety",
      headerName: "Variety",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 140,
    },
    {
      field: "date_received",
      headerName: "Date Received",
      headerClassName: "custom-header",
      editable: true,
      type: "Date",
      width: 130,
    },
    {
      field: "no_of_pm_planted",
      headerName: "No. PM Planted",
      headerClassName: "custom-header",
      editable: true,
      type: "number",
      width: 120,
    },
    {
      field: "no_of_pm_survived",
      headerName: "No. PM Survived",
      headerClassName: "custom-header",
      editable: true,
      type: "number",
      width: 90,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      headerClassName: "custom-header",
      editable: true,
      type: "string",
      width: 150,
    },
  ];

  return (
    <TableFunction
      data={data}
      loadingState={loadingState}
      columns={columns}
      dataReload={dataReload}
      action={action}
      moduleName={moduleName}
    />
  );
}
