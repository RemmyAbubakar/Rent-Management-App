import db from "../../../lib/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST method is allowed" });
  }

  const { firstName, lastName, email, password, role } = req.body;

  await db.connect();

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(409).json({ error: "Email already in use" });
    await db.disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    firstName,
    lastName,
    email,
    role,
    password: hashedPassword,
  });

  res.status(201).json({ user });
}

export default handler;
