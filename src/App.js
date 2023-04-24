import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/authenticate/sign-in";
import AppForm from "./pages/app-form";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Missing from "./pages/missing";

const ROLES = {
  User: 2001,
  Admin: 1984,
  HR: 5051,
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/sign-in" element={<SignIn />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/app-form" element={<AppForm />} />
          </Route>

          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
