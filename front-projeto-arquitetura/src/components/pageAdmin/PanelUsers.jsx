import fetchApi from "@/hooks/fetchApi";

const PanelUsers = () => {
  const { data } = fetchApi("http://localhost:5000/clients");
  console.log(data);

  const handleDelete = async (id) => {
    console.log(id);
    try{
      fetch(`http://localhost:5000/clients/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }).then(() => {
        window.location.reload()
      })
    }catch(err){
      console.log("erro")
    }
  };
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
                  backgroundColor: user.read === 1 ? "#d4fcd4" : "white",
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
                  <button
                    className="delete-message"
                    onClick={() => handleDelete(user.id)}
                  >
                    Deletar cadastro
                  </button>
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
