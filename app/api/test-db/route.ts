import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("📌 Testing MongoDB connection...");
    await connectDB();
    console.log("✅ MongoDB Connected Successfully!");

    return NextResponse.json({ message: "MongoDB connection successful!" });
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to MongoDB", details: (error as Error).message },
      { status: 500 }
    );
  }
}
