import Link from "next/link";

const NavigationPanel = () => {
  return (
    <>
      <div className="buttons">
        <Link href={"/secret-page/portfolioEdit"}>
          <button>Editar portfólio</button>
        </Link>
        <Link href={"/secret-page/social"}>
          <button>Editar prova social</button>
        </Link>
        <Link href={"/secret-page/clientes"}>
          <button>Cadastros</button>
        </Link>
      </div>
    </>
  );
};
export default NavigationPanel;
