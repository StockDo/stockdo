import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import Shield from "../../assets/imgs/Icons/insurance.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ResetSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex flex-col p-12 px-16 bg-white rounded-xl">
      <img
        src={StockDoLogo}
        alt="StockDo logo"
        width="200px"
        className="cursor-pointer m-auto"
        onClick={() => navigate("/")}
      />
      <img
        src={Shield}
        alt="Animated email"
        width="150px"
        className="m-auto my-12"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-['PT_Sans']">
          Senha alterada com sucesso!
        </h1>
      </div>
      <div className="flex flex-col mt-5 font-main" autoComplete="off">
        <div className="flex flex-col mb-5"></div>
        <button
          className="bg-orange-400 py-2 rounded-lg font-bold"
          onClick={() => navigate("/login", { state: true })}>
          Entrar
        </button>
      </div>
    </div>
  );
}
