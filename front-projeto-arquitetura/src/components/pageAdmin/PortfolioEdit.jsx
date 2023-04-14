import fetchApi from "@/hooks/fetchApi";

const ElementsPortfolio = () => {
  const { data } = fetchApi("http://localhost:3000/api/galery");
  console.log(data);
  const activeForm = () => {
    const form = document.querySelector(".form-portfolio");
    const formCancel = document.querySelector(".form-cancel");
    form.style.display = "block";
    formCancel.style.display = "block";
  };
  const desactiveForm = () => {
    const form = document.querySelector(".form-portfolio");
    const formCancel = document.querySelector(".form-cancel");
    form.style.display = "none";
    formCancel.style.display = "none";
  };
  return (
    <>
      <div className="container-register">
        <h2>Editar portfólio:</h2>
        <button className="add-comments" onClick={activeForm}>
          Adicionar novo projeto
        </button>
        <form className="form-portfolio">
          <div>
            <label>Título:</label>
            <input type="text" />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea name="description"></textarea>
          </div>
          <div>
            <label>URL da imagem:</label>
            <input type="text" />
          </div>
          <div>
            <input type="submit" value={"Enviar"} />
          </div>
        </form>
        <button className="form-cancel" onClick={desactiveForm}>
          Cancelar
        </button>
        {data.map((item) => {
          return (
            <div className="galery">
              <h5>
                Title: <span>{item.title}</span>
              </h5>
              <h5>
                Descrição: <span>{item.description}</span>
              </h5>
              <h5>
                URL da imagem: <span>{item.imgUrl}</span>
              </h5>
              <div className="buttons-galery">
                <button style={{backgroundColor: "#ce3333"}}>Deletar Publicação</button>
                <button style={{backgroundColor: "#4ac9b4"}}>Editar Publicação</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ElementsPortfolio;
