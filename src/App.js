import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
// import Tooltip from "@mui/material/Tooltip";
import "./App.css";

import { Navbar, Sidebar } from "./components";

import {
  Register,
  Cocoon,
  Cotton,
  Dashboard,
  DiseaseManagementProj,
  Distribution,
  ExpansionAndRehab,
  ExpansionUnderCoconutProj,
  IEC,
  Nursery,
  PMSurvived,
  Training,
} from "./pages";

// import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Auth";
import Missing from "./pages/Missing";

function App() {
  const auth = true;
  return (
    <Box>
      {auth ? (
        <Box sx={{ display: "flex", position: "relative" }}>
          <Sidebar />
          <Navbar />
        </Box>
      ) : null}

      <Box sx={{ zIndex: 1500 }}>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />

          <Route path="/nursery" element={<Nursery />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/pmsurvived" element={<PMSurvived />} />
          <Route path="/expansionandrehab" element={<ExpansionAndRehab />} />
          <Route path="/cotton" element={<Cotton />} />
          <Route path="/cocoon" element={<Cocoon />} />
          <Route path="/training" element={<Training />} />
          <Route path="/iec" element={<IEC />} />
          <Route
            path="/expansioncoconut"
            element={<ExpansionUnderCoconutProj />}
          />
          <Route
            path="/diseasemanagement"
            element={<DiseaseManagementProj />}
          />

          <Route path="*" element={<Missing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
