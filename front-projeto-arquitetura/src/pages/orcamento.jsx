import Navigation from "@/components/headerIndex/Navigation";
import fetchApi from "@/hooks/fetchApi";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Orcamento = () => {
  const { data } = fetchApi("http://localhost:5000/clients");
  console.log(data)
  const [dataClient, setDataClient] = useState({
    name    : "",
    email   : "",
    phone   : "",
    city    : "",
    subject : "",
    message : "",
    read    : 0
  })

  const onChangeInput = async e => setDataClient({...dataClient, [e.target.name]: e.target.value})

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(dataClient)

    try{
      fetch("http://localhost:5000/clients", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dataClient)
      })
    }catch(err){
      console.log("Erro")
    }
  }
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
            <form onSubmit={handleSubmit}>
              <h2>Entre em contato</h2>
              <div className="inputs">
                <label>Nome</label>
                <input type="text" required name="name" onChange={onChangeInput} value={dataClient.name}/>
              </div>
              <div className="inputs">
                <label>E-mail</label>
                <input type="email" name="email" required onChange={onChangeInput} value={dataClient.email} />
              </div>
              <div className="inputs">
                <label>Celular</label>
                <input type="number" name="phone" required onChange={onChangeInput} value={dataClient.phone} />
              </div>
              <div className="inputs">
                <label>Cidade</label>
                <input type="text" name="city" required onChange={onChangeInput} value={dataClient.city}/>
              </div>
              <div className="inputs">
                <label>Assunto</label>
                <input type="text" name="subject" required onChange={onChangeInput} value={dataClient.subject}/>
              </div>
              <div className="inputs">
                <label>
                  Mensagem <span>(opcional)</span>
                </label>
                <textarea name="message" onChange={onChangeInput} value={dataClient.message} style={{padding: "4px"}}></textarea>
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
