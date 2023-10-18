import { MdOutlineClose } from "react-icons/md";
import { FaHardHat, FaUserShield } from "react-icons/fa";
import "animate.css";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditMember({ setEditMember }) {
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [funcionario, setFuncionario] = useState(false);
  const [loading, setLoading] = useState();
  const [deleteMember, setDeleteMember] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [data, setData] = useState({
    name: "",
    cpf: "",
    role: "",
  });

  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/update_member_data`,
    data: {
      id_member_edit: localStorage.getItem("id_member_edit"),
    },
  };

  useEffect(() => {
    axios(request)
      .then((e) => {
        console.log();
        setData({
          name: e.data[0].NM_MEMBRO,
          cpf: e.data[0].CPF,
          role: e.data[0].CARGO,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInput = (e) => {
    const { name, value } = e.target;
    let formatCpf;
    if (name === "cpf") {
      formatCpf = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .slice(0, 14);
      setData({
        ...data,
        [name]: value.slice(0, 80),
        cpf: formatCpf,
      });
    } else {
      setData({
        ...data,
        [name]: value.slice(0, 80),
      });
    }

    setError(false);
  };

  const request_update = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/update_members`,
    data: {
      id_member_edit: localStorage.getItem("id_member_edit"),
      name: data.name,
      cpf: data.cpf,
      role: data.role,
    },
  };

  const request_delete = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/delete_member`,
    data: {
      id_member_edit: localStorage.getItem("id_member_edit"),
    },
  };

  const handleEdit = (e) => {
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
    setLoading(true);
    console.log(data);
    axios(request_update)
      .then(() => {
        setEditMember(false);
        document.body.style.overflow = "visible";
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setDeleteMember(true);
    if (deleteMember && confirmDelete) {
      axios(request_delete)
        .then(() => {
          setEditMember(false);
          document.body.style.overflow = "visible";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // console.log(members);
    // console.log(
    //   members.filter(
    //     (element) => element.id != localStorage.getItem("id_member_edit")
    //   )
    // );
    // setMembers(
    //   members.filter(
    //     (element) => element.id != localStorage.getItem("id_member_edit")
    //   )
    // );
    // setEditMember(false);
    // document.body.style.overflow = "visible";
    // console.log(members);
    // console.log(data);
  };
  return (
    <main className="fixed z-50 w-screen min-h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="flex flex-col items-center pt-5 pb-16 px-10 bg-white text-xl font-['Open_Sans'] rounded-md animate__animated animate__zoomIn">
        <MdOutlineClose
          size={40}
          className="ml-auto text-orange-500 cursor-pointer"
          onClick={() => {
            setEditMember(false);
            document.body.style.overflow = "visible";
          }}
        />
        <h1 className="font-['PT_Sans'] text-3xl mb-5 underline">
          Editar membro
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
                setError(false);
                setAdmin(false);
                setFuncionario(true);
                setData({ ...data, role: "Funcionário" });
              }}
              className={`flex flex-col items-center border-2 rounded-lg p-2 ${
                funcionario
                  ? "text-orange-400 border-orange-400"
                  : "text-neutral-300"
              } ${
                data.role === "Funcionário" &&
                "text-orange-400 border-orange-400"
              }`}>
              <FaHardHat size={50} />
              <span className="text-lg">Funcionário</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setError(false);
                setAdmin(true);
                setFuncionario(false);
                setData({ ...data, role: "Administrador" });
              }}
              className={`flex flex-col items-center border-2 rounded-lg p-2 ${
                admin ? "text-orange-400 border-orange-400" : "text-neutral-300"
              } ${
                data.role === "Administrador" &&
                "text-orange-400 border-orange-400"
              }`}>
              <FaUserShield size={50} />
              <span className="text-lg">Administrador</span>
            </button>
            <button
              onClick={handleDelete}
              className={`px-5 py-2 mt-3 text-center bg-red-600 text-white ${
                confirmDelete ? "opacity-100" : deleteMember && "opacity-50"
              } rounded-md`}>
              Deletar membro
            </button>
            {deleteMember && (
              <div className="flex items-center gap-2">
                <label className="text-base text-red-800">
                  Deseja realmente deletar esse membro?
                </label>
                <input
                  onClick={() => setConfirmDelete(!confirmDelete)}
                  type="checkbox"
                  className="accent-red-700 w-5 h-5 cursor-pointer"
                />
              </div>
            )}
          </div>
          <button
            onClick={handleEdit}
            className="px-5 py-2 text-center bg-orange-400 rounded-md">
            {loading ? (
              <ReactLoading
                type="bars"
                color="#523c08"
                height={"10%"}
                width={"10%"}
                className="m-auto"
              />
            ) : (
              "Atualizar"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
