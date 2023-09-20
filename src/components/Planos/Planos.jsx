import { useNavigate } from "react-router";

export default function Planos() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center bg-neutral-100 mt-44 pt-16 pb-44">
      <h1 className="text-6xl border-b pb-2 inline-block border-black font-['PT_Sans']">
        Planos
      </h1>
      <div className="flex items-center gap-24 mt-10 px-10">
        <div className="flex flex-col items-center p-10 bg-white shadow-2xl shadow-[rgba(0,0,0,0.16)] rounded-2xl mt-10">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-['PT_Sans'] text-5xl max-xl:text-3xl">
              Plano Básico
            </h1>
            <h2 className="font-['PT_Sans'] text-5xl">
              <span className="font-sans text-3xl">R$</span>39,99
            </h2>
            <p>Por mês</p>
          </div>
          <ul className="flex flex-col gap-8 mt-5">
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Pode fazer isso.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Você também pode fazer isso.
            </li>
            <li className="font-['Open_Sans'] text-[rgba(0,0,0,0.5)]">
              <i className="fa-regular fa-circle-xmark text-red-800 mr-3"></i>
              Isso também você pode fazer.
            </li>
            <li className="font-['Open_Sans'] text-[rgba(0,0,0,0.5)]">
              <i className="fa-regular fa-circle-xmark text-red-800 mr-3"></i>
              Saiba que você pode fazer isso se quiser.
            </li>
            <li className="font-['Open_Sans'] text-[rgba(0,0,0,0.5)]">
              <i className="fa-regular fa-circle-xmark text-red-800 mr-3"></i>
              Não esquece que você também pode fazer isso.
            </li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="m-auto mt-10 py-2 px-7 rounded-xl bg-slate-900 text-white text-3xl font-['Open_Sans'] font-bold duration-200 hover:scale-105">
            Obter
          </button>
        </div>
        <div className="flex flex-col px-14 py-16 -translate-y-6 bg-white shadow-2xl shadow-[rgba(0,0,0,0.16)] rounded-2xl mt-10 bg-gradient-to-tr from-[#d6fcff] to-[#efffd3]">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-4 items-center">
              <h1 className="font-['PT_Sans'] text-5xl max-2xl:text-4xl">
                Plano Popular{" "}
              </h1>
              <i className="fa-solid fa-crown text-4xl text-yellow-500"></i>
            </div>
            <h2 className="font-['PT_Sans'] text-5xl">
              <span className="font-sans text-3xl">R$</span>89,99
            </h2>
            <p>Por mês</p>
          </div>
          <ul className="flex flex-col gap-8 mt-5">
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Pode fazer isso.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Você também pode fazer isso.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Isso também você pode fazer.
            </li>
            <li className="font-['Open_Sans'] text-[rgba(0,0,0,0.5)]">
              <i className="fa-regular fa-circle-xmark text-red-800 mr-3"></i>
              Saiba que você pode fazer isso se quiser.
            </li>
            <li className="font-['Open_Sans'] text-[rgba(0,0,0,0.5)]">
              <i className="fa-regular fa-circle-xmark text-red-800 mr-3"></i>
              Não esquece que você também pode fazer isso.
            </li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="m-auto mt-10 py-2 px-7 rounded-xl bg-slate-900 text-white text-3xl font-['Open_Sans'] font-bold duration-200 hover:scale-105">
            Obter
          </button>
        </div>
        <div className="flex flex-col p-10 bg-white shadow-2xl shadow-[rgba(0,0,0,0.16)] rounded-2xl inline-block mt-10">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-['PT_Sans'] text-5xl">Plano Básico</h1>
            <h2 className="font-['PT_Sans'] text-5xl">
              <span className="font-sans text-3xl">R$</span>149,99
            </h2>
            <p>Por mês</p>
          </div>
          <ul className="flex flex-col gap-8 mt-5">
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Pode fazer isso.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Você também pode fazer isso.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Isso também você pode fazer.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Saiba que você pode fazer isso se quiser.
            </li>
            <li className="font-['Open_Sans']">
              <i className="fa-regular fa-circle-check text-green-700 mr-3"></i>
              Não esquece que você também pode fazer isso.
            </li>
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="m-auto mt-10 py-2 px-7 rounded-xl bg-slate-900 text-white text-3xl font-['Open_Sans'] font-bold duration-200 hover:scale-105">
            Obter
          </button>
        </div>
      </div>
    </main>
  );
}
