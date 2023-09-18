import { useEffect, useState } from "react";
import StockDoLogo from "../assets/imgs/stockdo.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function RegisterUser() {
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setCidade(data.localidade);
        setRua(data.logradouro);
        setBairro(data.bairro);
        setEstado(data.uf);
        setComplemento(data.complemento);
      });
  }, [cep]);
  return (
    <>
    <Navbar />
      <div className="flex flex-col items-center">
        <img src={StockDoLogo} width={"300px"} className="mb-12 mt-32" />
        <h1 className="text-4xl font-['PT_Sans'] mb-5">Cadastro da empresa</h1>
        <form
          action=""
          method="post"
          autoComplete="off"
          className="font-['Open_Sans'] pb-24 max-w-[80rem] w-full px-5">
          <h1 className="text-2xl font-['PT_Sans'] mt-5 mb-2 underline">
            Dados da empresa
          </h1>
          <div className="flex gap-4">
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 after:pl-1">
                Nome da empresa
              </label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 after:pl-1">
                Nome do proprietário
              </label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 after:pl-1">
                Telefone
              </label>
              <input
                type="text"
                name=""
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label htmlFor="">Contato (ex. WhatsApp, Email)</label>
              <input
                type="text"
                name="phone"
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
          </div>
          <h1 className="text-2xl font-['PT_Sans'] mt-5 mb-2 underline">
            Endereço da empresa
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="local"
                className="after:content-['*'] after:text-red-600 after:pl-1">
                CEP
              </label>
              <input
                type="text"
                name="zip"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                id="local"
                placeholder="CEP"
                maxLength={9}
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="local"
                className="after:content-['*'] after:text-red-600 after:pl-1">
                Rua
              </label>
              <input
                type="text"
                name="rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Rua"
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className="after:content-['*'] after:text-red-600 after:pl-1">
                  Bairro
                </label>
                <input
                  type="text"
                  name="bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Bairro"
                  className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="local">Complemento (opcional)</label>
                <input
                  type="text"
                  name=""
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  placeholder="Complemento"
                  className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className="after:content-['*'] after:text-red-600 after:pl-1">
                  Cidade
                </label>
                <input
                  type="text"
                  name="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Cidade"
                  className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className="after:content-['*'] after:text-red-600 after:pl-1">
                  Estado
                </label>
                <input
                  type="text"
                  name="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  placeholder="Estado"
                  className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
