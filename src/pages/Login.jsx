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
  import styled from "styled-components";
  
  const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      let obj={
          name,email,passsword
      }
      console.log(obj)
      // axios.post('')
    }
    return (
      <DIV>
        <Heading>Register here</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
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
            <Input type="submit" value="Login now!" _hover={{backgroundColor:"gray",color:'white',cursor:"pointer",fontWeight:"bold"}}/>
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
  