import fetchApi from "@/hooks/fetchApi";
import { useState } from "react";
import FormEdition from "./FormEdition";

const ElementsPortfolio = () => {
  const { data } = fetchApi("http://localhost:5000/portfolio-edit");

  const [searchTerm, setSearchTerm] = useState("");

  const [portfolioData, setPortfolioData] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  const onChangeInput = (e) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = async () => {
    try {
      fetch("http://localhost:5000/portfolio-edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(portfolioData),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container-register">
        <h2>Editar portfólio:</h2>
        <div className="inputs-search">
          <button className="add-comments" onClick={activeForm}>
            Adicionar novo projeto
          </button>
          <input
            type="text"
            placeholder="Pesquisar título do projeto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <form className="form-portfolio" onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              onChange={onChangeInput}
              value={portfolioData.title}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              name="description"
              onChange={onChangeInput}
              value={portfolioData.description}
            ></textarea>
          </div>
          <div>
            <label>URL da imagem:</label>
            <input
              type="text"
              name="imgUrl"
              onChange={onChangeInput}
              value={portfolioData.imgUrl}
            />
          </div>
          <div>
            <input type="submit" value={"Enviar"} name="acao" />
          </div>
        </form>
        <button className="form-cancel" onClick={desactiveForm}>
          Cancelar
        </button>
        {data
          .filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => {
            const { id, title, description, imgUrl } = item;
            return (
              <FormEdition
                title={title}
                description={description}
                imgUrl={imgUrl}
                id={id}
              />
            );
          })}
      </div>
    </>
  );
};

export default ElementsPortfolio;
