import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import KnowUs from "../components/KnowUs";
import Link from "next/link";
import HomePageProperties from "../components/HomePageProperties";
import Whatwedo from "../components/Whatwedo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getHomes } from "../utils/getHomes";

export async function getStaticProps() {
  let homes = await getHomes();

  homes = homes.splice(0, 3);

  return {
    props: {
      homes,
    },
  };
}

export default function Home({ homes }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <div className="insect-0">
      <div className="bg-[url(/images/rent2.jpeg)] lg:h-screen md:h-[600px] sm:h-[400px] bg-no-repeat bg-cover object-cover bg-center lg:rounded-b-[4rem] md:rounded-b-[4rem] sm:rounded-b-[3rem] flex items-center">
        <div className="mr-auto ml-auto">
          <Slide top>
            <h1 className="text-white font-extrabold lg:text-5xl sm:text-3xl">
              Find Your Next <br />
              Perfect Place To <br />
              Live.
            </h1>
          </Slide>
          <div className="flex mt-5">
            <Fade left>
              {status === "authenticated" ? (
                <Link href="/home">
                  <button className="text-white font-second lg:border md:border sm:border lg:border-blue-800 md:border-blue-800 md:hover:bg-blue-800  lg:hover:bg-blue-800 lg:h-10 lg:w-32 lg:rounded-lg lg:ml-[100%] md:rounded-lg md:h-10 md:w-32 md:ml-[50%] sm:h-8 sm:w-20 sm:ml-[100%] sm:rounded-md">
                    Homes
                  </button>
                </Link>
              ) : (
                <Link href="/home">
                  <button className="text-white font-second lg:border md:border sm:border lg:border-blue-800 md:border-blue-800 md:hover:bg-blue-800  lg:hover:bg-blue-800 lg:h-10 lg:w-32 lg:rounded-lg lg:ml-11 md:rounded-lg md:h-10 md:w-32 md:ml-0 sm:h-8 sm:w-20 sm:ml-[13%] sm:rounded-md">
                    Homes
                  </button>
                </Link>
              )}
            </Fade>
            <Fade right>
              <Link href="/signup">
                {status === "authenticated" ? (
                  ""
                ) : (
                  <button className="text-white font-second bg-blue-800 lg:h-10 lg:w-32 lg:rounded-lg lg:ml-[8%] md:rounded-lg md:h-10 md:w-32  md:ml-9 sm:w-20 sm:ml-[30%] sm:h-8 sm:rounded-md">
                    Sign Up
                  </button>
                )}
              </Link>
            </Fade>
          </div>
        </div>
      </div>

      <Whatwedo />
      <KnowUs />
      <div>
        <div>
          <div className="flex justify-center mt-14">
            <h2 className="text-3xl font-second"> Popular Homes </h2>
          </div>
          <Fade left>
            <div className="border border-black mx-[48%] flex justify-center items-center mt-4 mb-4"></div>
          </Fade>
        </div>
        <div className="flex justify-center flex-wrap">
          {homes?.map((home, idx) => (
            <HomePageProperties key={idx} home={home} />
          ))}
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
