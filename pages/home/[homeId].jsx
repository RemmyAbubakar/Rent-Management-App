import { data } from "autoprefixer";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import YouMayAlso from "../../components/YouMayAlso";
import Fade from "react-reveal/Fade";
import { MdLocationPin } from "react-icons/md";

import { getHomes } from "../../utils/getHomes";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";



export async function getServerSideProps(context) {
  const home = await getHomes(context.params.homeId);

  return {
    props: {
      home,
    },
  };
}

function HomeDetails({ home }) {
  const { status } = useSession();
  const router = useRouter();

  const handleSignin = () => {
    router.push("/signin");
  };

  const [sliderData, setSliderData] = useState(home.imageUrl[0]);
  const handleClick = (index) => {
    const slider = home.imageUrl[index];
    setSliderData(slider);
  };

  return (
    <div>
      <div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <div className="mt-8">
              <img
                src={sliderData}
                height="300"
                width="500"
                className="rounded-lg"
              />
              <div className="flex p-5">
                {home.imageUrl.map((homes, i) => (
                  <div
                    key={i}
                    className=" ml-[6px] mr-1 flex justify-center rounded-xl"
                  >
                    <img
                      className={sliderData == i ? "opacity-20" : ""}
                      src={homes}
                      onClick={() => handleClick(i)}
                      height="70"
                      width="100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Fade right>
              <div className="p-14 space-y-6">
                <h3 className="text-2xl mb-4 font-second font-normal">
                  2 bedroom Apartment
                </h3>
                <p className="font-second">{home.description}</p>
                <div className="flex">
                  <MdLocationPin size={24} /> {home.location}
                </div>
                <div className="flex">
                  {status === "authenticated" ? (
                    <button
                      type="button"
                      className="bg-blue-800 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex"
                    >
                      <div>
                        <FiPhoneCall className="mr-2 mt-1" />
                      </div>
                      {home.phonenumber}
                    </button>
                  ) : (
                    <button
                      onClick={handleSignin}
                      type="button"
                      className="bg-blue-800 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex"
                    >
                      <div>
                        <FiPhoneCall className="mr-2 mt-1" />
                      </div>
                      Show Contact
                    </button>
                  )}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <YouMayAlso />
    </div>
  );
}

export default HomeDetails;
