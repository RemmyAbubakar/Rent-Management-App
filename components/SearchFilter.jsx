import {MdLocationPin} from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { AiFillDollarCircle } from "react-icons/ai";

function SearchFilter() {
  return (
    <form>
      <div className="flex flex-wrap justify-center items-center">
        <div className="border-2 border-black mt-7 flex justify-center w-[50%] rounded-xl">
          <div className="flex flex-wrap">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="h-14 outline-none rounded-xl font-second"
            />
            <MdLocationPin size={25} className="mt-4 mr-4 border-r-2" />
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Type"
              className="h-14 outline-none rounded-xl font-second"
            />
            <TiHome size={25} className="mt-4 mr-4 border-r-2" />
            <input
              type="text"
              id="Budget"
              name="Budget"
              placeholder="Budget"
              className="h-14 outline-none rounded-xl font-second"
            />
            <AiFillDollarCircle size={25} className="mt-4" />
          </div>
        </div>
        <button className="mt-6 ml-3 w-32 h-14 rounded-full bg-blue-900 text-white">Search</button>
      </div>
    </form>
  );
}

export default SearchFilter;