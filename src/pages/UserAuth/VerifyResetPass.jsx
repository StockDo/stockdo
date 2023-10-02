import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import LockLogo from "../../assets/imgs/lock.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function VerifyResetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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
              <h1 className="text-3xl font-['PT_Sans']">Altere sua senha</h1>
            </div>
            <form
              method="get"
              className="flex flex-col mt-5 font-['Open_Sans']"
              autoComplete="off">
              <div className="flex flex-col items-center mb-5">
                <label htmlFor="" className="font-['Roboto'] text-xl">
                  Insira seu email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-96 border rounded-md py-2 px-2 text-xl mt-2 border-[rgba(0,0,0,0.25)] outline-none`}
                />
              </div>
              <button
                onClick={() => {
                  localStorage.setItem("email", email);
                  navigate("/reset_password");
                }}
                className="bg-orange-400 py-2 rounded-lg font-bold">
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
