import { BsPersonFillAdd } from "react-icons/bs";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

export default function Options({
  setAddMember,
  setSortZA,
  setSortAZ,
  setSortRecent,
  sortRecent,
  sortAZ,
  sortZA,
  members,
  setMembers,
}) {
  const [sortDropdown, setSortDropdown] = useState(false);
  return (
    <>
      <div className="flex justify-start pt-24 gap-6 bg-white border-b fixed z-10 w-full">
        <button
          onClick={() => {
            setAddMember(true);
            document.body.style.overflow = "hidden";
          }}
          className="flex justify-center items-center mb-10 ml-[22.5%] gap-3 py-1 px-6 border border-slate-400 font-main font-bold text-xl rounded-lg text-slate-400 hover:bg-slate-50">
          <BsPersonFillAdd size={25} />
          Adicionar membro
        </button>
        <div>
          <button
            onClick={() => setSortDropdown(!sortDropdown)}
            className="flex justify-center items-center mb-10 gap-3 py-1 px-6 border border-orange-400 font-main font-bold text-xl rounded-lg text-orange-400 hover:bg-[#fffdfa]">
            <PiArrowsDownUpBold size={30} />
            Ordenar por
            <AiFillCaretDown
              size={25}
              className={`duration-300 transition-all ${
                sortDropdown && "rotate-180"
              }`}
            />
          </button>
          {sortDropdown && (
            <div className="absolute top-[80%] bg-white border border-[rgba(0,0,0,0.19)] z-50">
              <div className="flex flex-col items-start text-xl min-w-[16rem]">
                <button
                  onClick={() => {
                    setSortAZ(true);
                    setSortZA(false);
                    setSortRecent(false);
                    setSortDropdown(false);
                  }}
                  className={`flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100 ${
                    sortAZ && "bg-orange-100"
                  }`}>
                  <span>A-Z</span>
                </button>
                <button
                  onClick={() => {
                    setSortZA(true);
                    setSortAZ(false);
                    setSortRecent(false);
                    setSortDropdown(false);
                  }}
                  className={`flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100 ${
                    sortZA && "bg-orange-100"
                  }`}>
                  <span>Z-A</span>
                </button>
                <button
                  onClick={() => {
                    setSortRecent(true);
                    setMembers(members.reverse());
                    setSortAZ(false);
                    setSortZA(false);
                    setSortDropdown(false);
                  }}
                  className={`flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100 ${
                    sortRecent && "bg-orange-100"
                  }`}>
                  <span>Mais recentes primeiros</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
