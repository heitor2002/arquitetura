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
    id: props.id,
    name: props.name,
    message: props.message
  })

  const onChangeInput = (e) => {
    setDataEditForm({...dataEditForm, [e.target.name]:e.target.value})
  }

  const handleSubmitUpdateForm = async () => {
    try{
      fetch("http://localhost:5000/social-proof", {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dataEditForm)
      }).then(() => {
        window.location.reload()
      })
    }catch(err){
      console.log(err)
    }
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
        <form className="edit-form" onSubmit={handleSubmitUpdateForm}>
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
