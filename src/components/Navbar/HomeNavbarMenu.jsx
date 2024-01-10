export default function HomeNavbarMenu() {
  return (
    <div className="fixed z-10 flex flex-col items-start w-full gap-8 p-5 text-xl font-semibold text-white bg-neutral-900 animate-menu sm:hidden">
      <button>Home</button>
      <button>O Software</button>
      <button>Plano</button>
      <button className="text-orange-500">Entrar</button>
    </div>
  );
}
