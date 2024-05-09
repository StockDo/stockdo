import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import StockDoLogo from "../assets/imgs/Icons/stockdo.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import "animate.css";

export default function Register() {
  const [idUser, setIdUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
    console.log(location);
    axios
      .post(`${import.meta.env.VITE_URL}/get_id`, {
        cpf: location.state.cpf,
      })
      .then((e) => {
        console.log(e);
        setIdUser(e.data.id_user);
      });
  }, []);
  const [formData, setFormData] = useState({
    nome_empresa: "",
    nome_prop: "",
    cnpj: "",
    tel_cel: "",
    contato: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });
  const [validatedFields, setValidatedFields] = useState({
    nome_empresa: "",
    nome_prop: "",
    cnpj: "",
    tel_cel: "",
    contato: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",
  });

  const request = {
    method: "POST",
    url: `${import.meta.env.VITE_URL}/register`,
    data: {
      id_user: idUser,
      nome_empresa: formData.nome_empresa,
      nome_prop: formData.nome_prop,
      cnpj: formData.cnpj,
      tel_cel: formData.tel_cel,
      contato: formData.contato,
      cep: formData.cep,
      rua: formData.rua,
      bairro: formData.bairro,
      numero: formData.numero,
      complemento: formData.complemento,
      cidade: formData.cidade,
      estado: formData.estado,
    },
  };

  const [cepError, setCepError] = useState(false);
  useEffect(() => {
    axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`).then((res) => {
      if (res.data.erro) {
        setCepError(true);
      } else {
        setFormData({
          ...formData,
          cidade: res.data.localidade,
          rua: res.data.logradouro,
          bairro: res.data.bairro,
          estado: res.data.uf,
        });
        setValidatedFields({
          ...validatedFields,
          cidade: true,
          rua: true,
          bairro: true,
          estado: true,
        });
        setCepError(false);
      }
    });
  }, [formData.cep]);

  const userInput = (e) => {
    const { name, value } = e.target;
    let formatCNPJ = formData.cnpj;
    let formatTel = formData.tel_cel;
    if (name === "cnpj") {
      formatCNPJ = value
        .replace(/[a-zA-Z\s]/, "")
        .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        .slice(0, 18);
    } else if (name === "tel_cel") {
      formatTel = value
        .replace(/(\d{0})(\d{2})(\d{0})(\d{5})(\d{4})/, "$1($2)$3 $4-$5")
        .slice(0, 15);
    }

    setValidatedFields({
      ...validatedFields,
      [name]: true,
    });
    setFormData({
      ...formData,
      [name]: value,
      cnpj: formatCNPJ,
      tel_cel: formatTel,
    });
  };

  const cepInput = (e) => {
    setCepError(false);
    const value = e.target.value;
    const format = value
      .replace(/[a-zA-Z\s]/, "")
      .replace(/(\d{5})(\d{3})/, "$1-$2")
      .slice(0, 9);
    setFormData({
      ...formData,
      cep: format,
    });
    setValidatedFields({
      ...validatedFields,
      cep: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataValues = [
      "nome_empresa",
      "nome_prop",
      "cnpj",
      "tel_cel",
      "contato",
      "cep",
      "rua",
      "bairro",
      "numero",
      "cidade",
      "estado",
    ];
    const dataValues = {};

    for (const element of formDataValues) {
      if (formData[element] === "") {
        dataValues[element] = false;
      }
    }

    setValidatedFields({
      ...validatedFields,
      ...dataValues,
    });
    const isNotValid = Object.values(validatedFields).some(
      (val) => val != true
    );
    console.log(isNotValid);
    console.log(validatedFields);
    if (isNotValid === false) {
      axios(request)
        .then((res) => {
          console.log(formData);
          console.log(res);
          localStorage.setItem("id_empresa", formData.cnpj);
          navigate("/planos");
        })
        .catch(({ response }) => {
          console.log(response);
        });
      console.log(validatedFields);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <img src={StockDoLogo} width={"300px"} className="mb-12 mt-32" />
        <h1 className="text-xl font-['PT_Sans'] mb-5">Registro da empresa</h1>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="font-main pb-24 max-w-[80rem] w-full px-5"
        >
          <h1 className=" font-['PT_Sans'] my-5 underline">Dados da empresa</h1>
          <div className="flex gap-4">
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                  validatedFields.nome_empresa === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.nome_empresa === false
                  ? "Campo obrigatório"
                  : "Nome da empresa"}
              </label>
              <input
                type="text"
                name="nome_empresa"
                value={formData.nome_empresa}
                onChange={userInput}
                placeholder="Nome da empresa"
                className={`border border-neutral-300 p-3  ${
                  validatedFields.nome_empresa === false
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor="cnpj"
                className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                  validatedFields.cnpj === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.cnpj === false
                  ? "Campo obrigatório"
                  : "CNPJ da empresa"}
              </label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={userInput}
                placeholder="CNPJ da empresa"
                className={`border border-neutral-300 p-3  ${
                  validatedFields.cnpj === false
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor="nome_prop"
                className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                  validatedFields.nome_prop === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.nome_prop === false
                  ? "Campo obrigatório"
                  : "Nome do proprietário"}
              </label>
              <input
                type="text"
                name="nome_prop"
                value={formData.nome_prop}
                onChange={userInput}
                placeholder="Nome do proprietário"
                className={`border border-neutral-300 p-3  ${
                  validatedFields.nome_prop === false
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                  validatedFields.tel_cel === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.tel_cel === false
                  ? "Campo obrigatório"
                  : "Telefone/Cel."}
              </label>
              <input
                type="text"
                name="tel_cel"
                value={formData.tel_cel}
                onChange={userInput}
                placeholder="Telefone/Cel."
                className={`border border-neutral-300 p-3  ${
                  validatedFields.tel_cel === false
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <label
                htmlFor=""
                className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                  validatedFields.contato === false &&
                  "animate__animated animate__shakeX text-red-600"
                }`}
              >
                {validatedFields.contato === false
                  ? "Campo obrigatório"
                  : "Contato (ex. WhatsApp, Email)"}
              </label>
              <input
                type="text"
                name="contato"
                value={formData.contato}
                onChange={userInput}
                placeholder="Contato (ex. WhatsApp, Email)"
                className={`border border-neutral-300 p-3  ${
                  validatedFields.contato === false
                    ? "animate__animated animate__shakeX border-red-600"
                    : "focus:border-orange-400"
                }`}
              />
            </div>
          </div>
          <h1 className=" font-['PT_Sans'] my-5 underline">
            Endereço da empresa
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    cepError ||
                    (validatedFields.cep === false &&
                      "animate__animated animate__shakeX text-red-600 ")
                  }`}
                >
                  {validatedFields.cep === false
                    ? "Campo obrigatório"
                    : cepError
                      ? "CEP inválido"
                      : "CEP"}
                </label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={cepInput}
                  id="local"
                  placeholder="CEP"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.cep === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : cepError
                        ? "animate__animated animate__shakeX text-red-600 border-red-600"
                        : "focus:border-orange-400"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    validatedFields.rua === false &&
                    "animate__animated animate__shakeX text-red-600"
                  }`}
                >
                  {validatedFields.rua === false ? "Campo obrigatório" : "Rua"}
                </label>
                <input
                  type="text"
                  name="rua"
                  value={formData.rua}
                  onChange={userInput}
                  placeholder="Rua"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.rua === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : "focus:border-orange-400"
                  }`}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    validatedFields.bairro === false &&
                    "animate__animated animate__shakeX text-red-600"
                  }`}
                >
                  {validatedFields.bairro === false
                    ? "Campo obrigatório"
                    : "Bairro"}
                </label>
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={userInput}
                  placeholder="Bairro"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.bairro === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : "focus:border-orange-400"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    validatedFields.numero === false &&
                    "animate__animated animate__shakeX text-red-600"
                  }`}
                >
                  {validatedFields.numero === false
                    ? "Campo obrigatório"
                    : "Número"}
                </label>
                <input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={userInput}
                  placeholder="Número"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.numero === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : "focus:border-orange-400"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="local">Complemento (opcional)</label>
                <input
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={userInput}
                  placeholder="Complemento"
                  className="border border-neutral-300 p-3  focus:border-orange-400"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    validatedFields.cidade === false &&
                    "animate__animated animate__shakeX text-red-600"
                  }`}
                >
                  {validatedFields.cidade === false
                    ? "Campo obrigatório"
                    : "Cidade"}
                </label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={userInput}
                  placeholder="Cidade"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.cidade === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : "focus:border-orange-400"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="local"
                  className={`after:content-['*'] after:text-red-600 after:pl-1 ${
                    validatedFields.estado === false &&
                    "animate__animated animate__shakeX text-red-600"
                  }`}
                >
                  {validatedFields.estado === false
                    ? "Campo obrigatório"
                    : "Estado"}
                </label>
                <input
                  type="text"
                  name="estado"
                  value={formData.estado}
                  onChange={userInput}
                  placeholder="Estado"
                  className={`border border-neutral-300 p-3  ${
                    validatedFields.estado === false
                      ? "animate__animated animate__shakeX border-red-600"
                      : "focus:border-orange-400"
                  }`}
                />
              </div>
            </div>
            <button className="px-24 py-4 bg-orange-400 m-auto rounded-xl  font-['PT_Sans'] mt-10 hover:bg-orange-500 duration-200">
              Finalizar cadastro
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
