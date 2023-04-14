import fetchApi from "@/hooks/fetchApi";

const SocialProof = () => {
  const { data } = fetchApi("http://localhost:3000/api/socialProof");
  console.log(data);
  return (
    <>
      <div className="container-register">
        <h2>Prova social:</h2>
        <form className="form-social-proof">
          <div>
            <label>Nome:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Mensagem:</label>
            <textarea required></textarea>
          </div>
          <div>
            <input type="submit" value={"Enviar"} />
          </div>
        </form>
        {data.map((message) => {
          return (
            <>
              <div className="messages">
                <h5>{message.name}</h5>
                <p>{message.message}</p>
                <div className="buttons">
                  <button className="delete-message">Excluir</button>
                  <button className="edit-message">Editar</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SocialProof;
