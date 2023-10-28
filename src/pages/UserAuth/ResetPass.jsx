import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewPass from "../../components/ResetPass/NewPass";
import ResetSuccess from "../../components/ResetPass/ResetSuccess";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function ResetPass() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  const [resetSuccess, setResetSuccess] = useState(false);
  const newPass = () => {
    if (localStorage.getItem("resetSuccess")) {
      setResetSuccess(true);
    } else {
      setResetSuccess(false);
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
        <div className="bg-slate-400 flex justify-center items-center shadow-xl rounded-xl mx-12 max-lg:mx-5">
          {resetSuccess ? <ResetSuccess /> : <NewPass resetSuccess={newPass} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
