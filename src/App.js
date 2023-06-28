/* eslint-disable import/no-duplicates */
/* eslint-disable no-nested-ternary */
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "contexts/RequireAuth";
import HrAuth from "contexts/HrAuth";
import Layout from "contexts/Layout";
import HrLayout from "contexts/HrLayout";
import {
  Login,
  Unauthorized,
  Missing,
  LandingPage,
  AppForm,
  Register,
  Dashboard,
  Cocoon,
  Cotton,
  DiseaseManagementProj,
  Distribution,
  ExpansionAndRehab,
  ExpansionUnderCoconutProj,
  IEC,
  Nursery,
  PMSurvived,
  Training,
} from "./pages";
import HrDashboard from "./pages/co/scene/dashboard";
import Team from "./pages/co/scene/team";
import Invoices from "./pages/co/scene/positions";
import Contacts from "./pages/co/scene/applicants";
import Bar from "./pages/co/scene/bar";
import Form from "./pages/co/scene/form";
import Line from "./pages/co/scene/line";
import Pie from "./pages/co/scene/pie";
import FAQ from "./pages/co/scene/faq";
import Geography from "./pages/co/scene/geography";
import Calendar from "./pages/co/scene/calendar";
import themes from "./theme";
// import { useStateContext } from "./contexts/ContextProvider";

const { ColorModeContext, useMode } = themes;

function App() {
  const [theme, colorMode] = useMode();

  const Roles = {
    admin: "admin",
    superadmin: "superadmin",
    reviewer: "reviewer",
    uploader: "uploader",
    planner: "planner",
  };

  const HrRoles = {
    hradmin: "hradmin",
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              </Route>
            </Route>
            <Route element={<HrAuth allowedRole={HrRoles.hradmin} />}>
              <Route path="/" element={<HrLayout />}>
                <Route path="/hrdashboard" element={<HrDashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Route>
            </Route>

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
