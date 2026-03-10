import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { passwordRegex, emailRegex } from "../utils/Regex.js";
// Sign Up Handler
export const registerUser = async (req, res) => {

 

  try {
    const {fullName,email,password,confirmPassword} = req.body;

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }


    // Validate email and password format
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ 
        message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character" 
      });
    }


    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = req.body;
    console.log("Received user data:", newUser);
    const newSignUp = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    console.log("Check New Signup", newSignUp);

    const userSaved = await newSignUp.save();

    // Create JWT token
    const token = jwt.sign({ id: userSaved._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    res.status(201).json({
      message: "User added successfully!",
      token,
      user: {
        id:userSaved._id,
        fullName: userSaved.fullName,
        email: userSaved.email,
      }
    });
  } catch (err) {
    console.error("Error during sign up:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Handler
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Email format validation
    if(!emailRegex.test(email)){
      return res.status(400).json({message:"invalid email format"})
    }



    const users = await User.findOne({ email: email });

    if (!users) {
      console.log("get email", users);
      return res.status(400).send("User not found");
    }
   
    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, users.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ id: users._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    res.status(200).json({
      token,
      user: {
        id: users._id,
        fullName: users.fullName,
        email: users.email,
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};


