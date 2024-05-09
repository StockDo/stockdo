import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pb-12  text-white pt-44 bg-neutral-900 font-main">
      <div className="flex flex-wrap justify-center gap-24">
        <div className="flex flex-col items-center">
          <img src={StockDoLogo} alt="" width="300px" />
          <div className="flex self-start gap-4 ml-4">
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" text-white fa-brands fa-github"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" text-white fa-brands fa-linkedin"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" text-white fa-brands fa-twitter"></i>
            </a>
            <a
              href="http://github.com/StockDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" text-white fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="flex gap-12 max-sm:flex-col">
          <ul className="flex flex-col gap-5">
            <li className=" font-semibold">Produto</li>
            <li>
              <a className="cursor-pointer hover:underline">Download</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Planos</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Versões</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className=" font-semibold">Suporte</li>
            <li>
              <a className="cursor-pointer hover:underline">Central de ajuda</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Fórum</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Contato</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className=" font-semibold">Termos de uso</li>
            <li>
              <a
                onClick={() => navigate("/termos")}
                className="cursor-pointer hover:underline"
              >
                Termos
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/privacidade")}
                className="cursor-pointer hover:underline"
              >
                Privacidade
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/licenca")}
                className="cursor-pointer hover:underline"
              >
                Licença de uso
              </a>
            </li>
            {/* <li>
            <a className="cursor-pointer hover:underline">
              Guia
            </a>
          </li> */}
            <li>
              <a className="cursor-pointer hover:underline">
                Gerenciamento de cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-2 mt-24  text-center">
        Copyright © 2023 • <span className="font-bold">NoEqual</span> • Termos
        de uso
      </p>
    </div>
  );
}
