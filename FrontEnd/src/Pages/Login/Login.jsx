import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Poppins",sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   background-color:${({ theme }) => theme.colors?.primary || "#fff"};
  font-family: "Poppins", sans-serif;
`;
const Login = () => {
  const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

      const onSubmit = async (data) => {

        try{
          const payload = {
            email: data.email,
            password: data.password,
          }

          const loginApiUrl = 'http://localhost:8000/api/user/login';

          console.log("CheckAPi REsponse", loginApiUrl)
          const response = await axios.post(loginApiUrl, payload)

          console.log("you llogin is match", response)
          navigate("/product_list")
        }catch(err){
          console.log("Error in login", err)
        }
      }

  return (
    <LoginWrapper>
      
        <h2>Welcome Back 🍨</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" 
          placeholder="Email address"
          name="email"
          {...register("email")} />
          <input type="password"
           placeholder="Password"
           name="password"
            {...register("password")} />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
     
    </LoginWrapper>
  );
};

export default Login;
