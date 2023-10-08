// import Footer from "../components/Footer/Footer";
import NavbarAdm from "../components/Navbar/NavbarAdm";
import Members from "../components/Members/Members";
import { BsInfoCircleFill, BsFillGearFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router";
import StockDoLogo from "../assets/imgs/stockdo.svg";

export default function ControlPanel() {
  const navigate = useNavigate();
  const [geral, setGeral] = useState(true);
  const [membros, setMembros] = useState(true);
  const [settings, setSettings] = useState(false);
  return (
    <>
      <NavbarAdm />
      <main className="flex">
        <div className="flex items-start pt-24 bg-white fixed top-0 bottom-0 max-h-screen border-r-[1px] border-[rgba(0,0,0,0.14)]">
          <div className="flex flex-col">
            <div className="border-b-[1px] pb-5 border-[rgba(0,0,0,0.14)]">
              <img
                src={StockDoLogo}
                alt="StockDo logo"
                width="150px"
                className="cursor-pointer m-auto"
                onClick={() => navigate("/")}
              />
            </div>
            {/* <button
              onClick={() => {
                setGeral(true);
                setMembros(false);
                setSettings(false);
              }}
              className={`flex items-center gap-2 text-xl font-['Roboto'] font-bold pl-4 pr-24 py-6 border-l-8 x  ${
                geral
                  ? "bg-neutral-100 border-orange-400"
                  : "border-transparent hover:bg-neutral-100 hover:border-neutral-300"
              }`}>
              <BsInfoCircleFill
                className={geral ? "text-orange-400" : "text-neutral-600"}
              />
              Geral
            </button> */}
            <button
              onClick={() => {
                setGeral(false);
                setMembros(true);
                setSettings(false);
              }}
              className={`flex items-center gap-2 text-xl font-['Roboto'] font-bold pl-4 pr-24 py-6 border-l-8 x  ${
                membros
                  ? "bg-neutral-100 border-orange-400"
                  : "border-transparent hover:bg-neutral-100 hover:border-neutral-300"
              }`}>
              <MdGroup
                className={membros ? "text-orange-400" : "text-neutral-600"}
              />
              Gerenciar membros
            </button>
            <button
              onClick={() => {
                setGeral(false);
                setMembros(false);
                setSettings(true);
              }}
              className={`flex items-center gap-2 text-xl font-['Roboto'] font-bold pl-4 pr-24 py-6 border-l-8 x  ${
                settings
                  ? "bg-neutral-100 border-orange-400"
                  : "border-transparent hover:bg-neutral-100 hover:border-neutral-300"
              }`}>
              <BsFillGearFill
                className={settings ? "text-orange-400" : "text-neutral-600"}
              />
              Configurações
            </button>
          </div>
        </div>
        {membros && <Members />}
      </main>
      {/* <Footer /> */}
    </>
  );
}
