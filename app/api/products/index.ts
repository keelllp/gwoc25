import { NextApiRequest, NextApiResponse } from "next";
import Product from "@/lib/models/Product";
import { connectToDatabase } from "@/lib/mongodb";
import multer from "multer";
import cloudinary from "@/lib/cloudinary";
import streamifier from "streamifier";

// Extend NextApiRequest to include 'file' property
interface MulterRequest extends NextApiRequest {
  file?: Express.Multer.File;
}

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Disable default body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to upload image to Cloudinary
async function uploadToCloudinary(buffer: Buffer, folder: string) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url);
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}

export default async function handler(req: MulterRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      // ✅ Await multer middleware before processing request
      await new Promise((resolve, reject) => {
        upload.single("image")(req as any, res as any, (err: any) => {
          if (err) reject(err);
          else resolve(null);
        });
      });

      const { name, description, price, category } = req.body;
      if (!name || !price || !category) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // ✅ Upload image to Cloudinary (Fix: use req.file?.buffer)
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
      }

      const imageUrl = await uploadToCloudinary(req.file.buffer, "products");

      // ✅ Create a new product
      const product = new Product({
        name,
        description,
        price,
        category,
        imageUrl,
      });

      await product.save();
      return res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      return res.status(500).json({ message: "Upload failed", error });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
