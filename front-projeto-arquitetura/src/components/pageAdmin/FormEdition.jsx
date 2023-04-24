import { useState } from "react";

const FormEdition = (props) => {
  const editButton = document.querySelectorAll(".edit-button");
  const editForm = document.querySelectorAll(".edit-post");
  const deleteButton = document.querySelectorAll(".delete-project");

  editButton.forEach((item, index) => {
    item.addEventListener("click", () => {
      editForm[index].style.display = "flex"
      deleteButton[index].style.display = "block"
    });
  });

  const [editPortfolio, setEditPortfolio] = useState({
    title: props.title,
    description: props.description,
    imgUrl: props.imgUrl,
  });

  const onChangeInput = (e) => {
    setEditPortfolio({ ...editPortfolio, [e.target.name]: e.target.value });
  };

  //ENVIO DO FORMULÁRIO PARA DB.

  const handleSubmit = async (id, title, description, imgUrl) => {
    try{
      fetch("http://localhost:5000/portfolio-edit", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id,title,description, imgUrl})
      })
    }catch(err){
      console.log(err)
    }

  }

  return (
    <>
      <div className="galery">
        <h5>
          Título: <span>{props.title}</span>
        </h5>
        <h5>
          Descrição: <span>{props.description}</span>
        </h5>
        <h5>
          URL da imagem: <span>{props.imgUrl}</span>
        </h5>
        <button className="edit-button">Editar projeto</button>
        <form className="edit-post" onSubmit={() => handleSubmit(props.id, editPortfolio.title, editPortfolio.description, editPortfolio.imgUrl)}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={editPortfolio.title}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <input
              type="text"
              name="description"
              value={editPortfolio.description}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <label>URL da imagem:</label>
            <input
              type="text"
              name="imgUrl"
              value={editPortfolio.imgUrl}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <input type="submit" value={"Confirmar atualização"} />
          </div>
        </form>
        <button className="delete-project">Deletar Projeto</button>
      </div>
    </>
  );
};

export default FormEdition;
