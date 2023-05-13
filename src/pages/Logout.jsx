import React, { useState } from "react";
import PageContainer from "../components/LayoutContainers/PageContainer";

const Logout = () => {
  //   const [data, setData] = useState([]);

  //   const handleFileUpload = (e) => {
  //     const file = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       const data = event.target.result;
  //       const workbook = XLSX.read(data, { type: "binary" });
  //       const sheetName = workbook.SheetNames[0];
  //       const sheet = workbook.Sheets[sheetName];
  //       const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  //       setData(jsonData);
  //     };
  //     reader.readAsBinaryString(file);
  //   };
  return (
    <PageContainer>
      <div>Logout</div>
    </PageContainer>
  );
};

export default Logout;
