import { useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../index.css";
import SoftwareScreens from "../components/SoftwareScreens/SoftwareScreens";
import Footer from "../components/Footer/Footer";
import Planos from "../components/Planos/Planos";

export default function Home() {
  const myRef = useRef();
  const refPlanos = useRef();
  const saibaMaisScroll = () => myRef.current.scrollIntoView();
  const planosScroll = () => refPlanos.current.scrollIntoView();
  return (
    <main className="min-h-screen">
      <div className="bg-[url('./assets/imgs/StockDoBgs/sd-bg1.png')] bg-cover bg-no-repeat max-sm:bg-none">
        <Navbar saibaMaisScroll={saibaMaisScroll} planosScroll={planosScroll} />
        <div className="bg-gradient-to-r from-[rgba(0,0,0,0.83)] h-screen max-sm:bg-none">
          <div className="pl-16 text-white pt-80 max-sm:text-black max-sm:pl-8">
            <h1 className="text-8xl font-['PT_Sans'] max-2xl:text-6xl max-sm:text-5xl">
              StockDo
            </h1>
            <p className="text-2xl font-main max-sm:text-xl">
              Agilize o processo, reduza perdas.
            </p>
            <div className="flex gap-3 text-2xl font-main max-sm:text-xl">
              <button
                onClick={saibaMaisScroll}
                className="px-5 py-2 mt-5 text-black bg-orange-500 rounded-lg max-sm:bg-orange-400">
                Saiba mais
              </button>
              <button
                onClick={planosScroll}
                className="px-5 py-2 mt-5 duration-200 border-2 rounded-lg backdrop-blur hover:bg-white hover:text-black">
                Planos
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sobre o software */}
      <div className="" ref={myRef}></div>
      <div className="flex flex-col items-center justify-center mt-24 bg-white">
        <h1
          className="text-6xl border-b pb-2 border-black font-['PT_Sans']"
          id="software_title">
          O Software
        </h1>
        <SoftwareScreens />
      </div>
      <div ref={refPlanos}></div>
      <Planos title="Planos" />
      {/* Footer */}
      <Footer />
    </main>
  );
}
