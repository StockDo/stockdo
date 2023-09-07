import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-900 p-6 font-['Barlow']">
      <ul className="flex items-center gap-5 justify-end text-white text-xl">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Planos</a>
        </li>
        <li>
          <a href="">O Software</a>
        </li>
        <li>
          <a onClick={() => navigate("/signup")} className="bg-orange-400 py-1 px-3 rounded-lg text-black cursor-poiner">
            Cadastre-se
          </a>
        </li>
      </ul>
    </div>
  );
}
