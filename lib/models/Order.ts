import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  products: { product: mongoose.Schema.Types.ObjectId; quantity: number }[];
  totalPrice: number;
  status: string;
}

const OrderSchema = new Schema<IOrder>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
