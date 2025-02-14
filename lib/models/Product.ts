// import mongoose, { Schema, Document } from "mongoose";

// export interface IProduct extends Document {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
// }

// const ProductSchema = new Schema<IProduct>({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   image: { type: String, default: "" },
// });

// export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);


import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;


