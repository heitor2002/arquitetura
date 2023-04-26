import Aos from "aos";
import { useEffect } from "react";

const MosaicArts = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  })
    const interiorImg = "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    const interiorImg2 = "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    return (
      <>
        <section className="mosaic-informations">
            <div className="container">
                <div className="flex-mosaic">
                    <img src={interiorImg} alt="Design interior" data-aos="fade-right"/>
                    <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur cupiditate unde aut neque ipsam enim, consequuntur illo quidem veniam quasi ex earum eum iure voluptates laborum ad perspiciatis, dolorum velit.</p>
                </div>
                <div className="flex-mosaic reverse-order">
                    <img src={interiorImg2} alt="Design interior" data-aos="fade-up"/>
                    <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur cupiditate unde aut neque ipsam enim, consequuntur illo quidem veniam quasi ex earum eum iure voluptates laborum ad perspiciatis, dolorum velit.</p>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default MosaicArts;
  