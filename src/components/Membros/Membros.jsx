import { useState, useEffect } from "react";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { BsPersonFillAdd } from "react-icons/bs";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import "animate.css";
import axios from "axios";
import LoadingCards from "./LoadingCards";
import "animate.css";

export default function Membros({ setAddMember, setEditMember }) {
  const [loadingContent, setLoadingContent] = useState(true);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [sort, setSort] = useState(false);
  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      role: "",
      cpf: "",
    },
  ]);
  const request = {
    method: "GET",
    url: `${import.meta.env.VITE_URL}/membros`,
  };
  useEffect(() => {
    axios(request)
      .then((e) => {
        setMembers(
          e.data.map((item) => {
            return {
              id: item.ID_MEMBRO,
              name: item.NM_MEMBRO,
              role: item.CARGO,
              cpf: item.CPF,
            };
          })
        );
        setLoadingContent(false);
        console.log("sasa");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [members]);

  const handleAZ = () => {
    const azMembers = [
      ...members.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        return 1;
      }),
    ];

    setSortDropdown(false);
    setMembers(azMembers);
  };

  return (
    <>
      <div className="flex flex-col items-end ml-80 mt-24 min-h-screen">
        <button
          onClick={() => setSortDropdown(!sortDropdown)}
          className="flex justify-center items-center mr-36 mb-10 gap-3 py-2 px-6 border bg-orange-400 font-['Open_Sans'] font-bold text-xl rounded-lg text-white">
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
          <div className="absolute top-36 right-24 bg-white border border-[rgba(0,0,0,0.19)] z-50">
            <div className="flex flex-col items-start text-xl min-w-[16rem]">
              <button
                onClick={handleAZ}
                className={`flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100 ${
                  sort && "bg-orange-300"
                }`}>
                <span>A-Z</span>
              </button>
              <button className="flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100">
                <span>Z-A</span>
              </button>
              <button className="flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100">
                <span>Mais recentes primeiros</span>
              </button>
              <button className="flex justify-start px-3 py-4 w-full border-b hover:bg-orange-100">
                <span>Últimos adicionados primeiros</span>
              </button>
            </div>
          </div>
        )}
        <div
          className={`scroll border-t grid grid-cols-4 bg-white gap-12 pl-28 pr-24 w-full overflow-y-scroll max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 ${"overflow-hidden"}`}>
          {loadingContent && <LoadingCards />}
          {!loadingContent &&
            members.map((e, index) => (
              <div
                className="flex flex-col items-center justify-center font-['Open_Sans'] text-lg gap-3 bg-white rounded-xl shadow-xl py-8 px-4 min-h-[30rem] break-all"
                key={index}>
                <img src={ProfilePic} width={"200px"} className="mb-2 border" />
                <h1 className="text-2xl font-bold font-sans text-center">
                  {e.name}
                </h1>
                <p>
                  <span className="font-bold">CPF:</span> {e.cpf}
                </p>
                <p>
                  <span className="font-bold">Cargo:</span>{" "}
                  <span
                    className={
                      e.role === "Administrador"
                        ? "text-red-600"
                        : "text-orange-600"
                    }>
                    {e.role}
                  </span>
                </p>
                <button
                  onClick={() => {
                    localStorage.setItem("id_member_edit", e.id);
                    setEditMember(true);
                    document.body.style.overflow = "hidden";
                  }}
                  className="bg-slate-500 text-white text-xl py-2 px-12 rounded-xl font-bold mt-3">
                  Editar
                </button>
              </div>
            ))}
          {!loadingContent && (
            <div className="flex justify-center items-center min-h-[27rem] max-h-[27rem]">
              <BsPersonFillAdd
                size={130}
                className="text-slate-600 cursor-pointer"
                onClick={() => {
                  setAddMember(true);
                  document.body.style.overflow = "hidden";
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
