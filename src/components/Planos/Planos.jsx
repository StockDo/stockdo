import { useNavigate, useLocation } from "react-router";

export default function Planos() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center pt-16 bg-gray-100 mt-44 pb-44">
      <h1 className="text-5xl font-bold mx-auto mb-16 font-['PT_Sans'] underline">
        Planos
      </h1>
      <div className="flex flex-col items-center mx-24">
        <div className="flex flex-wrap justify-center gap-24">
          <div className="flex flex-col px-16 pt-5 pb-12 bg-white border border-black shadow-xl gap-7 font-main">
            <h1 className="mx-auto text-4xl font-bold">Plano Básico</h1>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li className="opacity-30">Relatórios avançados</li>
              <li className="opacity-30">Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>39
              <span className="absolute text-2xl">,99</span>
            </h2>
            <a
              href="#"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
          <div className="flex flex-col px-16 pt-5 pb-12 bg-white border border-black shadow-xl gap-7 font-main">
            <div className="flex flex-col items-center mx-auto">
              <h1 className="text-4xl font-bold ">Plano Padrão</h1>
              <i className="text-2xl fa-solid fa-crown"></i>
              <span className="-m-2 text-lg font-main">Popular</span>
            </div>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li>Relatórios avançados</li>
              <li className="opacity-30">Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>89
              <span className="absolute text-2xl">,99</span>
            </h2>
            <a
              href="#"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
          <div className="flex flex-col px-16 pt-5 pb-12 bg-white border border-black shadow-xl gap-7 font-main">
            <h1 className="mx-auto text-4xl font-bold">Plano Pro</h1>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li>Relatórios avançados</li>
              <li>Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>149
              <span className="absolute text-2xl">,99</span>
            </h2>
            <a
              href="#"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
        </div>
        <h1
          onClick={() => navigate("/success", { state: true })}
          className="mx-auto mt-10 text-xl font-bold cursor-pointer font-main hover:underline">
          Escolher mais tarde <i className="text-lg fa-solid fa-play"></i>
        </h1>
      </div>
    </main>
  );
}
