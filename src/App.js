import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar } from "./components";

import {
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
  Bar,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed - right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "gray", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<AppForm />} />

              {/* Pages */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appform" element={<AppForm />} />
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

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
