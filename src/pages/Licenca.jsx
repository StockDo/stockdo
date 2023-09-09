import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StockDoLogo from "../assets/imgs/stockdo.svg";

export default function Licenca() {
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center px-44 pt-32 min-h-screen">
        <img src={StockDoLogo} alt="StockDo logo" width={"350px"} />
        <h1 className="font-['PT_Sans'] text-5xl bg-neutral-200 px-96 py-2 mt-12">
          Licença de uso
        </h1>
        <ul className="flex flex-col gap-8 text-2xl leading-[3.5rem] pt-12 pb-44">
          <li>
            <span className="font-bold">1. </span>É concedida permissão para
            baixar temporariamente uma cópia dos materiais (informações ou
            software) no site StockDo, apenas para visualização transitória
            pessoal e não comercial. Esta concessão constitui uma licença e não
            uma transferência de título.
          </li>
          <li>
            <span className="font-bold">2. </span>
            Os materiais não podem ser utilizados para qualquer finalidade
            comercial ou para exibição pública, seja de natureza comercial ou
            não.
          </li>
          <li>
            <span className="font-bold">3. </span>
            Não é permitido remover quaisquer direitos autorais ou outras
            notações de propriedade dos materiais.
          </li>
          <li>
            <span className="font-bold">4. </span>
            Esta licença será automaticamente rescindida caso ocorra qualquer
            violação dessas restrições e poderá ser revogada por StockDo a
            qualquer momento. Após a conclusão da visualização dos materiais ou
            o término desta licença, você deve apagar todos os materiais
            baixados, seja em formato eletrônico ou impresso, que estejam em sua
            posse.
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
