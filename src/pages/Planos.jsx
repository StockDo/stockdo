import { useNavigate, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Planos() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center mx-24 my-32 max-sm:mx-8">
          <h1 className="mx-auto mb-16 text-2xl font-bold font-main max-sm:">
            Escolha um plano de sua preferência:
          </h1>
          <div className="flex flex-wrap justify-center gap-24">
            <div className="flex flex-col px-16 pt-5 pb-12 border border-black shadow-xl gap-7 font-main">
              <h1 className="mx-auto text-xl font-bold">Plano Básico</h1>
              <ul className="flex flex-col gap-6 list-disc">
                <li>Armazenamento ilimitado</li>
                <li>Gerador de relatórios</li>
                <li className="opacity-30">Relatórios avançados</li>
                <li className="opacity-30">Gerenciamento pelo aplicativo</li>
              </ul>
              <h2 className="font-['PT_Sans'] text-2xl m-auto">
                <span className="font-sans text-lg">R$</span>39
                <span className="absolute ">,99</span>
              </h2>
              <a
                href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
                className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black  text-white font-bold text-center hover:bg-neutral-800"
              >
                Experimente por 30 dias
              </a>
            </div>
            <div className="flex flex-col px-16 pt-5 pb-12 border border-black shadow-xl gap-7 font-main">
              <div className="flex flex-col items-center mx-auto">
                <h1 className="text-xl font-bold ">Plano Padrão</h1>
                <i className=" fa-solid fa-crown"></i>
                <span className="-m-2 text-lg font-main">Popular</span>
              </div>
              <ul className="flex flex-col gap-6 list-disc">
                <li>Armazenamento ilimitado</li>
                <li>Gerador de relatórios</li>
                <li>Relatórios avançados</li>
                <li className="opacity-30">Gerenciamento pelo aplicativo</li>
              </ul>
              <h2 className="font-['PT_Sans'] text-2xl m-auto">
                <span className="font-sans text-lg">R$</span>89
                <span className="absolute ">,99</span>
              </h2>
              <a
                href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
                className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black  text-white font-bold text-center hover:bg-neutral-800"
              >
                Experimente por 30 dias
              </a>
            </div>
            <div className="flex flex-col px-16 pt-5 pb-12 border border-black shadow-xl gap-7 font-main">
              <h1 className="mx-auto text-xl font-bold">Plano Pro</h1>
              <ul className="flex flex-col gap-6 list-disc">
                <li>Armazenamento ilimitado</li>
                <li>Gerador de relatórios</li>
                <li>Relatórios avançados</li>
                <li>Gerenciamento pelo aplicativo</li>
              </ul>
              <h2 className="font-['PT_Sans'] text-2xl m-auto">
                <span className="font-sans text-lg">R$</span>149
                <span className="absolute ">,99</span>
              </h2>
              <a
                href="https://buy.stripe.com/3cs15Kgts3AEbIY5kk"
                className="w-[calc(100%_+_8rem)] -ml-16 -mb-12 py-4 bg-black  text-white font-bold text-center hover:bg-neutral-800"
              >
                Experimente por 30 dias
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
