import { BsFillTrashFill } from "react-icons/bs";

const EditSocialProof = (props) => {
  const editButton = document.querySelectorAll(".edit-message");
  const editForm = document.querySelectorAll(".edit-form");

  editButton.forEach((item, index) => {
    item.addEventListener("click", () => {
      editForm[index].style.display = "block";
    });
  });
  return (
    <>
      <div className="messages">
        <h5>{props.name}</h5>
        <p>{props.message}</p>
        <div className="buttons">
          <button className="delete-message">
            <BsFillTrashFill />
          </button>
          <button className="edit-message">Editar</button>
        </div>
        <form className="edit-form">
          <div>
            <label>Nome</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Mensagem</label>
            <textarea name="message"></textarea>
          </div>
          <div>
            <input type="submit" value={"Atualizar"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditSocialProof;
