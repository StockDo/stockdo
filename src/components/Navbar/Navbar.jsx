import { useNavigate, useLocation } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { FaEyeDropper } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import HomeNavbarMenu from "./HomeNavbarMenu";

export default function Navbar({
  saibaMaisScroll,
  planosScroll,
  openMenu,
  setOpenMenu,
}) {
  const navigate = useNavigate();
  // const [sair, setSair] = useState(false);
  const auth = localStorage.getItem("auth");

  const sairClick = () => {
    localStorage.clear();
    navigate("/login", { state: true });
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
      <ul className="flex items-center justify-end gap-5 text-xl text-white max-sm:hidden">
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
            onClick={() => navigate("/login", { state: true })}
            className="px-3 py-1 text-black bg-orange-400 rounded-lg cursor-pointer">
            Entrar<i className="ml-1 fa-solid fa-right-to-bracket"></i>
          </a>
        </li>
        <li className={auth ? "block" : "hidden"}>
          <a
            onClick={() => navigate("/painel", { state: true })}
            className="px-3 py-1 text-black bg-orange-400 rounded-lg cursor-pointer">
            Painel<i className="ml-1 fa-solid fa-layer-group"></i>
          </a>
        </li>
        <li className={auth ? "block" : "hidden"}>
          <a
            onClick={sairClick}
            className="px-3 py-1 text-black bg-red-400 rounded-lg cursor-pointer">
            Sair<i className="ml-1 fa-solid fa-power-off"></i>
          </a>
        </li>
      </ul>
      <button onClick={() => setOpenMenu(!openMenu)} className="sm:hidden">
        <MdMenu color="#FFF" size={45} />
      </button>
    </div>
  );
}
