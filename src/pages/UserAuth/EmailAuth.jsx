import { useNavigate, useLocation } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import EmailGif from "../../assets/imgs/EmailAuth/email-auth.gif";
import CheckAnim from "../../assets/imgs/EmailAuth/check.gif";
import { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";

export default function EmailAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
    console.log(location);
  }, []);
  const [authCode, setAuthCode] = useState("");
  const formatNoAuth = (value) => {
    setAuthCode(value.replace(/\D/, ""));
  };

  const [resend, setResend] = useState(5);
  const [authError, setAuthError] = useState(false);
  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/auth_code`,
    data: {
      code: authCode,
    },
  };

  const request_resend = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/resend_code`,
    data: {
      email: location.state.email,
    },
  };
  function resendCount() {
    resend != 0 ? setResend(resend - 1) : setResend(0);
  }

  useEffect(() => {
    setTimeout(() => {
      resendCount();
    }, 1000);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(request)
      .then(() => {
        console.log(location);
        axios
          .post(`${import.meta.env.VITE_URL}/signup`, {
            cpf: location.state.cpf,
            email: location.state.email,
            password: location.state.password,
          })
          .then(() => {
            setAuthError("Success");
            localStorage.setItem("auth", true);
            setTimeout(() => {
              navigate("/registro", { state: { cpf: location.state.cpf } });
            }, 1500);
          });
      })
      .catch((err) => {
        console.log(err);
        setAuthError(true);
        setTimeout(() => {
          setAuthError(false);
          setAuthCode("");
        }, 1000);
      });
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
      <div className="bg-slate-400 flex justify-center items-center shadow-xl rounded-xl mx-12 max-lg:mx-5">
        <div className="flex flex-col p-12 px-16 bg-white rounded-xl">
          <img
            src={authError === "Success" ? CheckAnim : EmailGif}
            alt="Animated email"
            width="180px"
            className="m-auto"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl font-['PT_Sans']">Verifique seu email</h1>
            <div className="flex flex-col items-center font-['Roboto']">
              <span className="">
                Enviamos um email com o código para o seu email
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-5 font-main"
            autoComplete="off"
          >
            <div className="flex flex-col items-center mb-5 text-center">
              <label htmlFor="" className="font-['Roboto']">
                Código de verificação:
              </label>
              <input
                type="text"
                maxLength={4}
                value={authCode}
                onChange={(e) => formatNoAuth(e.target.value)}
                className={`w-44 border text-center text-xl py-2 mt-2 border-[rgba(0,0,0,0.25)]  ${
                  authError === true
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : authError === "Success" &&
                      "animate-pulse text-green-600 border-green-600"
                }`}
              />
            </div>
            <button className="bg-orange-400 py-2 rounded-lg font-bold">
              Verificar
            </button>
          </form>
          <div className="flex flex-col items-center">
            <span className="m-auto mt-4 mb-1">Código não foi recebido? </span>
            <span
              onClick={() => {
                resend === 0 &&
                  axios(request_resend)
                    .then((e) => {
                      console.log(e);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                resend === 0 && setResend(30);
              }}
              className={
                resend === 0
                  ? `text-orange-700 cursor-pointer hover:underline`
                  : `text-neutral-700 opacity-50 cursor-not-allowed select-none`
              }
            >
              {resend === 0
                ? "Reenviar código."
                : `Reenviar código (${resend}s).`}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
