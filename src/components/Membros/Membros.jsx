import { useState, useEffect } from "react";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { BsPersonFillAdd } from "react-icons/bs";
import "animate.css";
import axios from "axios";
import LoadingCards from "./LoadingCards";

export default function Membros({
  members,
  setMembers,
  setAddMember,
  setEditMember,
}) {
  const [loadingContent, setLoadingContent] = useState(true);
  const request = {
    method: "GET",
    url: "/membros",
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [members]);
  return (
    <>
      <div
        className={`scroll grid grid-cols-4 bg-white gap-12 px-12 w-full ml-80 min-h-screen py-32 overflow-y-scroll max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 ${"overflow-hidden"}`}>
        {loadingContent && <LoadingCards />}
        {!loadingContent &&
          members.map((e, index) => (
            <div
              className="flex flex-col items-center font-['Open_Sans'] text-lg gap-3 bg-white p-10 rounded-xl shadow-xl"
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
    </>
  );
}
