import Architect from "../../public/images/arquiteta.png";

import Image from "next/image";
import Link from "next/link";

const ContactCall = () => {
  return (
    <>
      <section className="contact-call">
        <div className="container">
          <div className="flex-contact-call">
            <div className="calling">
              <h2>Quer <span>conhecer</span> mais e tornar seu <span>sonho</span> uma <span>realidade</span>?</h2>
              <Link href={"/orcamento"}><button>Fazer orçamento</button></Link>
            </div>
            <Image src={Architect} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCall;
