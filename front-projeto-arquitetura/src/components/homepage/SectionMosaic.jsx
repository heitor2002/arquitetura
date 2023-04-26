import Comments from "./Comments";
import Mosaic from "./methodologies/Mosaic";

const SectionMosaic = () => {
  
  return (
    <>
      <section className="mosaic-comments">
        <div className="container">
          <h5>Conheça nossa metodologia de trabalho</h5>
          {/* flex-mosaic-comments */}
          <div className="flex-mosaic-comments">
            <Mosaic />
            <Comments />
          </div>
          {/* flex-mosaic-comments */}
        </div>
      </section>
    </>
  );
};

export default SectionMosaic;
