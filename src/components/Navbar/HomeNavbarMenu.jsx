import { useNavigate, useLocation } from "react-router";

export default function HomeNavbarMenu() {
  const navigate = useNavigate();

  return (
    <div className="fixed z-10 flex flex-col items-start w-full gap-8 p-5  font-semibold text-white bg-neutral-900 animate-menu sm:hidden">
      <button onClick={() => navigate("/")}>Home</button>
      <button>O Software</button>
      <button onClick={() => navigate("/planos")}>Plano</button>
      <button
        onClick={() => navigate("/login", { state: true })}
        className="text-orange-500"
      >
        Entrar
      </button>
    </div>
  );
}
