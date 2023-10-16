import { useNavigate } from "react-router-dom";

export default function NavbarAdm() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  const sairClick = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="flex justify-between bg-slate-600 p-4 font-['Barlow'] fixed w-full z-[100]">
      <h1 className="text-white text-3xl font-bold font-['PT_Sans']">Painel</h1>
      <ul className="flex items-center gap-5 justify-end text-white text-xl">
        <li>
          <span onClick={() => navigate("/")} className="cursor-pointer">
            Página inicial
          </span>
        </li>
        <li>
          <a
            onClick={sairClick}
            className="bg-red-400 py-1 px-3 rounded-lg text-black cursor-pointer">
            Sair<i className="fa-solid fa-power-off ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
