import { useState, useEffect } from "react";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { BsPersonFillAdd } from "react-icons/bs";
import "animate.css";
import axios from "axios";
import LoadingCards from "./LoadingCards";
import "animate.css";
import Options from "../Navbar/Options";

export default function Membros({
  setAddMember,
  setEditMember,
  addMember,
  editMember,
}) {
  const [loadingContent, setLoadingContent] = useState(true);
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
      id_empresa: localStorage.getItem("id_empresa"),
    },
  };
  useEffect(() => {
    setLoadingContent(true);
    axios(request)
      .then((e) => {
        console.log(e);
        const getMembers = e.data.map((item) => ({
          id: item.ID_MEMBRO,
          name: item.NM_MEMBRO,
          cpf: item.CPF,
          role: item.CARGO,
          pic: item.FOTO,
        }));
        sortRecent
          ? getMembers.reverse()
          : getMembers.sort((a, b) =>
              sortAZ
                ? a.name.localeCompare(b.name)
                : sortZA
                ? b.name.localeCompare(a.name)
                : 0
            );
        setMembers(getMembers);
        setLoadingContent(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortAZ, sortZA, sortRecent, addMember, editMember]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Options
          setAddMember={setAddMember}
          setSortAZ={setSortAZ}
          setSortZA={setSortZA}
          sortAZ={sortAZ}
          sortZA={sortZA}
          setSortRecent={setSortRecent}
          sortRecent={sortRecent}
          setMembers={setMembers}
          members={members}
        />
        <div
          className={`scroll grid grid-cols-3 bg-white ml-96 pr-12 pb-24 mt-44 overflow-y-scroll max-2xl:grid-cols-2 max-xl:grid-cols-1 ${loadingContent && "gap-x-52 gap-y-24 mt-48 ml-[35rem]"}`}>
          {loadingContent && <LoadingCards />}
          {!loadingContent &&
            members.map((e, index) => (
              <div
                className="flex flex-col items-center justify-center font-['Open_Sans'] text-lg gap-3 bg-white rounded-xl shadow-xl py-12 px-6 m-12 max-w-[40vh] max-xl:max-w-[80vh] break-all"
                key={index}>
                <img
                  src={e.pic || ProfilePic}
                  className="mb-2 border rounded-full shadow-xl w-52 h-52"
                />
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
            <div className="flex justify-center items-center w-[30rem]">
              <BsPersonFillAdd
                size={130}
                className="text-orange-400 cursor-pointer"
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
