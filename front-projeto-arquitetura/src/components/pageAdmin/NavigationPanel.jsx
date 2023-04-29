import Link from "next/link";
import { useRouter } from "next/router";
import { ImExit } from "react-icons/im";

const NavigationPanel = () => {
  const router = useRouter()
  const logOut = (e) => {
    cookieStore.getAll().then((cookies) =>
      cookies.forEach((cookie) => {
        cookieStore.delete(cookie.name);
      })
    ).then(() => {
      router.push("/")
    })
  };
  return (
    <>
      <div className="buttons">
      <Link href={"/"}>
          <button>Página Inicial</button>
        </Link>
        <Link href={"/secret-page/portfolioEdit"}>
          <button>Editar portfólio</button>
        </Link>
        <Link href={"/secret-page/social"}>
          <button>Editar prova social</button>
        </Link>
        <Link href={"/secret-page/clientes"}>
          <button>Cadastros</button>
        </Link>
        <Link href={"javascript:void(0)"}>
          <button
            style={{
              backgroundColor: "#e85941",
              color: "white",
            }}
            onClick={logOut}
          >
            Fazer logout <ImExit />
          </button>
        </Link>
      </div>
    </>
  );
};
export default NavigationPanel;
