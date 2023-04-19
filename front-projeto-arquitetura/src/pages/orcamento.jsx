import Navigation from "@/components/headerIndex/Navigation";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Orcamento = () => {
  return (
    <>
      <div className="menu-page-budget">
        <div className="container">
          <Navigation />
        </div>
      </div>
      <section className="background-form">
        <div className="container">
          <div className="form">
            <div className="personal-information">
              <div className="container-personal-information">
                <h2>Atendimento a clientes em diversas áreas.</h2>
                <p>
                  Civil Estrutural | Arquitetônico | Mecânico Industrial |
                  Hidráulico | Elétrico
                </p>
                <div className="contact">
                  <h5>E-mail: emailwix@mail.com</h5>
                  <h5>WhatsApp: +55 (11) 99999-9999</h5>
                </div>
                <div className="social-media-icons">
                  <Link href={"/"}>
                    <BsInstagram />
                  </Link>
                  <Link href={"/"}>
                    <BsFacebook />
                  </Link>
                  <Link href={"/"}>
                    <BsLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <form>
              <h2>Entre em contato</h2>
              <div className="inputs">
                <label>Nome</label>
                <input type="text" required />
              </div>
              <div className="inputs">
                <label>E-mail</label>
                <input type="email" required />
              </div>
              <div className="inputs">
                <label>Celular</label>
                <input type="number" required />
              </div>
              <div className="inputs">
                <label>Cidade</label>
                <input type="text" required />
              </div>
              <div className="inputs">
                <label>Assunto</label>
                <input type="text" required />
              </div>
              <div className="inputs">
                <label>
                  Mensagem <span>(opcional)</span>
                </label>
                <textarea></textarea>
              </div>
              <div className="inputs">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orcamento;
