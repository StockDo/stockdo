import StockDoLogo from "../../assets/imgs/stockdo.svg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-44 pb-12 bg-neutral-900 text-xl text-white font-['Open_Sans']">
      <div className="flex gap-24">
        <div className="flex flex-col items-center">
          <img src={StockDoLogo} alt="" width="300px" />
          <div className="flex self-start ml-4 gap-4">
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github text-white text-2xl"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-white text-2xl"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-twitter text-white text-2xl"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-youtube text-white text-2xl"></i>
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-2xl">Produto</li>
          <li>
            <a className="hover:underline cursor-pointer">Download</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Planos</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Versões</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-2xl">Suporte</li>
          <li>
            <a className="hover:underline cursor-pointer">Central de ajuda</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Fórum</a>
          </li>
          <li>
            <a className="hover:underline cursor-pointer">Contato</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-2xl">Termos de uso</li>
          <li>
            <a onClick={() => navigate("/termos")} className="hover:underline cursor-pointer">Termos</a>
          </li>
          <li>
            <a onClick={() => navigate("/privacidade")} className="hover:underline cursor-pointer">Privacidade</a>
          </li>
          <li>
            <a onClick={() => navigate("/licenca")} className="hover:underline cursor-pointer">Licença de uso</a>
          </li>
          {/* <li>
            <a className="hover:underline cursor-pointer">
              Guia
            </a>
          </li> */}
          <li>
            <a className="hover:underline cursor-pointer">Gerenciamento de cookies</a>
          </li>
        </ul>
      </div>
      <p className="text-2xl mt-24">
        Copyright © 2023 • <span className="font-bold">NoEqual</span>{" "}
        • Termos de uso
      </p>
    </div>
  );
}
