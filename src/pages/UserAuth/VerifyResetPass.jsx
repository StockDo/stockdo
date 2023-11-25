import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import LockLogo from "../../assets/imgs/Icons/lock.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VerifyResetPass() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/verify_reset`,
    data: {
      email: email,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(request)
      .then(() => {
        localStorage.setItem("email", email);
        navigate("/verification_reset", { state: true });
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
        <img
          src={StockDoLogo}
          alt="StockDo logo"
          width="250px"
          className="-translate-y-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="bg-slate-400 flex justify-center items-center shadow-xl rounded-xl mx-12 max-lg:mx-5">
          <div className="flex flex-col p-12 px-16 bg-white rounded-xl">
            <img
              src={LockLogo}
              alt="Animated email"
              width="180px"
              className="m-auto translate-x-4"
              onClick={() => navigate("/")}
            />
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-3xl font-['PT_Sans']">Redefina sua senha</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-5 font-main"
              autoComplete="off">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-['Roboto'] text-xl">
                  Insira seu email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                  className={`w-96 border rounded-md py-2 px-2 text-xl mt-2 border-[rgba(0,0,0,0.25)]  ${
                    error && "border-red-600"
                  }`}
                />
                {error && (
                  <span className="text-red-600">Email não encontrado</span>
                )}
              </div>
              <button className="bg-orange-400 py-2 rounded-lg font-bold">
                Verificar
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
