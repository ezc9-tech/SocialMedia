import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("There was an error connecting to Mongo DB");
    process.exit(1);
  }
}
