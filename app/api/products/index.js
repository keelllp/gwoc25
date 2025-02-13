import connectDb from "../../../lib/mongodb";
import Product from "../../../models/product";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDb();
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
