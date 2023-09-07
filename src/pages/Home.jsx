import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../index.css";
import Buttons from "../components/Buttons/Buttons";
import SoftwareScreens from "../components/SoftwareScreens/SoftwareScreens";
import Footer from "../components/Footer/Footer";
import Planos from "../components/Planos/Planos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[url('./assets/imgs/sd-bg1.png')] bg-cover bg-no-repeat">
        <Navbar />
        <div className="bg-gradient-to-r from-[rgba(0,0,0,0.83)] h-screen">
          <div className="pt-80 pl-16">
            <h1 className="text-8xl text-white font-['PT_Sans']">StockDo</h1>
            <p className="text-2xl font-['Open_Sans'] text-white">
              Agilize o processo, reduza perdas.
            </p>
            <Buttons />
          </div>
        </div>
      </div>
      {/* Sobre o software */}
      <div className="flex flex-col items-center justify-center bg-white mt-24">
        <h1 className="text-6xl border-b pb-2 border-black font-['PT_Sans']">
          O Software
        </h1>
        <SoftwareScreens />
      </div>
      <Planos />
      {/* Footer */}
      <Footer />
    </main>
  );
}
