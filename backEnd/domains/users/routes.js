import { Router } from "express";
import { connectDB } from "../../config/db.js";
import User from "./domains/users/model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
  connectDB();

  try {
    const userDoc = await User.find;
    res.json(userDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDB();

  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hasSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.json(newUserDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router;
