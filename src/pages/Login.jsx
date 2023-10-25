import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/Authentication/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      passsword,
    };
    console.log('login',obj);

    dispatch(login(obj))
      .then(() => {
        // navigate(location.state, { replace: true });
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DIV>
      <Heading>Login here</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter your password"
            type="password"
            value={passsword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="submit"
            value="Login now!"
            _hover={{
              backgroundColor: "gray",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          />
        </FormControl>
      </form>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  padding: 40px;
  form {
    width: 35%;
    margin: auto;
    padding: 15px;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    margin-top: 15px;
  }
`;
