import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  await connectToDatabase();

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "All fields required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
}
