import Link from "next/link";
import { GiHouseKeys } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItems from "./MenuItems";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function NavBar() {
  const [active, setActive] = useState(false);

  const Showmenu = () => {
    setActive(!active);
  };

  const { data, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status !== "authenticated") {
  //     router.push("/");
  //   }
  // }, [status]);

  return (
    <div className="py-0 sticky top-0 z-50 bg-blue-900">
      <nav>
        <div className="bg-black text-white h-8 text-[12px] flex justify-center items-center font-second mb-4">
          <h3>30% OFF ALL PROPERTIES !!</h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start ml-6 mb-5 text-white cursor-pointer">
            <GiHouseKeys size={40} />
            <Link href="/">
              <h3 className="mt-1 text-xl first-letter:text-3xl first-letter:font-abc first-letter:font-bold">
                RentAvenue
              </h3>
            </Link>
          </div>
          <div className="">
            <div className="right-6 md:hidden  mb-4 mr-5">
              <GiHamburgerMenu
                onClick={Showmenu}
                size={30}
                color="white"
                className="cursor-pointer"
              />
            </div>
            <ul className="md:flex gap-4 hidden mb-2">
              <li>
                <Link href="/home">
                  <button className="p-1 font-second rounded-full w-30 h-10 text-white hover:bg-white hover:text-blue-900 hover:scale-110 duration-100 font-semibold uppercase">
                    PROPERTIES FOR RENT
                  </button>
                </Link>
              </li>
              {data?.user?.role === "landlord" && (
                <li>
                  <Link href="/home/add-home">
                    <button className=" p-1 font-second rounded-full w-24 h-10 text-white hover:bg-white hover:text-blue-900 hover:scale-110 duration-100 font-semibold uppercase">
                      Add home
                    </button>
                  </Link>
                </li>
              )}
              <li>
                <Link href="/signin">
                  {status === "authenticated" ? (
                    <button
                      className=" p-1 font-second rounded-full w-20 h-10 text-white hover:bg-white hover:text-blue-900 hover:scale-110 duration-100 font-semibold uppercase mr-3"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Logout
                    </button>
                  ) : (
                    <button className=" p-1 font-second rounded-full w-20 h-10 text-white hover:bg-white hover:text-blue-900 hover:scale-110 duration-100 font-semibold uppercase mr-3">
                      Sign in
                    </button>
                  )}
                </Link>
              </li>
            </ul>
            <MenuItems showmenu={Showmenu} active={active} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
