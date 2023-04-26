import Header from "@/components/patternHeader/Header";
import logo from "../../../public/images/logo_arquitetura.png";
import Image from "next/image";
import Link from "next/link";

const HeaderIndex = () => {
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
