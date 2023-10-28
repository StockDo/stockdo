import { useNavigate, useLocation } from "react-router";

export default function Planos() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center bg-gray-100 mt-44 pt-16 pb-44">
      <h1 className="text-5xl font-bold mx-auto mb-16 font-['PT_Sans'] underline">
        Planos
      </h1>
      <div className="flex flex-col items-center mx-24">
        <div className="flex gap-24">
          <div className="flex flex-col gap-7 border-black bg-white border pt-5 px-16 pb-12 font-['Open_Sans'] shadow-xl">
            <h1 className="text-4xl font-bold mx-auto">Plano Básico</h1>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li className="opacity-30">Relatórios avançados</li>
              <li className="opacity-30">Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>39
              <span className="text-2xl absolute">,99</span>
            </h2>
            <a
              href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
          <div className="flex flex-col gap-7 border-black bg-white border pt-5 px-16 pb-12 font-['Open_Sans'] shadow-xl">
            <div className="flex flex-col items-center mx-auto">
              <h1 className="text-4xl font-bold ">Plano Padrão</h1>
              <i className="fa-solid fa-crown text-2xl"></i>
              <span className="text-lg font-['Open_Sans'] -m-2">Popular</span>
            </div>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li>Relatórios avançados</li>
              <li className="opacity-30">Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>89
              <span className="text-2xl absolute">,99</span>
            </h2>
            <a
              href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
          <div className="flex flex-col gap-7 border-black bg-white border pt-5 px-16 pb-12 font-['Open_Sans'] shadow-xl">
            <h1 className="text-4xl font-bold mx-auto">Plano Pro</h1>
            <ul className="flex flex-col gap-6 list-disc">
              <li>Armazenamento ilimitado</li>
              <li>Gerador de relatórios</li>
              <li>Relatórios avançados</li>
              <li>Gerenciamento pelo aplicativo</li>
            </ul>
            <h2 className="font-['PT_Sans'] text-5xl m-auto">
              <span className="font-sans text-lg">R$</span>149
              <span className="text-2xl absolute">,99</span>
            </h2>
            <a
              href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
              className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black text-xl text-white font-bold text-center hover:bg-neutral-800">
              Experimente por 30 dias
            </a>
          </div>
        </div>
        <h1
          onClick={() => navigate("/success", { state: true })}
          className="text-xl mt-10 font-bold mx-auto font-['Open_Sans'] cursor-pointer hover:underline">
          Escolher mais tarde <i className="fa-solid fa-play text-lg"></i>
        </h1>
      </div>
    </main>
  );
}
