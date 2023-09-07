import mainScreen from "../../assets/imgs/screens/main-screen.png";
import accountScreen from "../../assets/imgs/screens/account-screen.png";
import settingsScreen from "../../assets/imgs/screens/settings-screen.png";

export default function SoftwareScreens() {
  return (
    // Account screen
    <main className="flex flex-col items-center gap-24">
      <div className="flex gap-10 mt-32 w-[70%] font-['Open_Sans'] text-2xl leading-[4rem] text-justify">
        <img
          src={mainScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p>
          A interface principal do software apresenta um conjunto de 8 botões
          localizados no topo da tela, incluindo opções como{" "}
          <span className="font-bold">Adicionar</span>{" "}
          <span className="font-bold">Alterar</span>{" "}
          <span className="font-bold">Excluir</span>,{" "}
          <span className="font-bold">Filtrar</span>,{" "}
          <span className="font-bold">Vendas</span>,{" "}
          <span className="font-bold">Perdas</span> e{" "}
          <span className="font-bold">Trocar Área</span>. Além disso, 4 botões
          adicionais estão dispostos lateralmente, oferecendo a funcionalidade
          de visualizar <span className="font-bold">Estoques</span>,{" "}
          <span className="font-bold">Dashboard</span>,{" "}
          <span className="font-bold">Minha Conta</span> e{" "}
          <span className="font-bold">Configurações</span>.
        </p>
      </div>
      <div className="flex flex-row-reverse gap-10 mt-32 w-[70%] font-['Open_Sans'] text-2xl leading-[4rem] text-justify">
        <img
          src={accountScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p>
          A interface principal do software apresenta um conjunto de 8 botões
          localizados no topo da tela, incluindo opções como{" "}
          <span className="font-bold">Adicionar</span>{" "}
          <span className="font-bold">Alterar</span>{" "}
          <span className="font-bold">Excluir</span>,{" "}
          <span className="font-bold">Filtrar</span>,{" "}
          <span className="font-bold">Vendas</span>,{" "}
          <span className="font-bold">Perdas</span> e{" "}
          <span className="font-bold">Trocar Área</span>. Além disso, 4 botões
          adicionais estão dispostos lateralmente, oferecendo a funcionalidade
          de visualizar <span className="font-bold">Estoques</span>,{" "}
          <span className="font-bold">Dashboard</span>,{" "}
          <span className="font-bold">Minha Conta</span> e{" "}
          <span className="font-bold">Configurações</span>.
        </p>
      </div>
      <div className="flex gap-10 mt-32 w-[70%] font-['Open_Sans'] text-2xl leading-[4rem] text-justify">
        <img
          src={settingsScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p>
          A interface principal do software apresenta um conjunto de 8 botões
          localizados no topo da tela, incluindo opções como{" "}
          <span className="font-bold">Adicionar</span>{" "}
          <span className="font-bold">Alterar</span>{" "}
          <span className="font-bold">Excluir</span>,{" "}
          <span className="font-bold">Filtrar</span>,{" "}
          <span className="font-bold">Vendas</span>,{" "}
          <span className="font-bold">Perdas</span> e{" "}
          <span className="font-bold">Trocar Área</span>. Além disso, 4 botões
          adicionais estão dispostos lateralmente, oferecendo a funcionalidade
          de visualizar <span className="font-bold">Estoques</span>,{" "}
          <span className="font-bold">Dashboard</span>,{" "}
          <span className="font-bold">Minha Conta</span> e{" "}
          <span className="font-bold">Configurações</span>.
        </p>
      </div>
    </main>
  );
}
