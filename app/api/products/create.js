import connectDb from "../../../lib/mongodb";
import Product from "../../../models/product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, description, price, imageUrl } = req.body;

    try {
      await connectDb();

      const product = new Product({ name, description, price, imageUrl });
      await product.save();

      res.status(201).json({ message: "Product created", product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
