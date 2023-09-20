import { useNavigate } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/stockdo.svg";

export default function Navbar() {
  const navigate = useNavigate();
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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Planos</a>
        </li>
        <li>
          <a href="">O Software</a>
        </li>
        <li>
          <a
            onClick={() => navigate("/signup")}
            className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Entrar<i className="fa-solid fa-right-to-bracket ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
