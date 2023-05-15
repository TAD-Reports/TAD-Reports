import React from "react";
import { Box, Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import "./App.css";

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

import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Auth";

const App = () => {
  const { auth } = useStateContext();

  return (
    <Box>
      <BrowserRouter>
        {auth ? (
          <Box sx={{ display: "flex", position: "relative" }}>
            <Box
              sx={{
                position: "fixed",
                right: "16px",
                bottom: "16px",
                zIndex: "1000",
              }}
            >
              <Tooltip title="Settings">
                <Button
                  type="button"
                  sx={{
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    fontSize: "30px",
                    color: "white",
                    padding: "15px 0",
                    "&:hover": {
                      textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                      color: "gray",
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  <FiSettings />
                </Button>
              </Tooltip>
            </Box>
            <Box
              sx={{
                width: "300px", // equivalent to w-72 in Tailwind
                position: "fixed",
                backgroundColor: "white",
                "@media screen and (prefers-color-scheme: dark)": {
                  backgroundColor: "secondary-dark-bg",
                },
              }}
            >
              <Sidebar />
            </Box>
            <Box
              sx={{
                backgroundColor: "main-bg",
                "@media screen and (prefers-color-scheme: dark)": {
                  backgroundColor: "dark.main-bg",
                },
                minHeight: "100vh",
                width: "100%",
                "@media screen and (min-width: 768px)": {
                  marginLeft: "300px",
                },
              }}
            >
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
                style={{ zIndex: "1000" }}
              >
                <Navbar />
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "130px" }}
              >
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Dashboard />} />

                  {/* Pages */}
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
            </Box>
          </Box>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </Box>
  );
};

export default App;
