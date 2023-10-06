import { useNavigate } from "react-router-dom";
import SignupBackground from "../../assets/imgs/signup-bg.png";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "animate.css";
import validarCNPJ from "../../utils/cnpj_validation.js";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cnpj: "",
    email: "",
    password: "",
    password_repeat: "",
  });

  const [validatedFields, setValidatedFields] = useState({
    cnpj: true,
    email: true,
    password: true,
    password_repeat: true,
  });

  const request = {
    method: "POST",
    url: `/signup`,
    data: {
      cnpj: formData.cnpj,
      email: formData.email,
      password: formData.password,
    },
  };

  const [error, setError] = useState(false);

  const userInput = (e) => {
    const { name, value } = e.target;

    let formattedInput = value;

    if (name === "cnpj") {
      formattedInput = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        .slice(0, 18);
    } else if (name === "email") {
      formattedInput = value.slice(0, 80);
    } else if (name === "password") {
      formattedInput = value.slice(0, 255);
    } else if (name === "password_repeat") {
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
    if (validarCNPJ(formData.cnpj) === false) {
      setValidatedFields({
        ...validatedFields,
        cnpj: false,
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
        .then(() => {
          navigate("/verification");
        })
        .catch(({ response }) => {
          console.log(response);
          setError(true);
        });
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center min-h-screen bg-slate-100">
        <div className="bg-slate-400 flex items-center shadow-xl rounded-xl mx-5 my-32">
          <div className="px-8 max-lg:hidden">
            <img
              src={SignupBackground}
              width="500px"
              alt="Warehouse background"
            />
          </div>
          <div className="flex flex-col p-12 bg-white rounded-e-xl max-lg:rounded-xl">
            <img
              src={StockDoLogo}
              alt="StockDo logo"
              width="150px"
              className="cursor-pointer m-auto mb-2"
              onClick={() => navigate("/")}
            />
            <h1 className="text-3xl font-['PT_Sans'] m-auto">
              Cadastre uma conta
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-5 font-['Open_Sans']"
              autoComplete="on">
              {error && (
                <span className="text-white font-bold bg-red-700 px-2 py-2 mb-2">
                  CNPJ ou email já cadastrados
                </span>
              )}
              <label
                htmlFor="cnpj"
                className={` ${
                  validatedFields.cnpj === false &&
                  "animate__animated animate__shakeX text-red-600 "
                }`}>
                {validatedFields.cnpj === false
                  ? formData.cnpj === ""
                    ? "Preencha este campo"
                    : "CNPJ inválido"
                  : "CNPJ"}
              </label>
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                value={formData.cnpj}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-44 py-2 rounded-md outline-none  ${
                  validatedFields.cnpj === false
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : "focus:border-orange-400"
                } `}
              />

              <label
                htmlFor="email"
                className={` ${
                  validatedFields.email === false &&
                  "animate__animated animate__shakeX text-red-600 "
                }`}>
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
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none  ${
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
                }`}>
                {validatedFields.password === false && formData.password === ""
                  ? "Preencha este campo"
                  : "Senha"}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none  ${
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
                }`}>
                {validatedFields.password_repeat === false
                  ? formData.password_repeat === ""
                    ? "Preencha este campo"
                    : "As senhas não se coincidem"
                  : "Repita a senha"}
              </label>
              <input
                type="password"
                name="password_repeat"
                id="password_repeat"
                value={formData.password_repeat}
                onChange={(e) => {
                  userInput(e);
                  setError(false);
                }}
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none  ${
                  validatedFields.password_repeat === false
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : "focus:border-orange-400"
                } `}
              />
              {/* <ul
                className={`text-sm ${
                  validatedFields.password === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}>
                <li className="font-bold">A senha deve conter pelo menos:</li>
                <li
                  className={formData.password.length >= 8 && "text-green-800"}>
                  Mínimo de 8{" "}
                  {formData.password.length >= 8 && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={/\d/.test(formData.password) && "text-green-800"}>
                  Um número
                  {/\d/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={
                    /[A-Z]/.test(formData.password) && "text-green-800"
                  }>
                  Uma letra maiúscula
                  {/[A-Z]/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
                <li
                  className={
                    /[a-z]/.test(formData.password) && "text-green-800"
                  }>
                  Uma letra minúscula
                  {/[a-z]/.test(formData.password) && (
                    <i className="fa-solid fa-check ml-1"></i>
                  )}
                </li>
              </ul> */}
              <button
                type="submit"
                className="bg-orange-400 mt-7 py-2 rounded-lg font-bold outline-none duration-200 hover:bg-orange-500">
                Cadastrar
              </button>
              <span className="m-auto mt-4">
                Já possui uma conta?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-orange-700 hover:underline cursor-pointer">
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
