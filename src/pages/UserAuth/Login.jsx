import { useNavigate, useLocation } from "react-router-dom";
import SignupBackground from "../../assets/imgs/StockDoBgs/signup-bg.png";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import { useEffect, useState } from "react";
import "animate.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    cpf: "",
    pass: "",
  });
  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/login`,
    data: {
      cpf: formData.cpf,
      pass: formData.pass,
    },
  };

  const cpfInput = (e) => {
    setError(false);
    const { value } = e.target;
    const formattedInput = value
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      .slice(0, 14);
    setFormData({
      ...formData,
      cpf: formattedInput,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(request)
      .then((e) => {
        console.log(e);
        localStorage.setItem("id_user", e.data.id_user);
        localStorage.setItem("id_empresa", e.data.id_empresa);
        localStorage.setItem("auth", true);
        setError(false);
        navigate("/painel", { state: true });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-slate-100 max-sm:bg-white">
        <div className="flex items-center mx-5 my-32 bg-orange-400 shadow-xl rounded-xl max-sm:bg-transparent">
          <div className="px-8 max-lg:hidden">
            <img
              src={SignupBackground}
              width="500px"
              alt="Warehouse background"
            />
          </div>
          <div className="flex flex-col p-12 py-24 max-h-[80vh] overflow-y-scroll bg-white rounded-e-xl max-lg:rounded-xl">
            <img
              src={StockDoLogo}
              alt="StockDo logo"
              width="150px"
              className="m-auto mb-2 cursor-pointer max-sm:hidden"
              onClick={() => navigate("/")}
            />
            <h1 className="text-xl font-['PT_Sans'] m-auto">
              Entre em sua conta
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-5 font-main"
              autoComplete="on"
            >
              {error && (
                <span className="px-2 py-2 mb-2 font-bold text-white bg-red-700">
                  CPF ou senha inválidos
                </span>
              )}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className={`relative -m-2 self-end top-[8.8rem] mr-2  text-orange-600`}
              >
                {showPass ? <BsEyeSlash /> : <BsEye />}
              </button>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                value={formData.cpf}
                onChange={cpfInput}
                name="cpf"
                id="cpf"
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md  ${
                  error
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />

              <label htmlFor="password">Senha</label>
              <input
                type={showPass ? "text" : "password"}
                name="pass"
                value={formData.pass}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    pass: e.target.value,
                  });
                  setError(false);
                }}
                id="password"
                className={`mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md   ${
                  error
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
              <span
                onClick={() => navigate("/verify_reset")}
                className="mt-2 text-sm text-orange-700 cursor-pointer hover:underline"
              >
                Esqueceu sua senha?
              </span>
              <button
                type="submit"
                className="py-2 font-bold duration-200 bg-orange-400 rounded-lg mt-7 hover:bg-orange-500"
              >
                Entrar
              </button>
              <span className="m-auto mt-4">
                Não possui uma conta?{" "}
                <span
                  onClick={() => navigate("/signup", { state: true })}
                  className="text-orange-700 cursor-pointer hover:underline"
                >
                  Cadastre-se aqui.
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
