import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Use global cache to prevent multiple connections
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "bindis-cupcakery",  // Your database name
      bufferCommands: false,
    })
    .then((mongoose) => mongoose)
    .catch((error) => {
      console.error("MongoDB Connection Error:", error);
      console.error("Error details:", error);
      throw new Error("Failed to connect to MongoDB");
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
