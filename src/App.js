/* eslint-disable no-nested-ternary */
import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "contexts/RequireAuth";
import Layout from "contexts/Layout";
import {
  Login,
  Register,
  Unauthorized,
  Missing,
  LandingPage,
  ApplicantsData,
  JobPositions,
  AppForm,
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

function App() {
  const Roles = {
    admin: "admin",
    superadmin: "superadmin",
    reviewer: "reviewer",
    uploader: "uploader",
    planner: "planner",
    hr: "hr",
  };

  return (
    <Box>
      <Box sx={{ zIndex: 1500 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/app-form" element={<AppForm />} />

          <Route element={<RequireAuth allowedRoles={[Roles]} />}>
            <Route path="/" element={<Layout />}>
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/nursery" element={<Nursery />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/pmsurvived" element={<PMSurvived />} />
              <Route
                path="/expansionandrehab"
                element={<ExpansionAndRehab />}
              />
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
              <Route path="/applicants" element={<ApplicantsData />} />
              <Route path="/jobpositions" element={<JobPositions />} />
            </Route>
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
