import { useNavigate } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import EmailGif from "../../assets/imgs/email-auth.gif";
import { useEffect, useState } from "react";
import "animate.css";

export default function EmailAuth() {
  const navigate = useNavigate();
  const [noAuth, setNoAuth] = useState("");
  const formatNoAuth = (value) => {
    setNoAuth(value.replace(/\D/, ""));
  };

  const [resend, setResend] = useState(5);
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
  };

  const [authError, setAuthError] = useState(false);
  function delayAuthError() {
    fetch("../../../auth.json")
      .then((res) => res.json())
      .then((data) => {
        if (noAuth !== data.auth) {
          setAuthError(true);
          setTimeout(() => {
            setAuthError(false);
            setNoAuth("");
          }, 1000);
        } else {
          setAuthError("Success");
          setTimeout(() => {
            navigate("/registro");
          }, 1000);
        }
      });
  }

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
            src={EmailGif}
            alt="Animated email"
            width="180px"
            className="m-auto translate-x-4"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-['PT_Sans']">Verifique seu email</h1>
            <div className="flex flex-col items-center font-['Roboto']">
              <span className="">
                Enviamos um email com o código para o seu email
              </span>
            </div>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            method="get"
            className="flex flex-col mt-5 font-['Open_Sans']"
            autoComplete="off">
            <div className="flex flex-col items-center mb-5 text-center">
              <label htmlFor="" className="font-['Roboto']">
                Código de verificação:
              </label>
              <input
                type="text"
                maxLength={4}
                value={noAuth}
                onChange={(e) => formatNoAuth(e.target.value)}
                name="numAuth"
                className={`w-44 border text-center text-4xl py-2 mt-2 border-[rgba(0,0,0,0.25)] outline-none ${
                  authError === true
                    ? "animate__animated animate__shakeX text-red-600 border-red-600"
                    : authError === "Success"
                    ? "animate-pulse text-green-600 border-green-600"
                    : null
                }`}
              />
            </div>
            <button
              onClick={() => delayAuthError()}
              className="bg-orange-400 py-2 rounded-lg font-bold">
              Verificar
            </button>
          </form>
          <div className="flex flex-col items-center">
            <span className="m-auto mt-4 mb-1">Código não foi recebido? </span>
            <span
              onClick={() => (resend === 0 ? setResend(30) : null)}
              className={
                resend === 0
                  ? `text-orange-700 cursor-pointer hover:underline`
                  : `text-neutral-700 opacity-50 cursor-not-allowed select-none`
              }>
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
