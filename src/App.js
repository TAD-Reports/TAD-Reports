import { Route, Routes } from "react-router-dom";
import AppForm from "./pages/app-form";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/missing";
import HRPage from "./pages/hr-page";

const ROLES = {
  User: 2001,
  Admin: 1984,
  HR: 5051,
};

function App() {
  return (
    <div>
      <Routes>
        {/* Add a default route that renders the sign-in page */}
        <Route path="/" element={<AppForm />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/hrpage" element={<HRPage />} />
        </Route>

        {/* Add a wildcard route that renders the missing page */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}


export default App;
