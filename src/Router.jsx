import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import VerifyResetPass from "./pages/UserAuth/VerifyResetPass";
import ResetPass from "./pages/UserAuth/ResetPass";

const EmailAuth = lazy(() => import("./pages/UserAuth/EmailAuth"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/UserAuth/Login"));
const Planos = lazy(() => import("./pages/Planos"));
const Termos = lazy(() => import("./pages/Termos/Termos"));
const Licenca = lazy(() => import("./pages/Termos/Licenca"));
const Privacidade = lazy(() => import("./pages/Termos/Privacidade"));
const Signup = lazy(() => import("./pages/UserAuth/Signup"));

const Private = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return !auth ? children : <Navigate to="/login" />;
};

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/licenca" element={<Licenca />} />
        <Route path="/privacidade" element={<Privacidade />} />

        <Route path="/verification" element={<EmailAuth />} />
        <Route path="/verify_reset" element={<VerifyResetPass />} />
        <Route path="/reset_password" element={<ResetPass />} />

        <Route path="/registro" element={<Register />} />
      </Routes>
    </Suspense>
  );
}
