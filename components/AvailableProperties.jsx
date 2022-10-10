import Fade from "react-reveal/Fade";

function AvailableProperties() {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <h3 className="text-3xl font-second">
          Popular Residences
        </h3>
      </div>
      <Fade left>
        <div className="border border-black mx-[47%] flex justify-center items-center mt-4 mb-4"></div>
      </Fade>
    </div>
  );
}

export default AvailableProperties;
