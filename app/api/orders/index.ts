import { NextApiRequest, NextApiResponse } from "next";
import Order from "@/lib/models/Order";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { userId, products, totalPrice } = req.body;
    if (!userId || !products || !totalPrice) return res.status(400).json({ message: "Missing order details" });

    const order = new Order({ user: userId, products, totalPrice });
    await order.save();
    return res.status(201).json({ message: "Order placed successfully", order });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
