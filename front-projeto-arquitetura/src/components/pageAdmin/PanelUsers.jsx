import fetchApi from "@/hooks/fetchApi";

const PanelUsers = () => {
  const { data } = fetchApi("http://localhost:5000/clients");
  console.log(data);

  const handleUpdata = async (id) => {
    try {
      fetch(`http://localhost:5000/clients/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id, read:1}),
      }).then(() => {
        window.location.reload()
      })
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      fetch(`http://localhost:5000/clients/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log("erro");
    }
  };
  return (
    <>
      <div className="container-register">
        <h2>Cadastros:</h2>
        {data.map((user) => {
          const {id, name, email, phone, subject, message, read} = user
          return (
            <>
              <div
                className="registers"
                style={{
                  backgroundColor: read === 1 ? "#d4fcd4" : "white",
                }}
              >
                <h5>
                  Nome: <span>{name}</span>
                </h5>
                <h5>
                  E-mail: <span>{email}</span>
                </h5>
                <h5>
                  Celular: <span>{phone}</span>
                </h5>
                <h5>
                  Assunto: <span>{subject}</span>
                </h5>
                <h5>
                  Mensagem: <span>{message}</span>
                </h5>
                <div className="buttons">
                  <button
                    className="delete-message"
                    onClick={() => handleDelete(id)}
                  >
                    Deletar cadastro
                  </button>
                  {!user.read && (
                    <button
                      className="read-message"
                      onClick={() => handleUpdata(id)}
                    >
                      Marcar como lida
                    </button>
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
