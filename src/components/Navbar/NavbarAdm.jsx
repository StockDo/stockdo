import { useNavigate } from "react-router-dom";

export default function NavbarAdm() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  const sairClick = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="flex justify-between bg-slate-600 p-4 font-['Barlow'] fixed w-full z-50">
      <h1 className="text-white text-3xl font-bold font-['PT_Sans']">Painel</h1>
      <ul className="flex items-center gap-5 justify-end text-white text-xl">
        <li>
          <span onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </span>
        </li>
        <li>
          <span className="cursor-pointer">
            O Software
          </span>
        </li>
        <li>
          <span onClick={() => navigate("/planos")} className="cursor-pointer">
            Planos
          </span>
        </li>
        <li className={auth ? "hidden" : "block"}>
          <a
            onClick={() => navigate("/login")}
            className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Entrar<i className="fa-solid fa-right-to-bracket ml-1"></i>
          </a>
        </li>
        <li className={auth ? "block" : "hidden"}>
          <a
            onClick={sairClick}
            className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Sair<i className="fa-solid fa-power-off ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
