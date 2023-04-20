import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/authenticate/sign-in";
import AppForm from "./pages/app-form";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppForm />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
