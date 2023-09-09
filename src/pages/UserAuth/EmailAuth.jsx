import { useNavigate } from "react-router-dom";
import StockDoLogo from "../../assets/imgs/stockdo.svg";
import EmailGif from "../../assets/imgs/email-auth.gif";
import { useEffect, useState } from "react";

export default function EmailAuth() {
  const navigate = useNavigate();
  const [noAuth, setNoAuth] = useState([0, 0, 0, 0]);
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
        <div className="flex flex-col p-12 px-24 bg-white rounded-xl">
          <img
            src={EmailGif}
            alt="Animated email"
            width="180px"
            className="m-auto"
            onClick={() => navigate("/")}
          />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-['PT_Sans']">Verifique seu email</h1>
            <p className="font-['Roboto'] max-w-[15rem]">
              Enviamos um email com o código para{" "}
              <span className="font-bold break-words">locca@gmail.com</span>
            </p>
          </div>
          <form
            action="/submit"
            method="post"
            className="flex flex-col mt-5 font-['Open_Sans']"
            autoComplete="off">
            <label htmlFor="" className="font-['Roboto']">
              Código de verificação:
            </label>
            <div className="flex justify-between mb-5 text-center">
              <input
                type="text"
                maxLength={1}
                value={noAuth[0]}
                onChange={(e) => formatNoAuth(e.target.value)}
                name="na1"
                className="w-12 border text-center text-4xl py-2 border-[rgba(0,0,0,0.25)] outline-none"
              />
              <input
                type="text"
                maxLength={1}
                value={noAuth[1]}
                onChange={(e) => formatNoAuth(e.target.value)}
                name="na2"
                className="w-12 border text-center text-4xl py-2 border-[rgba(0,0,0,0.25)] outline-none"
              />
              <input
                type="text"
                maxLength={1}
                value={noAuth[2]}
                onChange={(e) => formatNoAuth(e.target.value)}
                name="na3"
                className="w-12 border text-center text-4xl py-2 border-[rgba(0,0,0,0.25)] outline-none"
              />
              <input
                type="text"
                maxLength={1}
                value={noAuth[3]}
                onChange={(e) => formatNoAuth(e.target.value)}
                name="na4"
                className="w-12 border text-center text-4xl py-2 border-[rgba(0,0,0,0.25)] outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-400 py-2 rounded-lg font-bold">
              Enviar
            </button>
            <div className="flex flex-col items-center">
              <span className="m-auto mt-4 mb-1">
                Código não foi recebido?{" "}
              </span>
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
          </form>
        </div>
      </div>
    </main>
  );
}
