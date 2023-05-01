import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/app-form";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/missing";
import HRPage from "./pages/hr-page";
import SignIn from "./pages/authenticate/sign-in";

const ROLES = {
  User: 2001,
  Admin: 1984,
  HR: 5051,
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hrpage" element={<HRPage />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
