import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req: Request) {
  try {
    console.log("📌 Connecting to database...");
    await connectDB();

    const { email, password } = await req.json();
    console.log("📌 Signup Request Received:", { email, password });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists:", email);
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    console.log("📌 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    console.log("📌 Saving user to database...");
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("✅ User registered successfully!");
    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

  } catch (error) {
    console.error("❌ Signup Error:", error);
    return NextResponse.json({ error: "Server error", details: (error as any).message }, { status: 500 });
  }
}
