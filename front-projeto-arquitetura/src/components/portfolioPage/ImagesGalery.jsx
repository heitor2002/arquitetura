import FetchApi from "@/hooks/fetchApi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LoadingPage } from "../LoadingPage";
import { ErrorFetchMessage } from "../ErrorFetchMessage";

const ImagesGalery = () => {
  const { data, isPending, error } = FetchApi("http://localhost:5000/portfolio-editt");

  const [moreImages, setMoreImages] = useState(7);

  const addNewImages = () => {
    setMoreImages(moreImages + 3);
  };
  const [titleModal, setTitleModal] = useState("");
  const [descriptionModal, setDescriptionModal] = useState("");
  const [imgUrlModal, setImgUrlModal] = useState("");

  const activeModal = (title, description, image) => {
    const modal = document.querySelector(".modal-background");
    setTitleModal(title);
    setDescriptionModal(description);
    setImgUrlModal(image);
    modal.style.display = "flex"
  };

  const desactiveModal = () => {
    const modal = document.querySelector(".modal-background");
    modal.style.display = "none"
  }

  return (
    <>
      <section className="galery">
        <div className="container">
          <h2>
            Conheça um pouco mais da <i>galeria de projetos</i>
          </h2>
          <div className="flex-galery">
            {error && <ErrorFetchMessage errMessage={error}/>}
            {isPending && <LoadingPage />}
            {data.length > 0 && data.slice(0, moreImages).map((item, index) => {
              return (
                <>
                  <div
                    className="image-information"
                    onClick={() =>
                      activeModal(item.title, item.description, item.imgUrl)
                    }
                  >
                    <img src={item.imgUrl} alt={item.title} />
                    <div className="information">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {/* <dialog className="dialog">
                    <h2>{item.title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad eius doloribus qui ipsa illum alias consectetur, quam
                      libero est veritatis necessitatibus molestias, optio
                      tempora laboriosam id ex, sapiente iusto provident!
                    </p>
                  </dialog> */}
                </>
              );
            })}
          </div>
          <button onClick={addNewImages}>Ver mais</button>
        </div>
        <div className="modal-background">
          <div className="modal">
            <div className="close-icon" onClick={desactiveModal}><AiOutlineClose /></div>
            <img src={imgUrlModal} alt="" />
            <div className="modal-informations">
              <h2>{titleModal}</h2>
              <p>{descriptionModal}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImagesGalery;
