import fetchApi from "@/hooks/fetchApi";
import { useState } from "react";
import EditSocialProof from "./EditSocialProof";

const SocialProof = () => {
  const { data } = fetchApi("http://localhost:5000/social-proof");
  const [dataSocialProof, setDataSocialProof] = useState({
    name: "",
    message: "",
  });

  const onChangeInput = (e) => {
    setDataSocialProof({ ...dataSocialProof, [e.target.name]: e.target.value });
  };

  const handleSubmitAddSocialProof = async () => {
    try {
      fetch("http://localhost:5000/social-proof", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSocialProof),
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-register">
        <h2>Prova social:</h2>
        <form
          className="form-social-proof"
          onSubmit={handleSubmitAddSocialProof}
        >
          <div>
            <label>Nome:</label>
            <input
              type="text"
              required
              name="name"
              value={dataSocialProof.name}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <label>Mensagem:</label>
            <textarea
              required
              name="message"
              value={dataSocialProof.message}
              onChange={onChangeInput}
            ></textarea>
          </div>
          <div>
            <input type="submit" value={"Enviar"} />
          </div>
        </form>
        {data.map((user) => {
          const {id, name, message} = user;
          return <EditSocialProof id={id} name={name} message={message}/>;
        })}
      </div>
    </>
  );
};

export default SocialProof;