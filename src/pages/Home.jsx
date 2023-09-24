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
      <div className="bg-[url('./assets/imgs/sd-bg1.png')] bg-cover bg-no-repeat">
        <Navbar saibaMaisScroll={saibaMaisScroll} planosScroll={planosScroll} />
        <div className="bg-gradient-to-r from-[rgba(0,0,0,0.83)] h-screen">
          <div className="pt-80 pl-16">
            <h1 className="text-8xl text-white font-['PT_Sans'] max-2xl:text-6xl">
              StockDo
            </h1>
            <p className="text-2xl font-['Open_Sans'] text-white">
              Agilize o processo, reduza perdas.
            </p>
            <div className="flex gap-3 text-2xl font-['Open_Sans']">
              <button
                onClick={saibaMaisScroll}
                className="bg-orange-500 px-5 py-2 rounded-lg mt-5">
                Saiba mais
              </button>
              <button
                onClick={planosScroll}
                className="text-white backdrop-blur border-2 px-5 py-2 rounded-lg mt-5 hover:bg-white hover:text-black duration-200">
                Planos
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sobre o software */}
      <div className="" ref={myRef}></div>
      <div className="flex flex-col items-center justify-center bg-white mt-24">
        <h1
          className="text-6xl border-b pb-2 border-black font-['PT_Sans']"
          id="software_title">
          O Software
        </h1>
        <SoftwareScreens />
      </div>
      <div ref={refPlanos}></div>
      <Planos />
      {/* Footer */}
      <Footer />
    </main>
  );
}
