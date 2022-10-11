import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import Fade from "react-reveal/Fade";


function HomePageProperties({ home }) {
  
  return (
    <div className="cursor-pointer">
      <Link href={`/home/${home._id}`}>
        <div className="flex flex-wrap gap-10 justify-center p-10">
          <div className="max-w-sm bg-white  dark:bg-white hover:scale-110 duration-75">
            <img
              className="w-[100%] rounded-2xl"
              src={home.imageUrl[0]}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                {home.price}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-black">
                {home.typeofhome}
              </p>
              <h3 className="flex">
                <MdLocationPin size={24} /> {home.location}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePageProperties;
