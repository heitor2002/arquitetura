import ReactCompareImage from "react-compare-image";

const ComparisonImages = (props) => {
  return (
    <>
      <div className="comparison">
        <ReactCompareImage
          leftImage={props.leftImage}
          rightImage={props.rightImage}
        />
        <i>{props.description}</i>
      </div>
    </>
  );
};

export default ComparisonImages;
