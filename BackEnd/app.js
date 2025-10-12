const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// ===== Database Connection =====
connectDB();

// ===== App Initialization =====
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===== User Schema and Model =====
const signupSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});
const SignUp = mongoose.model("SignUp", signupSchema);

// ===== Sign Up API =====
app.post("/api/user/sign_up", async (req, res) => {
  try {
    const newUser = req.body;
    console.log("Received user data:", newUser);
    const newSignUp = new SignUp({
      fullName: newUser.fullName,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
    });
    console.log("Check New Signup", newSignUp);

    const userSaved = await newSignUp.save();
    res.status(201).json({
      message: "User added successfully!",
      user: userSaved,
    });
  } catch (err) {
    console.error("Error during sign up:", err);
    // res.status(500).json({ message: "Server error" });
  } finally {
  }
});

// GET all users
app.post(`/api/user/login`, async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await SignUp.findOne({ email: email });

    if (!users) {
      console.log("get email", users);
      return res.status(400).send("User not found");
    }
    const current_password = users.password;

    console.log("current password", current_password);
    console.log("submit password", password);

    if (current_password != password) {
      return res.status(400).send("password is not match");
      // res.status(400).json({ message: "password is not match" });
      // console.log("password is not match", userPwd )
    }

    // console.log("email verify" , users)
    // console.log("password verify" , userPwd)
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// ===== Server =====
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
