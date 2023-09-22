import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Termos from "./pages/Termos/Termos";
import Licenca from "./pages/Termos/Licenca";
import Privacidade from "./pages/Termos/Privacidade";
import Signup from "./pages/UserAuth/Signup";
import EmailAuth from "./pages/UserAuth/EmailAuth";
import Register from "./pages/Register";
import Login from "./pages/UserAuth/Login";

export default function Router() {
  return (
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
  );
}
