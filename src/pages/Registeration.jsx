import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/Authentication/action";


const Registeration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      passsword,
    };
    dispatch(register(obj))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DIV>
      <Heading>Register here</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Email</FormLabel>
          <Input
            _placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            _placeholder="Enter your password"
            type="password"
            value={passsword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="submit"
            value="Register now!"
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

export default Registeration;

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
