import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.get("/user", async (req, res) => {
  connectDB();

  try {
    const userDoc = await User.find;
    res.json(userDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post("/users", async (req, res) => {
  connectDB();

  const { name, email, password } = req.body;

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password,
    });

    res.json(newUserDoc);
  } catch (error) {
    res.status(404).json(error);
    rq;
  }
});

app.listen(PORT, () => {});
