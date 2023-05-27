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

const App = () => {
  // const { auth } = useStateContext();
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
          <Route></Route>
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
      {/* {auth ? (
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
              width: "300px",
              position: "fixed",
              backgroundColor: "white",
              "@media screen and (prefers-color-scheme: dark)": {
                backgroundColor: "secondary-dark-bg",
              },
              zIndex: 10,
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
                backgroundColor: "#fff",
                width: "100%",
              }}
            >
              <Navbar />
            </Box>
          </Box>
        </Box>
      ) : null} */}
    </Box>
  );
};

export default App;
