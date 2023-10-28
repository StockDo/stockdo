import { useState, useEffect } from "react";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { BsPersonFillAdd } from "react-icons/bs";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import "animate.css";
import axios from "axios";
import LoadingCards from "./LoadingCards";
import "animate.css";

export default function Membros({
  setAddMember,
  setEditMember,
  addMember,
  editMember,
}) {
  const [loadingContent, setLoadingContent] = useState(true);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [sortAZ, setSortAZ] = useState(false);
  const [sortZA, setSortZA] = useState(false);
  const [sortRecent, setSortRecent] = useState(false);
  const [members, setMembers] = useState([
    {
      id: "",
      name: "",
      cpf: "",
      role: "",
      pic: "",
    },
  ]);
  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/membros`,
    data: {
      id_empresa: localStorage.getItem("id_empresa")
    }
  };
  useEffect(() => {
    setLoadingContent(true);
    axios(request)
      .then((e) => {
        console.log(e);
        setMembers(
          e.data
            .map((item) => {
              return {
                id: item.ID_MEMBRO,
                name: item.NM_MEMBRO,
                cpf: item.CPF,
                role: item.CARGO,
                pic: item.FOTO,
              };
            })
            .sort((a, b) =>
              sortAZ
                ? a.name.localeCompare(b.name)
                : sortZA
                ? b.name.localeCompare(a.name)
                : 0
            )
        );
        setLoadingContent(false);
        console.log("sasa");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortAZ, sortZA, addMember, editMember]);

  // const handleAZ = () => {
  //   const azMembers = [
  //     ...members.sort((a, b) => {
  //       if (a.name.toLowerCase() < b.name.toLowerCase()) {
  //         return -1;
  //       }
  //       return 1;
  //     }),
  //   ];
  //   setSortDropdown(false);
  //   setMembers(azMembers);
  // };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-end pt-24 bg-white border-b fixed z-10 w-full">
          <button
            onClick={() => setSortDropdown(!sortDropdown)}
            className="flex justify-center items-center mr-36 mb-10 gap-3 py-1 px-6 border bg-orange-400 font-['Open_Sans'] font-bold text-xl rounded-lg text-white">
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
            <div className="absolute top-36 right-32 bg-white border border-[rgba(0,0,0,0.19)] z-50">
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
        <div
          className={`scroll grid grid-cols-4 bg-white ml-80 gap-28 p-28 mt-28 overflow-y-scroll max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 ${"overflow-hidden"}`}>
          {loadingContent && <LoadingCards />}
          {!loadingContent &&
            members.map((e, index) => (
              <div
                className="flex flex-col items-center justify-center font-['Open_Sans'] text-lg gap-3 bg-white rounded-xl shadow-xl py-12 min-w-[20rem] break-all"
                key={index}>
                <img src={e.pic || ProfilePic} width={"200px"} className="mb-2 border rounded-full w-52 h-52" />
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
