import Footer from "@/components/Footer";
import Navigation from "@/components/patternHeader/Navigation";
import ComparisonImages from "@/components/portfolioPage/ComparisonImages";
import ImagesGalery from "@/components/portfolioPage/ImagesGalery";
import Aos from "aos";
import Head from "next/head";
import { useEffect } from "react";

const Projetos = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  })
  
  const image_1 =
    "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
  const image_2 =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  const imageMainProject =
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="projects-page">
        <div className="menu-projects-page">
          <Navigation />
        </div>
        <div className="container">
          <section className="main-projects">
            <main>
              <h2>Conheça um pouco das nossas atividades</h2>
              <div className="flex-main-project">
                <img src={imageMainProject} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  pariatur ipsa, minima dolorem eum eos provident, tempora
                  laborum aperiam vitae nesciunt. Magni libero minus expedita
                  possimus officia porro magnam aperiam.
                </p>
              </div>
            </main>
          </section>
        </div>
        <section className="before-after">
          <div className="container">
            <div className="compare-images">
              <h2 data-aos="fade-right">
                Não se trata <span>apenas de arte</span>, se trata de <span>transformação!</span>
              </h2>
              <div className="slide-comparison-image" data-aos="fade-up">
                <ComparisonImages
                  description="Movimente a linha para ver a transformação."
                  leftImage={image_1}
                  rightImage={image_2}
                />
              </div>
            </div>
            <div className="flex-comparison-images" >
              <div className="slide-comparison-image" data-aos="fade-down">
                <ComparisonImages
                  description="Movimente a linha para ver a transformação."
                  leftImage={image_1}
                  rightImage={image_2}
                />
              </div>
              <div className="slide-comparison-image" data-aos="fade-right">
                <ComparisonImages
                  description="Movimente a linha para ver a transformação."
                  leftImage={image_1}
                  rightImage={image_2}
                />
              </div>
            </div>
          </div>
        </section>
        <ImagesGalery />
      </div>
      <Footer />
    </>
  );
};

export default Projetos;
