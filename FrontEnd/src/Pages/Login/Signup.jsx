import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignupWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Poppins",sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   background-color:${({ theme }) => theme.colors?.primary || "#fff"};

  font-family: "Poppins", sans-serif;
  form {
	display: grid;
	gap: 15px;
}
`;

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {

    console.log("You are Registered data", data);
    try {
      const payload = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirmPassword: data.password,
      }

      const apiUrl = 'http://localhost:8000/api/user/sign_up';

      console.log("CheckAPi REsponse", apiUrl)
      const response = axios.post(apiUrl, payload)

      console.log("Signup api is working", response.data)

      navigate("/login")
      
    } catch (err) {
      console.log("Error in signup", err)
    }
  };




  return (
    <SignupWrapper>
      <h2>Create Account 🍦</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="name-fields">
          <input
            type="text"
            name="fullName"
            placeholder="Fullname"

            {...register("fullName")}
          />
        </div>
        <div className="name-fields">
          <input type="email"
            placeholder="Email address"
            name="email"

            {...register("email")} />
        </div>
        <div className="name-fields">
          <input type="password" placeholder="Password"
            name="password"
            {...register("password")}
          />
        </div>

        <input type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          {...register("confirmPassword")}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </SignupWrapper>
  );
};

export default Signup;
