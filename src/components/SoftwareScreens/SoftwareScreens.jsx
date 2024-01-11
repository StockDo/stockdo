import mainScreen from "../../assets/imgs/screens/main-screen.png";
import accountScreen from "../../assets/imgs/screens/account-screen.png";
import settingsScreen from "../../assets/imgs/screens/settings-screen.png";

export default function SoftwareScreens() {
  return (
    // Account screen
    <main className="flex flex-col items-center gap-24">
      <div className="flex flex-wrap justify-center items-center gap-10 mt-32 w-[70%] font-main text-2xl leading-[4rem] text-justify">
        <img
          src={mainScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p className="max-w-[50%] max-2xl:max-w-[50rem] max-sm:text-center max-sm:text-lg max-sm:leading-[4rem]">
          A interface principal do software apresenta um conjunto de 8 botões
          localizados no topo da tela, incluindo opções como{" "}
          <strong>Adicionar</strong> <strong>Alterar</strong>{" "}
          <strong>Excluir</strong>, <strong>Filtrar</strong>,{" "}
          <strong>Vendas</strong>, <strong>Perdas</strong> e{" "}
          <strong>Trocar Área</strong>. Além disso, 4 botões adicionais estão
          dispostos lateralmente, oferecendo a funcionalidade de visualizar{" "}
          <strong>Estoques</strong>, <strong>Dashboard</strong>,{" "}
          <strong>Minha Conta</strong> e <strong>Configurações</strong>.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center flex-row-reverse gap-10 mt-32 w-[70%] font-main text-2xl leading-[4rem] text-justify">
        <img
          src={accountScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p className="max-w-[50%] max-2xl:max-w-[50rem] max-sm:text-center max-sm:text-lg max-sm:leading-[4rem]">
          A tela <strong>Minha Conta</strong> exibe informações essenciais sobre
          o usuário, incluindo seu <strong>Nome</strong>, <strong>CPF</strong>,{" "}
          <strong>Endereço de email</strong>,{" "}
          <strong>Número de telefone</strong> e{" "}
          <strong>Cargo do usuário</strong>. Esses detalhes são facilmente
          acessíveis e editáveis, proporcionando uma experiência de usuário
          completa e personalizada.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-32 w-[70%] font-main text-2xl leading-[4rem] text-justify">
        <img
          src={settingsScreen}
          alt="Account screen"
          width={"500px"}
          className="shadow-xl"
        />
        <p className="max-w-[50%] max-2xl:max-w-[50rem] max-sm:text-center max-sm:text-lg max-sm:leading-[4rem]">
          Dentro da tela de <strong>Configurações</strong>, os usuários podem
          acessar opções relacionadas ao <strong>software</strong>, como{" "}
          <strong>Atalhos do teclado</strong>,{" "}
          <strong>Configurações de idioma</strong> e{" "}
          <strong>Verificar atualizações</strong> disponíveis. Essas
          configurações permitem personalizar a experiência de uso do software
          de acordo com as preferências e necessidades individuais.
        </p>
      </div>
    </main>
  );
}
