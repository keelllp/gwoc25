import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  user: mongoose.Schema.Types.ObjectId;
  products: { product: mongoose.Schema.Types.ObjectId; quantity: number }[];
}

const CartSchema = new Schema<ICart>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

export default mongoose.models.Cart || mongoose.model<ICart>("Cart", CartSchema);
