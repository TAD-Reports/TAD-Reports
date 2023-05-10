import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from '@mui/material/Tooltip';
import { Navbar, Sidebar } from "./components";

import {
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

import "./App.css";
import { Box } from "@mui/material";

const App = () => {
  // const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed - right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip title="Settings">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "gray", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
          <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72">
            <Box
              sx={{
                position: "fixed",
                md: {
                  position: "static",
                },
                backgroundColor: "#fff",
                fontFamily: "sans-serif",
                width: "100%",
                zIndex: 1,
              }}
              className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full zIndex"
            >
              <Navbar />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* Pages */}
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
              </Routes>
            </Box>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
