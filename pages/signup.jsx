import Link from "next/link";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { role, firstName, lastName, email, password, confirmPassword } =
      data;

    if (
      role === "" &&
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/signin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen font-abc">
      <div className="max-w-2xl w-full rounded-xl p-20">
        <div className="flex justify-center mb-3 text-3xl">
          <h3>SIGN UP</h3>
        </div>
        <div className="mt-3 mb-14">
          <Fade left>
            <div className="border border-black mx-[45%] flex justify-center items-center mt-3 mb-4"></div>
          </Fade>
        </div>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <select
              id="role"
              name="role"
              className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-2"
              value={data.role}
              onChange={handleChange}
            >
              <option value="">
                ----------------------------------------Register
                As----------------------------------------
              </option>
              <option value="user">User</option>
              <option value="landlord">Landlord or Ladylady</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
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

          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="h-14 border-2 w-[100%] border-[black]  outline-none rounded-xl p-4"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex mt-4">
            <button
              type="submit"
              className="text-white text-sm w-[100%] h-12 bg-blue-800 rounded-full p-4"
            >
              CREATE ACOUNT
            </button>
          </div>
          <hr className="my-6 border-gray-300 lg:my-8" />
          <div className="flex justify-center text-sm">
            <h2>
              <button>Already have an account?</button>
              <Link href="/signin">
                <button className="ml-1 text-blue-900">SignIn</button>
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
