import axios from "axios";

export const getHomes = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homes`);
  const homes = await res.data.homes;

  if (id) {
    const home = homes.find((home) => home._id === id);
    return home;
  }

  return homes;
};
