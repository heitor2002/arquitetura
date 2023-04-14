import Header from "@/components/Header";
import logo from "../../../public/images/logo_arquitetura.png";
import Image from "next/image";
import Link from "next/link";

const HeaderIndex = () => {
  const interiorDesign =
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  const residentialArchitecture =
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  const commercialArchitecture =
    "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";

  return (
    <>
      <header>
        <div className="background-image">
          <div className="container navigation">
            <Image src={logo} width="150" />
            <Header />
          </div>
          <section className="section-header">
            <div className="container">
              <div className="header-content">
                <h2>Visualizar portfólio e conhecer projetos</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  atque ut debitis consectetur molestias temporibus rem ullam
                  enim, ea iure repudiandae eveniet, voluptas aut nemo doloribus
                  est quos voluptatem vitae.
                </p>
                <Link href={"/portfolio"}><button>Ver portfólio</button></Link>
              </div>
            </div>
          </section>
          <div className="overlay"></div>
        </div>
      </header>
    </>
  );
};

export default HeaderIndex;
