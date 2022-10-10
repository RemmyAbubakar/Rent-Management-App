
import {MdLocationPin} from "react-icons/md"
import Link from "next/link"
import Fade from "react-reveal/Fade";

function YouMayAlso() {
  return (
    <div>
      <div className="flex justify-center mt-14">
        <h2 className="text-xl font-second"> YOU MAY ALSO LIKE </h2>
      </div>
      <Fade left>
        <div className="border border-black mx-[48%] flex justify-center items-center mt-4 mb-4"></div>
      </Fade> 
      <div className="flex flex-wrap gap-10 justify-center p-10">
        <div className="max-w-sm bg-white  dark:bg-white hover:scale-110 duration-75">
          <a href="#">
            <img
              className="w-[100%] rounded-2xl"
              src="/images/bello1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                GH 2,300 per month
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">
              3 bedroom in Airport, near Accra mall for Rent
            </p>
            <h3 className="flex">
              <MdLocationPin size={24} /> Greater,Accra
            </h3>
          </div>
        </div>

        <div className="max-w-sm bg-white  dark:bg-white hover:scale-110 duration-75">
          <a href="#">
            <img
              className="w-[100%] rounded-2xl"
              src="/images/bello3.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                GH 2,300 per month
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">
              3 bedroom in Airport, near Accra mall for Rent
            </p>
            <h3 className="flex">
              <MdLocationPin size={24} /> Greater,Accra
            </h3>
          </div>
        </div>

        <div className="max-w-sm bg-white  dark:bg-white hover:scale-110 duration-75">
          <a href="#">
            <img
              className="w-[100%] rounded-2xl"
              src="/images/bello4.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                GH 2,300 per month
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">
              3 bedroom in Airport, near Accra mall for Rent
            </p>
            <h3 className="flex">
              <MdLocationPin size={24} /> Greater,Accra
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-9">
        <Link href="/home">
          <h3 className="font-second cursor-pointer">VIEW ALL</h3>
        </Link>
      </div>
    </div>
  );
}

export default YouMayAlso