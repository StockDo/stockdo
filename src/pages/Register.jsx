import { useEffect, useState } from "react";
import StockDoLogo from "../assets/imgs/stockdo.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "animate.css";

export default function Register() {
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState(false);
  const [cpf, setCpf] = useState("");
  useEffect(() => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
      if (res.data.erro) {
        setCepError(true);
      } else {
        setCepError(false);
        setCidade(res.data.localidade);
        setRua(res.data.logradouro);
        setBairro(res.data.bairro);
        setEstado(res.data.uf);
      }
    });
  }, [cep]);

  const cepInput = (e) => {
    setCepError(false);
    const value = e.target.value;
    const format = value
      .replace(/[a-zA-Z\s]/, "")
      .replace(/(\d{5})(\d{3})/, "$1-$2")
      .slice(0, 9);
    setCep(format);
  };

  const cpfInput = (e) => {
    const value = e.target.value;
    const format = value
      .replace(/[a-zA-Z\s]/, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      .slice(0, 14);
    setCpf(format);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img src={StockDoLogo} width={"300px"} className="mb-12 mt-32" />
        <h1 className="text-4xl font-['PT_Sans'] mb-5">Registro da empresa</h1>
        <form
          action=""
          method="post"
          autoComplete="off"
          className="font-['Open_Sans'] pb-24 max-w-[80rem] w-full px-5">
          <h1 className="text-2xl font-['PT_Sans'] my-5 underline">
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
                CPF do proprietário
              </label>
              <input
                type="text"
                name=""
                value={cpf}
                onChange={cpfInput}
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className="after:content-['*'] after:text-red-600 after:pl-1">
                Telefone/Cel.
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
                Contato (ex. WhatsApp, Email)
              </label>
              <input
                type="text"
                name="phone"
                placeholder=""
                className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
              />
            </div>
          </div>
          <h1 className="text-2xl font-['PT_Sans'] my-5 underline">
            Endereço da empresa
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    cepError
                      ? "animate__animated animate__shakeX text-red-600 "
                      : null
                  }`}>
                  {cepError
                    ? cepError === ""
                      ? "Preencha este campo"
                      : "CEP inválido"
                    : "CEP"}
                </label>
                <input
                  type="text"
                  name="zip"
                  value={cep}
                  onChange={cepInput}
                  id="local"
                  placeholder="CEP"
                  className={`border border-neutral-300 p-3 outline-none focus:border-orange-400 ${
                    cepError
                      ? "animate__animated animate__shakeX text-red-600 border-red-600"
                      : null
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
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
                <label
                  htmlFor="local"
                  className="after:content-['*'] after:text-red-600 after:pl-1">
                  Número
                </label>
                <input
                  type="text"
                  name=""
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="Número"
                  className="border border-neutral-300 p-3 outline-none focus:border-orange-400"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="local">Complemento (opcional)</label>
                <input
                  type="text"
                  name=""
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
            <button
              type="submit"
              className="px-24 py-4 bg-orange-400 m-auto rounded-xl text-2xl font-['PT_Sans'] mt-10 hover:bg-orange-500 duration-200">
              Finalizar cadastro
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
