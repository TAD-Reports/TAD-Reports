import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../pages/co/global/Topbar";
import Sidebar from "../../pages/co/global/Sidebar";
import "../../App.css";

function HrLayout() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flex: "1",
        overflowY: "auto",
      }}
    >
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HrLayout;
