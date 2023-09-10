import { useNavigate } from "react-router-dom";
import SignupBackground from "../../assets/imgs/signup-bg.png";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import { useEffect, useState } from "react";
import "animate.css";

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

  const userInput = (e) => {
    const { name, value } = e.target;

    // let isValid = true;
    let formattedInput = value;

    if (name === "cnpj") {
      formattedInput = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        .slice(0, 18);
    } else if (name === "password") {
      formattedInput = value.slice(0, 45);
    }

    setFormData({
      ...formData,
      [name]: formattedInput,
    });
  };

  const [checkSubmit, setCheckSubmit] = useState(false);
  const handleSubmit = (e) => {
    // for (const key in validatedFields) {
    //   const element = validatedFields[key];
    //   if (element === false) {
    //     e.preventDefault();
    //     setCheckSubmit(true);
    //   }
    // }
    let isValid = true;
    if (!/\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(formData.cnpj)) {
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

    if (isValid === false) {
      e.preventDefault();
    }

    setTimeout(() => {
      setValidatedFields({
        cnpj: true,
        email: true,
        password: true,
      });
    }, 1000);
  };
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <img
        src={StockDoLogo}
        alt="StockDo logo"
        width="250px"
        className="-translate-y-10 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="bg-slate-400 flex items-center shadow-xl rounded-xl mx-12 max-lg:mx-5">
        <div className="px-8 max-lg:hidden">
          <img
            src={SignupBackground}
            width="500px"
            alt="Warehouse background"
          />
        </div>
        <div className="flex flex-col p-12 bg-white rounded-e-xl max-lg:rounded-xl">
          <h1 className="text-3xl font-['PT_Sans']">Cadastre-se aqui</h1>
          <form
            action="/submit"
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col mt-5 font-['Open_Sans']"
            autoComplete="off">
            <label htmlFor="" className="font-bold mt-1">
              CNPJ{" "}
              <span
                className={` ${
                  validatedFields.cnpj === false
                    ? "text-red-600 border-red-600"
                    : "hidden"
                }`}>
                inválido
              </span>
            </label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={userInput}
              className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-44 py-2 rounded-md outline-none ${
                validatedFields.cnpj === false
                  ? "animate__animated animate__shakeX text-red-600 border-red-600"
                  : null
              } `}
            />

            <label htmlFor="" className="font-bold mt-1">
              E-mail{" "}
              <span
                className={` ${
                  validatedFields.email === false
                    ? "text-red-600 border-red-600"
                    : "hidden"
                }`}>
                inválido
              </span>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={userInput}
              className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none ${
                validatedFields.email === false
                  ? "animate__animated animate__shakeX text-red-600 border-red-600"
                  : null
              } `}
            />

            <label htmlFor="" className="font-bold mt-1">
              Senha{" "}
              <span
                className={` ${
                  validatedFields.password === false
                    ? "text-red-600 border-red-600"
                    : "hidden"
                }`}>
                fraca
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={userInput}
              className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none ${
                validatedFields.password === false
                  ? "animate__animated animate__shakeX text-red-600 border-red-600"
                  : null
              } `}
            />
            <label htmlFor="" className="font-bold mt-1">
              Repetir senha 
              <span
                className={` ${
                  validatedFields.password_repeat === false
                    ? "text-red-600 border-red-600"
                    : "hidden"
                }`}>
                não se coincidem
              </span>
            </label>
            <input
              type="password"
              name="password_repeat"
              value={formData.password_repeat}
              onChange={userInput}
              className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none ${
                validatedFields.password_repeat === false
                  ? "animate__animated animate__shakeX text-red-600 border-red-600"
                  : null
              } `}
            />
            <button
              type="submit"
              className="bg-orange-400 mt-7 py-2 rounded-lg font-bold">
              Cadastrar
            </button>
            <span className="m-auto mt-4">
              Já possui uma conta?{" "}
              <a href="" className="text-orange-700 hover:underline">
                Entre aqui.
              </a>
            </span>
          </form>
        </div>
      </div>
    </main>
  );
}
