import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/User"; // Correct import path
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Create User (password hashing is handled in User.ts schema)
    const user = new User({ name, email, password });
    await user.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
