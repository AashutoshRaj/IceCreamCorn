import mongoose from "mongoose";


// ===== User Schema and Model =====
const signupSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});
const SignUp = mongoose.model("SignUp", signupSchema);
console.log("all paylaods", SignUp.name)

export default SignUp;


