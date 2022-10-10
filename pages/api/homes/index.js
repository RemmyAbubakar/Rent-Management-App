import Home from "../../../models/home";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await db.connect();

    const homes = await Home.find({});

    await db.disconnect();

    res.status(200).json({ homes });
  } else if (req.method === "POST") {
    await db.connect();

    const { location, typeofhome, description, price, phonenumber, imageUrl } =
      req.body;

    const home = Home({
      location,
      typeofhome,
      description,
      price,
      phonenumber,
    });

    for (let image of imageUrl) {
      home.imageUrl.push(image);
    }

    await home.save();

    await db.disconnect();

    res.status(201).json({ home });
  } else {
    res.status(405).json({ error: "Only POST and GET method are allowed" });
  }
}
