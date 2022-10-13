import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { useRouter } from "next/router";


function ContactUs() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, message, name } = data;

    if (name === "" && email === "" && message === "") {
        setError("Please provide all information");
        return;
    }


    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts`,
          data
        );

        router.push("/")
    } catch (error) {
        setError(error.message)
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] font-abc">
      <div className="max-w-2xl w-full rounded-xl p-20">
        <div className="flex justify-center mb-3 text-3xl">
          <h3>CONTACT US</h3>
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
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="h-14 border w-[100%] border-[black] outline-none rounded-xl p-4"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="h-14 border w-[100%] border-[black]  outline-none rounded-xl p-4"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="border w-full p-1 outline-none mt-2 border-[black] rounded-xl"
              value={data.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-center text-sm text-white w-[100%] h-14 bg-blue-800 rounded-full">
            <h2>
              <button type="submit" className="mt-4">
                SEND
              </button>
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
