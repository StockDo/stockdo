import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StockDoLogo from "../../assets/imgs/stockdo.svg";

export default function Termos() {
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center px-44 min-h-screen">
        <img src={StockDoLogo} alt="StockDo logo" width={"350px"} />
        <h1 className="font-['PT_Sans'] text-5xl bg-neutral-200 px-96 py-2 mt-12">
          Termos
        </h1>
        <p className="text-3xl leading-[3.5rem] mt-8">
          <span className="font-bold">1.</span> Ao acessar o site StockDo, você
          concorda em cumprir estritamente estes Termos de Serviço, bem como
          todas as leis e regulamentos aplicáveis. Além disso, ao utilizar este
          site, você reconhece e concorda que é inteiramente responsável por
          cumprir todas as leis locais pertinentes. Se, por qualquer motivo,
          você não estiver de acordo com algum destes termos, fica proibido de
          utilizar ou acessar este site. É importante observar que todos os
          materiais disponíveis neste site estão protegidos pelas leis de
          direitos autorais e marcas comerciais vigentes.
        </p>
      </div>
      <Footer />
    </main>
  );
}
