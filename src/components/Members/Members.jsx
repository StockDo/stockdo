import { useState } from "react";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { BsPersonFillAdd } from "react-icons/bs";
import "animate.css";

export default function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Renan Almeida",
      role: "Administrador",
      cpf: "404.580.638-40",
    },
    {
      id: 2,
      name: "Davi Pimentel",
      role: "Administrador",
      cpf: "404.580.638-40",
    },
    {
      id: 3,
      name: "Nícolas Lopes",
      role: "Administrador",
      cpf: "404.580.638-40",
    },
  ]);
  return (
    <>
      <div className="scroll grid grid-cols-4 bg-white gap-12 px-12 w-full ml-80 min-h-screen py-32 overflow-y-scroll max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
        {members.map((e) => (
          <div
            className="flex flex-col items-center font-['Open_Sans'] text-lg gap-3 bg-white p-10 rounded-xl shadow-xl max-h-[30rem] animate__animated animate__bounceIn "
            key={e.id}>
            <img src={ProfilePic} width={"200px"} className="mb-2 border" />
            <h1 className="text-2xl font-bold font-sans text-center">{e.name}</h1>
            <p>
              <span className="font-bold">CPF:</span> {e.cpf}
            </p>
            <p>
              <span className="font-bold">Cargo:</span>{" "}
              <span className="text-red-600">{e.role}</span>
            </p>
            <button className="bg-slate-500 text-white text-xl py-2 px-12 rounded-xl font-bold mt-3">
              Editar
            </button>
          </div>
        ))}
        <div className="flex justify-center items-center min-h-[27rem] max-h-[27rem]">
          <BsPersonFillAdd
            size={130}
            className="text-slate-600 cursor-pointer"
            onClick={() => setMembers([...members, 1])}
          />
        </div>
      </div>
    </>
  );
}
