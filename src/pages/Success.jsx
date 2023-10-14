import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loading from "../assets/imgs/Icons/loading.gif";

export default function Success() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-5">
          <iframe
            className="scale-150 mb-10 z-20"
            src="https://lottie.host/?file=8551a616-af4d-4568-8a0c-ddf89bf87203/fQHVUOl4nh.json"></iframe>
          <img
            src={Loading}
            width={"100px"}
            className="absolute translate-y-12"
          />
          <h1 className="font-bold text-5xl">Obrigado por obter StockDo.</h1>
          <a
            href="https://raw.githubusercontent.com/nicolasallp/stockdo/master/StockDoInstaller.msi"
            className="text-xl text-orange-600 underline">
            Faça o download do software aqui.
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
