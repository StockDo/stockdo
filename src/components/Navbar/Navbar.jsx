import { useNavigate } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { useEffect, useState } from "react";

export default function Navbar({ saibaMaisScroll, planosScroll }) {
  const navigate = useNavigate();
  // const [sair, setSair] = useState(false);
  const auth = localStorage.getItem("auth");

  const sairClick = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="flex justify-between bg-neutral-900 p-4 font-['Barlow'] fixed w-full z-50">
      <img
        onClick={() => navigate("/")}
        src={StockDoLogo}
        alt="StockDo logo"
        width={"150px"}
        className="cursor-pointer"
      />
      <ul className="flex items-center gap-5 justify-end text-white text-xl">
        <li>
          <span onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </span>
        </li>
        <li>
          <span onClick={saibaMaisScroll} className="cursor-pointer">
            O Software
          </span>
        </li>
        <li>
          <span onClick={() => navigate("/planos")} className="cursor-pointer">
            Planos
          </span>
        </li>
        <li className={auth ? "hidden" : "block"}>
          <a
            onClick={() => navigate("/login")}
            className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Entrar<i className="fa-solid fa-right-to-bracket ml-1"></i>
          </a>
        </li>
        <li className={auth ? "block" : "hidden"}>
          <a
            onClick={() => navigate("/painel")}
            className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Painel<i className="fa-solid fa-layer-group ml-1"></i>
          </a>
        </li>
        <li className={auth ? "block" : "hidden"}>
          <a
            onClick={sairClick}
            className="bg-red-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Sair<i className="fa-solid fa-power-off ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
