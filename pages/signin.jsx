import Link from "next/link"
import Fade from "react-reveal/Fade";
import React,{useState} from "react";
import {signIn} from "next-auth/react"
import { useRouter } from "next/router";


function Signin() {

const [data, setData] = useState({
  email: "",
  password: "",
});

const [error, setError] = useState("")
const router = useRouter()

const handleChange = e => {
  setData({ ...data, [e.target.name]: e.target.value })
}


const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false
  });

  if (result.error){
    setError(result.error);
  } else {
     router.push(router.query.redirect || "/");
  }
 

}


  return (
    <div className="flex justify-center items-center h-[80vh] font-abc">
      <div className="max-w-2xl w-full rounded-xl p-20">
        <div className="flex justify-center mb-3 text-3xl">
          <h3>LOG IN</h3>
        </div>
        <div className="mt-3 mb-14">
          <Fade left>
            <div className="border border-black mx-[45%] flex justify-center items-center mt-3 mb-4"></div>
          </Fade>
        </div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="h-14 border-2 w-[100%] border-[black]  outline-none rounded-xl p-4"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end text-sm">
            <h2>
              <button>Forgot your password?</button>
            </h2>
          </div>

          <div className="flex mt-4">
            <button
              type="submit"
              className="text-white text-sm w-[100%] h-12 bg-blue-800 rounded-full"
            >
              SIGN IN
            </button>
          </div>
          <hr className="my-6 border-gray-300 lg:my-8" />
          <div className="flex justify-center text-sm">
            <h2>
              <Link href="/signup">
                <button>Don't have an account?</button>
              </Link>
              <Link href="/signup">
                <button type="submit" className="ml-1 text-blue-900">
                  SignUp
                </button>
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
