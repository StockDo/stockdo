import StockDoLogo from "../../assets/imgs/Icons/stockdo.svg";
import LockLogo from "../../assets/imgs/Icons/lock.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NewPass({ resetSuccess }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState(false);
  //   const [resetSuccess, setResetSuccess] = useState(false);
  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/reset_pass`,
    data: {
      email: localStorage.getItem("email"),
      pass: pass,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass != repeatPass) {
      setError(true);
    } else {
      axios(request)
        .then(() => {
          localStorage.setItem("resetSuccess", true);
          resetSuccess;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex flex-col p-12 px-16 bg-white rounded-xl">
      <img
        src={StockDoLogo}
        alt="StockDo logo"
        width="200px"
        className="cursor-pointer m-auto mb-6"
        onClick={() => navigate("/")}
      />
      <img
        src={LockLogo}
        alt="Animated email"
        width="180px"
        className="m-auto translate-x-4"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-['PT_Sans']">Redefina sua senha</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-5 font-['Open_Sans']"
        autoComplete="off">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-['Open_Sans']">
            Nova senha
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={`w-96 border rounded-md py-2 px-2 text-xl mt-2 border-[rgba(0,0,0,0.25)] `}
          />
          <label htmlFor="" className="font-['Open_Sans'] mt-4">
            Repita a senha
          </label>
          <input
            type="password"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
            className={`w-96 border rounded-md py-2 px-2 text-xl mt-2 border-[rgba(0,0,0,0.25)] `}
          />
          {error && (
            <span className="text-red-600 mt-2">
              As senhas não se coincidem
            </span>
          )}
        </div>
        <button
          onClick={resetSuccess}
          className="bg-orange-400 py-2 rounded-lg font-bold">
          Alterar senha
        </button>
      </form>
    </div>
  );
}
