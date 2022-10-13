import { MdLocationPin } from "react-icons/md";
import AvailableProperties from "../../components/AvailableProperties";
import SearchFilter from "../../components/SearchFilter";
import { getHomes } from "../../utils/getHomes";
import Link from "next/link";

export async function getServerSideProps() {
  const homes = await getHomes();

  return {
    props: {
      homes,
    },
  };
}

function AvailableHome({ homes }) {
  return (
    <div>
      <SearchFilter />
      <AvailableProperties />
      <div className="flex flex-wrap gap-28 justify-center p-10">
        {homes?.map((home, idx) => (
          <div
            key={idx}
            className="w-80 bg-white dark:bg-white hover:scale-110 duration-75"
          >
            <Link href={`/home/${home._id}`}>
              <a>
                <img
                  className="w-[100%] rounded-xl"
                  src={home.imageUrl[0]}
                  alt=""
                />
              </a>
            </Link>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-second font-bold tracking-tight text-gray-900 dark:text-black">
                  GH¢ {home.price}
                </h5>
              </a>
              <p className="mb-3 ml-2 font-second font-normal text-gray-700 dark:text-black">
                {home.typeofhome}
              </p>
              <h3 className="flex font-second">
                <MdLocationPin size={24} /> {home.location}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableHome;
