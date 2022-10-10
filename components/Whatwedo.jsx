import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {HiOutlineCurrencyDollar} from "react-icons/hi"
import { FcProcess } from "react-icons/fc";
import { AiOutlinePullRequest } from "react-icons/ai";
import { VscSymbolProperty } from "react-icons/vsc";

function Whatwedo() {
  return (
    <div className="">
      <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-second mt-11"> WHY CHOOSE US ?</h2>
      </div>
      <Fade left>
        <div className="border border-black mx-[48%] flex justify-center items-center mt-4 mb-4"></div>
      </Fade>
      <div className="flex justify-center items-center flex-wrap p-[4rem] gap-10">
        <Fade up>
          <div className="m-[1rem] p-[1.5rem] text-left rounded-lg transition-all max-w-[400px]">
            <div className="flex justify-center items-center mb-6">
              <HiOutlineCurrencyDollar size={70} />
            </div>
            <h2 className="mb-4 font-second text-xl flex justify-center font-medium text-blue-900">
              Best Price
            </h2>
            <p className="font-second">
              We will provide the best price for you from the best quality we
              give we will you a special price conpared to other places and we
              will give you other bounees.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="m-[1rem] p-[1.5rem] text-left rounded-lg transition-all max-w-[400px]">
            <div className="flex justify-center items-center mb-6">
              <FcProcess size={70} />
            </div>
            <h2 className="mb-4 font-second text-xl flex justify-center font-medium text-blue-900">
              Quick Process
            </h2>
            <p className="font-second">
              An easy process out advantage you dont have to bother taking care
              of all your needs. we will be ready to help until it's finished.
            </p>
          </div>
        </Fade>

        <Fade left>
          <div className="m-[1rem] p-[1.5rem] text-left rounded-lg transition-all max-w-[400px]">
            <div className="flex justify-center items-center mb-6">
              <AiOutlinePullRequest size={70} />
            </div>
            <h2 className="mb-4 font-second text-xl flex justify-center font-medium text-blue-900">
              Custom by Request
            </h2>
            <p className="font-second">
              You can also change according to your request with the available
              themes ranging from interior, exterior and others according to
              your request.
            </p>
          </div>
        </Fade>

        <Zoom>
          <div className="m-[1rem] p-[1.5rem] text-left rounded-lg transition-all max-w-[400px]">
            <div className="flex justify-center items-center mb-6">
              <VscSymbolProperty size={70} />
            </div>
            <h2 className="mb-4 font-second text-xl flex justify-center font-medium text-blue-900">
              Property Insurance
            </h2>
            <p className="font-second">
              Your property Insurance is really needed in order to provide
              protection to you and your family, we will provide that protection
              easily.
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Whatwedo;
