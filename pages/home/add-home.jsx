import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Spinners from "../../components/Spinner";

function Addhome() {
  const [data, setData] = useState({
    location: "",
    typeofhome: "",
    description: "",
    price: "",
    phonenumber: "",
    imageUrl: null,
  });
  const { data: session } = useSession();

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imagesArray = Array.from(data.imageUrl);
      const images = [];

      const formData = new FormData();
      for (let file of imagesArray) {
        formData.append("file", file);

        formData.append("upload_preset", "mern_blog");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/remmybello123/image/upload",
          formData
        );

        images.push(res.data.secure_url);
      }

      const post = {
        ...data,
        imageUrl: images,
      };

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homes`, post);

      router.push("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Spinners isSubmitting={isSubmitting} />
      <div className="flex justify-center items-center lg:h-screen md:h-screen sm:h-screen font-abc bg-[url('/images/blur.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-xl w-full rounded-xl p-14 bg-white">
          <div className="flex justify-center mb-11 text-3xl">
            <h3>ADD HOME</h3>
          </div>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
                value={data.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="typeofhome"
                id="typeofhome"
                placeholder="Type Of Home"
                className="border-2 border-black w-full outline-none mt-2 rounded-xl p-4"
                value={data.typeofhome}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                placeholder="description"
                className="border-2 border-black w-full outline-none mt-2 rounded-xl p-4"
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
                value={data.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="h-14 border-2 w-[100%] border-[black] outline-none rounded-xl p-4"
                value={data.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Add Image"
                className="rounded"
                onChange={(e) => setData({ ...data, imageUrl: e.target.files })}
                multiple
              />
            </div>
            <div className="flex mt-4">
              <button
                type="submit"
                className="text-white text-sm w-[100%] h-12 bg-blue-800 rounded-full"
                disabled={isSubmitting}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addhome;
