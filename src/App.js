import { Route, Routes } from "react-router-dom";
import AppForm from "./pages/app-form";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/missing";
import HRPage from "./pages/hr-page";
import SignIn from "./pages/authenticate/sign-in";
import Sidebar from "./components/Sidebar/index.js";
import "./components/Sidebar/sidebar.css"

const ROLES = {
  User: 2001,
  Admin: 1984,
  HR: 5051,
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/appform" element={<AppForm />} />
          <Route path="/hrpage" element={<HRPage />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
