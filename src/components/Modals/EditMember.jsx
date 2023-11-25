import { MdOutlineClose } from "react-icons/md";
import { FaHardHat, FaUserShield } from "react-icons/fa";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import "animate.css";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditMember({ setEditMember }) {
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [funcionario, setFuncionario] = useState(false);
  const [loading, setLoading] = useState();
  const [picture, setPicture] = useState(null);
  const [deleteMember, setDeleteMember] = useState(false);
  const [renderedPicture, setRenderedPicture] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [data, setData] = useState({
    name: "",
    cpf: "",
    email: "",
    tel: "",
    role: "",
    pic: "",
    pass: "",
    confirm_pass: "",
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
          tel: e.data[0].TEL,
          email: e.data[0].EMAIL,
          role: e.data[0].CARGO,
          pic: e.data[0].FOTO,
        });
        setPicture(e.data[0].FOTO);
        setRenderedPicture(e.data[0].FOTO);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInput = (e) => {
    const { name, value } = e.target;
    let formattedInput;
    if (name === "cpf") {
      formattedInput = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .slice(0, 14);
    } else if (name === "tel") {
      formattedInput = value
        .replace(/[a-zA-Z]/, "")
        .replace(/(\d{0})(\d{2})(\d{0})(\d{5})(\d{4})/, "$1($2)$3 $4-$5")
        .slice(0, 15);
    } else if (name === "name" || name === "email") {
      formattedInput = value.slice(0, 80);
    }
    setData({
      ...data,
      [name]: formattedInput,
    });
    setError(false);
  };

  const request_update = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/update_members`,
    data: {
      id_member_edit: localStorage.getItem("id_member_edit"),
      name: data.name,
      cpf: data.cpf,
      tel: data.tel,
      email: data.email,
      role: data.role,
      pic: renderedPicture,
    },
  };

  const request_delete = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/delete_member`,
    data: {
      id_member_edit: localStorage.getItem("id_member_edit"),
    },
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPicture(URL.createObjectURL(file));
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      console.log(base64);
      setRenderedPicture(base64);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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
        closeCard();
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
          closeCard();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const closeCard = () => {
    setEditMember(false);
    document.body.style.overflow = "visible";
  };

  return (
    <main
      onClick={() => {
        closeCard();
      }}
      className="fixed z-50 w-screen min-h-full flex items-center justify-center bg-black bg-opacity-50">
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col items-center mt-12 pt-6 pb-16 px-10 bg-white text-lg font-main rounded-xl animate-zoomIn max-h-[80vh] max-w-[70vw] overflow-y-scroll">
        <span className="ml-auto">
          <MdOutlineClose
            size={40}
            className="text-orange-500 cursor-pointer"
            onClick={() => {
              closeCard();
            }}
          />
        </span>
        <h1 className="font-['PT_Sans'] text-3xl mb-5 underline">
          Editar membro
        </h1>
        {error && (
          <span className="text-red-500">Preencha todos os campos</span>
        )}
        <div className="flex flex-col">
          <label
            htmlFor="img_upload"
            className="my-5 border rounded-full self-center">
            <img
              src={picture || ProfilePic}
              className={`m-auto nt-12 border w-36 h-36 rounded-full border-black cursor-pointer hover:brightness-[0.85] ${
                picture === null && "hover:brightness-[2.5]"
              }`}
            />
          </label>
          <input
            onChange={handleImageUpload}
            type="file"
            id="img_upload"
            className="hidden"
          />
          <div className="grid grid-cols-2 gap-4">
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
            </div>
            <div className="flex flex-col">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                value={data.cpf}
                onChange={userInput}
                id="cpf"
                name="cpf"
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                value={data.email}
                onChange={userInput}
                id="email"
                name="email"
                className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 w-96 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tel">Telefone:</label>
              <input
                type="text"
                value={data.tel}
                onChange={userInput}
                id="tel"
                name="tel"
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md"
              />
            </div>
          </div>
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
                confirmDelete
                  ? "opacity-100"
                  : deleteMember && "opacity-50 cursor-not-allowed"
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
                height={"5%"}
                width={"5%"}
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
