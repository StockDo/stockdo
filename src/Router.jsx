import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Termos from "./pages/Termos";
import Licenca from "./pages/Licenca";
import Privacidade from "./pages/Privacidade";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/licenca" element={<Licenca />} />
      <Route path="/privacidade" element={<Privacidade />} />
    </Routes>
  );
}
