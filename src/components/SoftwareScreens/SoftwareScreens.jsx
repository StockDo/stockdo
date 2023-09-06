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
          <span>Adicionar</span> <span>Alterar</span> <span>Excluir</span>,{" "}
          <span>Filtrar</span>, <span>Vendas</span>, <span>Perdas</span> e{" "}
          <span>Trocar Área</span>. Além disso, 4 botões adicionais estão
          dispostos lateralmente, oferecendo a funcionalidade de visualizar{" "}
          <span>Estoques</span>, <span>Dashboard</span>,{" "}
          <span>Minha Conta</span> e <span>Configurações</span>.
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
          <span>Adicionar</span> <span>Alterar</span> <span>Excluir</span>,{" "}
          <span>Filtrar</span>, <span>Vendas</span>, <span>Perdas</span> e{" "}
          <span>Trocar Área</span>. Além disso, 4 botões adicionais estão
          dispostos lateralmente, oferecendo a funcionalidade de visualizar{" "}
          <span>Estoques</span>, <span>Dashboard</span>,{" "}
          <span>Minha Conta</span> e <span>Configurações</span>.
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
          <span>Adicionar</span> <span>Alterar</span> <span>Excluir</span>,{" "}
          <span>Filtrar</span>, <span>Vendas</span>, <span>Perdas</span> e{" "}
          <span>Trocar Área</span>. Além disso, 4 botões adicionais estão
          dispostos lateralmente, oferecendo a funcionalidade de visualizar{" "}
          <span>Estoques</span>, <span>Dashboard</span>,{" "}
          <span>Minha Conta</span> e <span>Configurações</span>.
        </p>
      </div>
    </main>
  );
}
