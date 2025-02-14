import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/lib/models/User";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  await connectToDatabase();

  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });

  await user.save();
  res.status(201).json({ message: "User registered successfully" });
}
