import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/User"; // Correct import path

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    console.log("Received login request:", { email, password });

    // Log the JWT_SECRET value
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      console.error("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.error("Invalid credentials");
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Generated JWT token:", token);

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });

  } catch (error) {
    console.error("Login Error:", error);
    console.error("Error details:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
