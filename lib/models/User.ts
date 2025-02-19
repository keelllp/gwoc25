import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  role: string; 
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  role: { type: String, default: "user" },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    console.error("Error hashing password:", error);
    next(error as mongoose.CallbackError);
  }
});

// Compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  try {
    return bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
};

export default mongoose.models.user || mongoose.model<IUser>("User", UserSchema);
