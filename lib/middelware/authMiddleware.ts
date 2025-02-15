//

// middleware/authMiddleware.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";
import User from "../models/User"; // Ensure correct path
import { NextHandler } from "next-connect";

// Middleware function to authenticate admin users
export const adminAuth = async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await User.findById(decoded.id);
    if (!user || user.role !== "admin") return res.status(403).json({ message: "Access denied" });

    (req as any).user = user; // Extend request to include user
    return next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
