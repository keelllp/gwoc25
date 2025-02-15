import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  user: mongoose.Schema.Types.ObjectId;
  product: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
  isVisible: boolean;
}

const ReviewSchema = new Schema<IReview>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  isVisible: { type: Boolean, default: false }, // Admin can toggle this
});

export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
