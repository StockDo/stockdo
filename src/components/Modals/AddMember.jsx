import { MdOutlineClose } from "react-icons/md";
import ProfilePic from "../../assets/imgs/Members/pfp.jpg";
import { FaHardHat, FaUserShield } from "react-icons/fa";
import "animate.css";
import ReactLoading from "react-loading";
import { useState } from "react";
import axios from "axios";

export default function AddMember({ setAddMember }) {
  const [error, setError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [funcionario, setFuncionario] = useState("");
  const [picture, setPicture] = useState(null);
  const [renderedPicture, setRenderedPicture] = useState(null);
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
    url: `${import.meta.env.VITE_URL}/add_membros`,
    data: {
      id_empresa: localStorage.getItem("id_empresa"),
      id: data.id,
      name: data.name,
      email: data.email,
      tel: data.tel,
      cpf: data.cpf,
      role: data.role,
      pic: renderedPicture,
      pass: data.pass,
    },
  };

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
    } else if (
      name === "name" ||
      name === "email" ||
      name === "pass" ||
      name === "confirm_pass"
    ) {
      formattedInput = value.slice(0, 80);
    }
    setData({
      ...data,
      [name]: formattedInput,
    });
    setError(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (data.cpf === undefined || data.name === "" || data.role === "") {
      setError(true);
      return;
    }
    setLoading(true);
    axios(request)
      .then(() => {
        setAddMember(false);
        document.body.style.overflow = "visible";
        // setMembers([...members, data]);
      })
      .catch((err) => {
        setImageError(true);
      })
      .finally(() => {
        setLoading(false);
      });
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

  return (
    <main className="fixed z-50 w-screen min-h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="flex flex-col items-center pt-3 pb-6 px-10 bg-white text-xl font-['Open_Sans'] rounded-xl mt-14 animate-zoomIn">
        <MdOutlineClose
          size={40}
          className="ml-auto text-orange-500 cursor-pointer"
          onClick={() => {
            setAddMember(false);
            document.body.style.overflow = "visible";
          }}
        />
        <h1 className="font-['PT_Sans'] text-3xl underline">
          Adicionar membro
        </h1>
        {error && (
          <span className="text-red-500">Preencha todos os campos</span>
        )}
        {imageError && (
          <span className="text-red-500">Imagem muito grande</span>
        )}
        <div className="flex flex-col">
          <label
            htmlFor="img_upload"
            className="my-5 border rounded-full self-center">
            <img
              src={picture || ProfilePic}
              className={`m-auto nt-12 border w-36 h-36 rounded-full border-black cursor-pointer ${
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
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                value={data.name}
                onChange={userInput}
                id="name"
                name="name"
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 w-96 py-2 rounded-md"
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
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md"
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
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 w-96 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pass">Senha de acesso:</label>
              <input
                type="password"
                value={data.pass}
                onChange={userInput}
                id="pass"
                name="pass"
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm_pass">Confirmar senha de acesso:</label>
              <input
                type="password"
                value={data.confirm_pass}
                onChange={userInput}
                id="confirm_pass"
                name="confirm_pass"
                className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 w-96 py-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 py-8">
            <h1 className="-mb-3">Cargo do membro:</h1>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setError(false);
                  setAdmin(true);
                  setFuncionario(false);
                  setData({ ...data, role: "Funcionário" });
                }}
                className={`flex flex-col items-center border-2 w-64 rounded-lg p-2 ${
                  admin
                    ? "text-orange-400 border-orange-400"
                    : "text-neutral-300"
                }`}>
                <FaHardHat size={50} />
                <span className="text-lg">Funcionário</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setError(false);
                  setAdmin(false);
                  setFuncionario(true);
                  setData({ ...data, role: "Administrador" });
                }}
                className={`flex flex-col items-center border-2 w-64 rounded-lg p-2 ${
                  funcionario
                    ? "text-orange-400 border-orange-400"
                    : "text-neutral-300"
                }`}>
                <FaUserShield size={50} />
                <span className="text-lg">Administrador</span>
              </button>
            </div>
          </div>

          <button
            onClick={(e) => {
              handleAdd(e);
            }}
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
              "Adicionar"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
