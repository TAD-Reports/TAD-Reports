import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/authenticate/sign-in";
import Dashboard from "./pages/dashboard";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
