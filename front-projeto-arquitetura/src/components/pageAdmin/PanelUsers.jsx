import fetchApi from "@/hooks/fetchApi";

const PanelUsers = () => {
  const { data } = fetchApi("http://localhost:5000/clients");
  return (
    <>
      <div className="container-register">
        <h2>Cadastros:</h2>
        {data.map((user) => {
          return (
            <>
              <div
                className="registers"
                style={{
                  backgroundColor: user.read === true ? "#d4fcd4" : "white",
                }}
              >
                <h5>
                  Nome: <span>{user.name}</span>
                </h5>
                <h5>
                  E-mail: <span>{user.email}</span>
                </h5>
                <h5>
                  Celular: <span>{user.phone}</span>
                </h5>
                <h5>
                  Assunto: <span>{user.subject}</span>
                </h5>
                <h5>
                  Mensagem: <span>{user.message}</span>
                </h5>
                <div className="buttons">
                  <button className="delete-message">Deletar cadastro</button>
                  {!user.read && (
                    <button className="read-message">Marcar como lida</button>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PanelUsers;
