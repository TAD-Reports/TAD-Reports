import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "contexts/RequireAuth";
import PICTULayout from "contexts/Layouts/PICTULayout";
import TADLayout from "contexts/Layouts/TADLayout";
import COLayout from "contexts/Layouts/COLayout";
import IFEDLayout from "contexts/Layouts/IFEDLayout";
import {
  Login,
  Unauthorized,
  Missing,
  LandingPage,
  AppForm,
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
import Positions from "./pages/co/scene/positions";
import Applicants from "./pages/co/scene/applicants";
import Bar from "./pages/co/scene/bar";
import Form from "./pages/co/scene/form";
import Line from "./pages/co/scene/line";
import Pie from "./pages/co/scene/pie";
import FAQ from "./pages/co/scene/faq";
import Geography from "./pages/co/scene/geography";
import Calendar from "./pages/co/scene/calendar";
import PictuDashboard from "./pages/pictu/scenes/Dashboard";
import Users from "./pages/pictu/scenes/Users";
import Register from "./pages/pictu/scenes/Register";
import themes from "./themes/co-theme";

const { ColorModeContext, useMode } = themes;

function App() {
  const [theme, colorMode] = useMode();
  const TADRoles = {
    admin: "admin",
    superadmin: "superadmin",
    reviewer: "reviewer",
    uploader: "uploader",
    planner: "planner",
  };

  const IFEDRoles = {
    admin: "admin",
    superadmin: "superadmin",
    reviewer: "reviewer",
    uploader: "uploader",
    planner: "planner",
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

            <Route element={<RequireAuth allowedRoles="hradmin" />}>
              <Route path="/" element={<COLayout />}>
                <Route path="/hrdashboard" element={<HrDashboard />} />
                <Route path="/applicants" element={<Applicants />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/team" element={<Team />} />
                <Route path="/jobform" element={<FAQ />} />
                <Route path="/userform" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />

                <Route path="/geography" element={<Geography />} />
              </Route>
            </Route>

            <Route element={<RequireAuth allowedRoles="pictu" />}>
              <Route path="/" element={<PICTULayout />}>
                <Route path="/pictudashboard" element={<PictuDashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/register" element={<Register />} />
              </Route>
            </Route>

            <Route element={<RequireAuth allowedRoles={[TADRoles]} />}>
              <Route path="/" element={<TADLayout />}>
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

            <Route element={<RequireAuth allowedRoles={[IFEDRoles]} />}>
              <Route path="/" element={<IFEDLayout />}>
                <Route path="/hrdashboard" element={<HrDashboard />} />
                <Route path="/applicants" element={<Applicants />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/team" element={<Team />} />
                <Route path="/jobform" element={<FAQ />} />
                <Route path="/userform" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />

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
