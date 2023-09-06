import SignupBackground from "../assets/imgs/warehouse-bg.png";

export default function Signup() {
  return (
    <main>
      <div className="flex items-center">
        <img src={SignupBackground} width="800px" alt="Warehouse background" />
        <form action="" method="post" className="flex flex-col">
          <input
            type="text"
            name=""
            className="border-2 border-black px-12 py-2"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name=""
            className="border-2 border-black px-12 py-2"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name=""
            className="border-2 border-black px-12 py-2"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name=""
            className="border-2 border-black px-12 py-2"
            placeholder="Nome completo"
          />
        </form>
      </div>
    </main>
  );
}
