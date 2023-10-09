import { MdOutlineClose } from "react-icons/md";
import { GrUserWorker, GrUserAdmin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { FaHardHat, FaUserShield } from "react-icons/fa";
import "animate.css";
import { useState } from "react";

export default function AddMember({ members, setMembers, setAddMember }) {
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [funcionario, setFuncionario] = useState(false);
  const [data, setData] = useState({
    name: "",
    cpf: "",
    role: "",
  });

  const userInput = (e) => {
    const { name, value } = e.target;
    let formatCpf;
    if (name === "cpf") {
      formatCpf = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .slice(0, 14);
    }
    setData({
      ...data,
      [name]: value.slice(0, 80),
      cpf: formatCpf,
    });
    setError(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (data.cpf === undefined) {
      setError(true);
      return;
    }
    if (data.name === "") {
      setError(true);
      return;
    }
    if (data.role === "") {
      setError(true);
      return;
    }
    console.log(data);
    setMembers([...members, data]);
    setAddMember(false);
    document.body.style.overflow = "visible";
  };
  return (
    <main className="fixed z-50 w-screen min-h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="flex flex-col items-center pt-5 pb-16 px-10 bg-white text-xl font-['Open_Sans'] rounded-md animate__animated animate__zoomIn">
        <MdOutlineClose
          size={40}
          className="ml-auto text-orange-500 cursor-pointer"
          onClick={() => {
            setAddMember(false);
            document.body.style.overflow = "visible";
          }}
        />
        <h1 className="font-['PT_Sans'] text-3xl mb-5 underline">
          Adicionar membro
        </h1>
        {error && (
          <span className="text-red-500">Preencha todos os campos</span>
        )}
        <div className="flex flex-col">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            value={data.name}
            onChange={userInput}
            id="name"
            name="name"
            className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 w-96 py-2 rounded-md"
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            value={data.cpf}
            onChange={userInput}
            id="cpf"
            name="cpf"
            className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md"
          />
          <div className="flex flex-col justify-center gap-5 py-10">
            <h1 className="-mb-3">Cargo do membro:</h1>
            <button
              type="button"
              onClick={() => {
                setError(false)
                setAdmin(true);
                setFuncionario(false);
                setData({ ...data, role: "Funcionário" });
              }}
              className={`flex flex-col items-center border-2 rounded-lg p-2 ${
                admin ? "text-orange-400 border-orange-400" : "text-neutral-300"
              }`}>
              <FaHardHat size={50} />
              <span className="text-lg">Funcionário</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setError(false)
                setAdmin(false);
                setFuncionario(true);
                setData({ ...data, role: "Administrador" });
              }}
              className={`flex flex-col items-center border-2 rounded-lg p-2 ${
                funcionario
                  ? "text-orange-400 border-orange-400"
                  : "text-neutral-300"
              }`}>
              <FaUserShield size={50} />
              <span className="text-lg">Administrador</span>
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="px-5 py-2 text-center bg-orange-400 rounded-md">
            Adicionar membro
          </button>
        </div>
      </form>
    </main>
  );
}
