import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const EditSocialProof = (props) => {
  useEffect(() => {
    const editButton = document.querySelectorAll(".edit-message");
    const editForm = document.querySelectorAll(".edit-form");
    const cancelButton = document.querySelectorAll(".cancel-edit-proof")
  
    editButton.forEach((item, index) => {
      item.addEventListener("click", () => {
        editForm[index].style.display = "block";
        cancelButton[index].style.display = "block";
      });
    });

    cancelButton.forEach((item, index) => {
      item.addEventListener("click", () => {
        editForm[index].style.display = "none";
        cancelButton[index].style.display = "none";
      })
    })
  })

  const [dataEditForm, setDataEditForm] = useState({
    name: props.name,
    message: props.message
  })

  const onChangeInput = (e) => {
    setDataEditForm({...dataEditForm, [e.target.name]:e.target.value})
  }
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
            <input type="text" name="name" value={dataEditForm.name} onChange={onChangeInput}/>
          </div>
          <div>
            <label>Mensagem</label>
            <textarea name="message" value={dataEditForm.message} onChange={onChangeInput}></textarea>
          </div>
          <div>
            <input type="submit" value={"Atualizar"} />
          </div>
        </form>
          <button className="cancel-edit-proof">Cancelar edição</button>
      </div>
    </>
  );
};

export default EditSocialProof;
