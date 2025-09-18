import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu certo");
  } catch (error) {
    console.log("não deu certo", error);
  }
};
