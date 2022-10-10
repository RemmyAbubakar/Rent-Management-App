
import Fade from "react-reveal/Fade";

function KnowUs() {
  return (
    <div className="bg-gray-100 rounded-[6rem]">
      <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-second mt-11"> ABOUT US</h2>
      </div>
      <Fade left>
        <div className="border border-black mx-[48%] flex justify-center items-center mt-4 mb-4"></div>
      </Fade>
      <div className="flex flex-col items-center md:flex-row h-[80vh] p-14 mt-3">
        <div className="flex justify-center items-center">
          <Fade left>
            <div className="p-14">
              <h3 className="text-4xl mb-2 font-second font-normal">
                RentAvenue
              </h3>
              <p className="font-second">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alterationin some form, by
                injected humour, or <br />
                randomised words which don't look even slightly
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex justify-center items-center">
          <Fade bottom>
            <div className="">
              <img
                src="./images/lux3.jpg"
                className=" rounded-b-[4rem] rounded-tr-[4rem] hover:scale-110 duration-200"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
