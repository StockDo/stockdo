import { BsGrid1X2Fill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { useNavigate, useLocation } from "react-router";

export default function PanelNavbar({
  membros,
  setMembros,
  maps,
  setMaps,
  setMap,
  map,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-start pt-24 w-84 bg-white fixed z-40 top-0 bottom-0 border-r-[1px] border-[rgba(0,0,0,0.14)]">
        <div className="flex flex-col">
          <div className="border-b-[1px] pb-[1.93rem] border-[rgba(0,0,0,0.14)]">
            <img
              src={StockDoLogo}
              alt="StockDo logo"
              width="150px"
              className="cursor-pointer m-auto"
              onClick={() => navigate("/")}
            />
          </div>
          <button
            onClick={() => {
              setMembros(true);
              setMaps(false);
              setMap(false);
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
              setMembros(false);
              setMaps(true);
              setMap(false);
            }}
            className={`flex items-center gap-2 text-xl font-['Roboto'] font-bold pl-4 pr-24 py-6 border-l-8 x  ${
              maps || map
                ? "bg-neutral-100 border-orange-400"
                : "border-transparent hover:bg-neutral-100 hover:border-neutral-300"
            }`}>
            <BsGrid1X2Fill
              size={18}
              className={maps || map ? "text-orange-400" : "text-neutral-600"}
            />
            Mapas
          </button>
        </div>
      </div>
    </>
  );
}
