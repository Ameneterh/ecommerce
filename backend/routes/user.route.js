import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// new user registration
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("User already exists!");
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;

    // create user
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "New User Created Successfully!",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// user login endpoint
router.post("/login", async (req, res) => {
  try {
    // check if user exists
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("User not found!");
    }

    // compare password
    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) {
      throw new Error("Invalid User Credentials!");
    }

    // create and assign token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // send response
    res.send({
      success: true,
      message: "User logged in successfully!",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get current user
router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: "User fetched successfully!",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
