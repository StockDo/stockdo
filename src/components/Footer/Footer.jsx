import StockDoLogo from "../../assets/imgs/stockdo.svg";

export default function Footer() {
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
        <ul className="flex flex-col gap-3">
          <li className="font-semibold">Produto</li>
          <li>
            <a href="" className="hover:underline">
              Download
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Planos
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Versões
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-semibold">Suporte</li>
          <li>
            <a href="" className="hover:underline">
              Central de ajuda
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Fórum
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Contato
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-semibold">Termos de uso</li>
          <li>
            <a href="" className="hover:underline">
              Termos
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Privacidade
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Licença de uso
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Guia
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Configurações de cookies
            </a>
          </li>
        </ul>
      </div>
      <p className="text-2xl mt-24">
        Copyright © 2023 • <span className="font-bold">NoEqual Solutions</span>{" "}
        • Termos de uso
      </p>
    </div>
  );
}
