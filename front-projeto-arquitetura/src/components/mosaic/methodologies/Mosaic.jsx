import Aos from "aos";
import { useEffect } from "react";

const Mosaic = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div className="flex-mosaic" data-aos="fade-right">
        <div className="box-methodologies" >
          <h2>1.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ligula, ornare vitae pharetra sollicitudin, consectetur eget quam.
            Vestibulum aliquam a erat vel maximus.
          </p>
        </div>
        <div className="box-methodologies">
          <h2>2.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ligula, ornare vitae pharetra sollicitudin, consectetur eget quam.
            Vestibulum aliquam a erat vel maximus.
          </p>
        </div>
        <div className="box-methodologies">
          <h2>3.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ligula, ornare vitae pharetra sollicitudin, consectetur eget quam.
            Vestibulum aliquam a erat vel maximus.
          </p>
        </div>
        <div className="box-methodologies">
          <h2>4.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ligula, ornare vitae pharetra sollicitudin, consectetur eget quam.
            Vestibulum aliquam a erat vel maximus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mosaic;
