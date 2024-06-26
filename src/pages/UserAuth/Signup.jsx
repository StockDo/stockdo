import { useNavigate, useLocation } from "react-router-dom";
import SignupBackground from "../../assets/imgs/StockDoBgs/signup-bg.png";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "animate.css";
import validarCNPJ from "../../utils/cnpj_validation.js";
import validarCPF from "../../utils/cpf_validation";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  const [formData, setFormData] = useState({
    cpf: "",
    email: "",
    password: "",
    password_repeat: "",
  });

  const [validatedFields, setValidatedFields] = useState({
    cpf: true,
    email: true,
    password: true,
    password_repeat: true,
  });

  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/check_users`,
    data: {
      cpf: formData.cpf,
      email: formData.email,
    },
  };

  const [error, setError] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userInput = (e) => {
    const { name, value } = e.target;

    let formattedInput = value;

    if (name === "cpf") {
      formattedInput = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .slice(0, 14);
    } else if (name === "email") {
      formattedInput = value.slice(0, 80);
    } else if (name === "password" || name === "password_repeat") {
      formattedInput = value.slice(0, 255);
    }

    setValidatedFields({
      ...validatedFields,
      [name]: true,
    });

    setFormData({
      ...formData,
      [name]: formattedInput,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_KEY);
    let isValid = true;
    if (validarCPF(formData.cpf) === false) {
      setValidatedFields({
        ...validatedFields,
        cpf: false,
      });
      isValid = false;
    } else if (!/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(formData.email)) {
      setValidatedFields({
        ...validatedFields,
        email: false,
      });
      isValid = false;
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(
        formData.password
      )
    ) {
      setValidatedFields({
        ...validatedFields,
        password: false,
      });
      isValid = false;
    } else if (formData.password !== formData.password_repeat) {
      setValidatedFields({
        ...validatedFields,
        password_repeat: false,
      });
      isValid = false;
    }

    if (isValid != false) {
      axios(request)
        .then((e) => {
          console.log(e);
          navigate("/verification", {
            state: {
              cpf: formData.cpf,
              email: formData.email,
              password: formData.password,
            },
          });
        })
        .catch((res) => {
          console.log(res);
          setError(true);
          setErrorMessage(res.response.data.message);
        });
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center bg-slate-100">
        <div className="bg-orange-400 flex items-center shadow-xl rounded-xl mx-5 my-28">
          <div className="px-8 max-lg:hidden">
            <img
              src={SignupBackground}
              width="500px"
              alt="Warehouse background"
            />
          </div>
          <div className="flex flex-col p-12 max-h-[85vh] overflow-y-scroll bg-white rounded-e-xl max-lg:rounded-xl">
            <img
              src={StockDoLogo}
              alt="StockDo logo"
              width="150px"
              className="cursor-pointer m-auto "
              onClick={() => navigate("/")}
            />
            <h1 className="text-xl font-['PT_Sans'] m-auto">
              Cadastre uma conta
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-5 font-main"
              autoComplete="on"
            >
              {error && (
                <span className="text-white font-bold bg-red-700 px-2 py-2 mb-2">
                  {errorMessage}
                </span>
              )}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className={`relative -m-2 self-end top-[14.5rem] mr-2  text-orange-600`}
              >
                {showPass ? <BsEyeSlash /> : <BsEye />}
              </button>
              <label
                htmlFor="cpf"
                className={` ${
                  validatedFields.cpf === false &&
                  "animate__animated animate__shakeX text-red-600 "
                }`}
              >
                {validatedFields.cpf === false
                  ? formData.cpf === ""
                    ? "Preencha este campo"
                    : "CPF inválido"
                  : "CPF"}
              </label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                value={formData.cpf}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-44 py-2 rounded-md   ${
                  validatedFields.cpf === false
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : "focus:border-orange-400"
                } `}
              />

              <label
                htmlFor="email"
                className={` ${
                  validatedFields.email === false &&
                  "animate__animated animate__shakeX text-red-600 "
                }`}
              >
                {validatedFields.email === false
                  ? formData.email === ""
                    ? "Preencha este campo"
                    : "Email inválido"
                  : "Email"}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md   ${
                  validatedFields.email === false
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : "focus:border-orange-400"
                } `}
              />

              <label
                htmlFor="password"
                className={` ${
                  validatedFields.password === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.password === false && formData.password === ""
                  ? "Preencha este campo"
                  : "Senha"}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md   ${
                  validatedFields.password === false
                    ? "border-red-600 animate__animated animate__shakeX"
                    : "focus:border-orange-400"
                } `}
              />

              <label
                htmlFor="password_repeat"
                className={` ${
                  validatedFields.password_repeat === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.password_repeat === false
                  ? formData.password_repeat === ""
                    ? "Preencha este campo"
                    : "As senhas não se coincidem"
                  : "Repita a senha"}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password_repeat"
                id="password_repeat"
                value={formData.password_repeat}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md   ${
                  validatedFields.password_repeat === false
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : "focus:border-orange-400"
                } `}
              />
              <ul
                className={`text-sm ${
                  validatedFields.password === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                <li className="font-bold text-black">
                  A senha deve conter pelo menos:
                </li>
                <li
                  className={formData.password.length >= 8 && "text-green-800"}
                >
                  Mínimo de 8{" "}
                  {formData.password.length >= 8 && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={/\d/.test(formData.password) && "text-green-800"}
                >
                  Um número
                  {/\d/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={
                    /[A-Z]/.test(formData.password) && "text-green-800"
                  }
                >
                  Uma letra maiúscula
                  {/[A-Z]/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={
                    /[a-z]/.test(formData.password) && "text-green-800"
                  }
                >
                  Uma letra minúscula
                  {/[a-z]/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
              </ul>
              <button
                type="submit"
                className="bg-orange-400 mt-7 py-2 rounded-lg font-bold  duration-200 hover:bg-orange-500"
              >
                Cadastrar
              </button>
              <span className="m-auto mt-4">
                Já possui uma conta?{" "}
                <span
                  onClick={() => navigate("/login", { state: true })}
                  className="text-orange-700 hover:underline cursor-pointer"
                >
                  Entre aqui.
                </span>
              </span>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
