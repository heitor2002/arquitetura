import Link from "next/link";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="contact-footer">
            <h2>Atendimento a clientes em diversas áreas.</h2>
            <p>
              Civil Estrutural | Arquitetônico | Mecânico Industrial |
              Hidráulico | Elétrico
            </p>
            <div className="contact">
              <h5>E-mail: emailwix@mail.com</h5>
              <h5>WhatsApp: +55 (11) 99999-9999</h5>
            </div>
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
      </footer>
    </>
  );
};

export default Footer;
