import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StockDoLogo from "../assets/imgs/stockdo.svg";

export default function Privacidade() {
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center px-44 pt-32 min-h-screen">
        <img src={StockDoLogo} alt="StockDo logo" width={"350px"} />
        <h1 className="font-['PT_Sans'] text-5xl bg-neutral-200 px-96 py-2 mt-12">
          Privacidade
        </h1>
        <ul className="flex flex-col gap-8 text-2xl leading-[3.5rem] pt-12 pb-44">
          <li>
            A sua privacidade é da maior importância para nós. No site StockDo,
            bem como em outros sites que possuímos e operamos, seguimos uma
            rigorosa política de respeito à sua privacidade em relação a
            qualquer informação que possamos coletar.
          </li>
          <li>
            <span className="font-bold">1. </span>
            Solicitamos informações pessoais somente quando estas são
            estritamente necessárias para fornecer um serviço de qualidade.
            Essas informações são obtidas de maneira justa e legal, com o seu
            conhecimento e consentimento explícitos. Além disso, sempre
            comunicamos claramente os motivos da coleta de informações e como
            essas informações serão utilizadas.
          </li>
          <li>
            <span className="font-bold">2. </span>
            Comprometemo-nos a reter apenas as informações coletadas pelo tempo
            necessário para atender ao serviço solicitado. Quando armazenamos
            dados, implementamos medidas de segurança comercialmente aceitáveis
            para prevenir perdas e roubos, bem como para evitar acesso não
            autorizado, divulgação, cópia, uso ou modificação desses dados.
          </li>
          <li>
            <span className="font-bold">3. </span>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, a menos que seja exigido por lei.
          </li>
          <li>
            <span className="font-bold">4. </span>É importante observar que
            nosso site pode conter links para sites externos que não são de
            nossa operação. Esteja ciente de que não temos controle sobre o
            conteúdo e práticas desses sites externos e, portanto, não podemos
            assumir responsabilidade por suas políticas de privacidade.
          </li>
          <li>
            <span className="font-bold">5. </span>
            Você tem o direito de recusar o fornecimento de informações
            pessoais, compreendendo que, em alguns casos, isso pode afetar nossa
            capacidade de oferecer determinados serviços.
          </li>
          <li>
            <span className="font-bold">6. </span>
            Ao continuar a utilizar o nosso site, consideraremos que você está
            aceitando as práticas em relação à privacidade e informações
            pessoais descritas acima. Caso tenha alguma dúvida sobre como
            tratamos os dados do usuário e informações pessoais, não hesite em
            entrar em contato conosco.
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
