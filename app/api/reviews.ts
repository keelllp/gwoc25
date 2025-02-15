import { NextApiRequest, NextApiResponse } from "next";
import Review from "@/lib/models/Review";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { user, product, rating, comment } = req.body;
    if (!user || !product || !rating || !comment) return res.status(400).json({ message: "All fields required" });

    const review = new Review({ user, product, rating, comment });
    await review.save();
    return res.status(201).json({ message: "Review submitted", review });
  }

  if (req.method === "PUT") {
    const { reviewId, isVisible } = req.body;
    await Review.findByIdAndUpdate(reviewId, { isVisible });
    return res.status(200).json({ message: "Review visibility updated" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
