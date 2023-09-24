import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";

const EmailAuth = lazy(() => import("./pages/UserAuth/EmailAuth"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/UserAuth/Login"));
const Termos = lazy(() => import("./pages/Termos/Termos"));
const Licenca = lazy(() => import("./pages/Termos/Licenca"));
const Privacidade = lazy(() => import("./pages/Termos/Privacidade"));
const Signup = lazy(() => import("./pages/UserAuth/Signup"));

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/licenca" element={<Licenca />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/verification" element={<EmailAuth />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Suspense>
  );
}
