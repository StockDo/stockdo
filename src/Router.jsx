import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import Success from "./pages/Success";

const VerifyResetPass = lazy(() => import("./pages/UserAuth/VerifyResetPass"));
const ResetPass = lazy(() => import("./pages/UserAuth/ResetPass"));
const EmailAuthResetPass = lazy(() =>
  import("./pages/UserAuth/EmailAuthResetPass")
);
const EmailAuth = lazy(() => import("./pages/UserAuth/EmailAuth"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/UserAuth/Login"));
const Planos = lazy(() => import("./pages/Planos"));
const Termos = lazy(() => import("./pages/Termos/Termos"));
const Licenca = lazy(() => import("./pages/Termos/Licenca"));
const Privacidade = lazy(() => import("./pages/Termos/Privacidade"));
const Signup = lazy(() => import("./pages/UserAuth/Signup"));
const ControlPanel = lazy(() => import("./pages/ControlPanel"));

const Private = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return !auth ? children : <Navigate to="/login" />;
};

const NoAuth = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return !auth ? children : <Navigate to="/" />;
};

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/signup"
          element={
            <NoAuth>
              <Signup />
            </NoAuth>
          }
        />
        <Route
          path="/login"
          element={
            <NoAuth>
              <Login />
            </NoAuth>
          }
        />
        <Route path="/planos" element={<Planos />} />
        <Route path="/success" element={<Success />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/licenca" element={<Licenca />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/verification_reset" element={<EmailAuthResetPass />} />
        <Route path="/verification" element={<EmailAuth />} />
        <Route path="/verify_reset" element={<VerifyResetPass />} />
        <Route path="/reset_password" element={<ResetPass />} />
        <Route
          path="/painel"
          element={
            <Private>
              <ControlPanel />
            </Private>
          }
        />
        <Route
          path="/registro"
          element={
            <Private>
              <Register />
            </Private>
          }
        />
      </Routes>
    </Suspense>
  );
}
