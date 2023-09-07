import SignupBackground from "../assets/imgs/signup-bg.png";

export default function Signup() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="flex items-center shadow-xl rounded-xl">
        <div className="bg-slate-400 rounded-s-xl p-12">
          <img
            src={SignupBackground}
            width="595px"
            alt="Warehouse background"
          />
        </div>
        <div className="flex flex-col p-12 bg-white rounded-e-xl">
          <h1 className="text-3xl font-['PT_Sans']">Cadastre-se aqui</h1>
          <form
            action=""
            method="post"
            className="flex flex-col mt-5 font-['Open_Sans']"
            autoComplete="off">
            <label htmlFor="" className="font-bold">
              Nome completo
            </label>
            <input
              type="text"
              name=""
              className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 pr-32 py-2 rounded-md outline-none"
              // placeholder="Nome completo"
            />
            <label htmlFor="" className=" font-bold">
              CNPJ
            </label>
            <input
              type="text"
              name=""
              className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 py-2 rounded-md outline-none"
              // placeholder="CNPJ"
            />
            <label htmlFor="" className=" font-bold">
              E-mail
            </label>
            <input
              type="text"
              name=""
              className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 py-2 rounded-md outline-none"
              // placeholder="Senha"
            />
            <label htmlFor="" className=" font-bold">
              Senha
            </label>
            <input
              type="text"
              name=""
              className="mb-5 mt-1 border border-[rgba(0,0,0,0.25)] pl-2 py-2 rounded-md outline-none"
              // placeholder="Repita a senha"
            />
            <label htmlFor="" className=" font-bold">
              Repetir senha
            </label>
            <input
              type="text"
              name=""
              className="mt-1 border border-[rgba(0,0,0,0.25)] pl-2 py-2 rounded-md outline-none"
              // placeholder="Repita a senha"
            />
            <button
              type="submit"
              className="bg-orange-400 mt-7 py-2 rounded-lg  font-bold">
              Cadastrar
            </button>
            <span className="m-auto mt-4">
              Já possui uma conta?{" "}
              <a href="" className="text-orange-700 hover:underline">
                Entre aqui.
              </a>
            </span>
          </form>
        </div>
      </div>
    </main>
  );
}
