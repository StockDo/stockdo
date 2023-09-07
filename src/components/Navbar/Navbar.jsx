import { useNavigate } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/stockdo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-neutral-900 p-4 font-['Barlow'] fixed w-full z-50">
      <img src={StockDoLogo} alt="StockDo logo" width={"150px"} />
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
          <a onClick={() => navigate("/signup")} className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Cadastre-se
          </a>
        </li>
      </ul>
    </div>
  );
}
