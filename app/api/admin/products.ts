
import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../lib/models/Product"; // Ensure correct path
import { adminAuth } from "../../../lib/middelware/authMiddleware"; // Ensure correct path or update the path if necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await adminAuth(req, res, async () => {
    if (req.method === "POST") {
      // Add a new product
      const { name, description, price, imageUrl, category } = req.body;
      try {
        const newProduct = new Product({ name, description, price, imageUrl, category });
        await newProduct.save();
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    }
  });
}
