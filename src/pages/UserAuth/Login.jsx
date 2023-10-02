import { useNavigate } from "react-router-dom";
import SignupBackground from "../../assets/imgs/signup-bg.png";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import { useState } from "react";
import "animate.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    cnpj: "",
    pass: "",
  });
  const http_values = {
    method: "POST",
    url: `/login`,
    data: {
      cnpj: formData.cnpj,
      pass: formData.pass,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios(http_values)
      .then((e) => {
        console.log(e);
        setError(false);
        navigate("/registro");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
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
          <div className="flex flex-col p-12 py-28 bg-white rounded-e-xl max-lg:rounded-xl">
            <img
              src={StockDoLogo}
              alt="StockDo logo"
              width="150px"
              className="cursor-pointer m-auto mb-2"
              onClick={() => navigate("/")}
            />
            <h1 className="text-3xl font-['PT_Sans'] m-auto">
              Entre em sua conta
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-5 font-['Open_Sans']"
              autoComplete="on">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    cnpj: e.target.value,
                  });
                  setError(false);
                }}
                name="cnpj"
                id="cnpj"
                className={`mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-44 py-2 rounded-md outline-none ${
                  error ? "border-red-600" : "focus:border-orange-400"
                }`}
              />

              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="pass"
                value={formData.pass}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pass: e.target.value,
                  })
                }
                id="password"
                className={`mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-2 py-2 rounded-md outline-none  ${
                  error ? "border-red-600" : "focus:border-orange-400"
                }`}
              />
              <span
                onClick={() => navigate("/verify_reset")}
                className="text-sm mt-2 text-orange-700 hover:underline cursor-pointer">
                Esqueceu sua senha?
              </span>
              {error && <span className="text-red-600">Dados incorretos</span>}
              <button
                type="submit"
                className="bg-orange-400 mt-7 py-2 rounded-lg font-bold outline-none duration-200 hover:bg-orange-500">
                Entrar
              </button>
              <span className="m-auto mt-4">
                Não possui uma conta?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-orange-700 hover:underline cursor-pointer">
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
