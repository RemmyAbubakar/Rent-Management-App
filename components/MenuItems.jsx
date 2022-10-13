import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MenuItems({ showmenu, active }) {
  const { data, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status !== "authenticated") {
  //     router.push("/");
  //   }
  // }, [status]);

  return (
    <div>
      <ul
        className={
          active
            ? "flex flex-col items-center fixed inset-0 gap-4 justify-center bg-blue-900 left-[40%] md:hidden font-second"
            : "hidden"
        }
      >
        <RiArrowRightSLine
          color="white"
          size={40}
          onClick={showmenu}
          className="mr-[80%] cursor-pointer"
        />
        <li className="border-b w-[70%] flex justify-center">
          <Link href="/home">
            <button className="uppercase text-white mb-3">
              PROPERTIES FOR RENT
            </button>
          </Link>
        </li>
        {data?.user?.role === "landlord" && (
          <li className="border-b w-[70%] flex justify-center">
            <Link href="/home/add-home">
              <button className="uppercase text-white mb-3">Add home</button>
            </Link>
          </li>
        )}
        <li className="border-b w-[70%] flex justify-center">
          <Link href="/signin">
            {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="uppercase text-white mb-3"
              >
                Sign Out
              </button>
            ) : (
              <button className="uppercase text-white mb-3">Sign in</button>
            )}
          </Link>
        </li>

        {status === "authenticated" ? (
          <li className="mb-[195%] w-[70%] flex justify-center"> </li>
        ) : (
          <li className="mb-[195%] border-b w-[70%] flex justify-center">
            <Link href="/signup">
              <button className="uppercase text-white mb-3">Sign up</button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MenuItems;
