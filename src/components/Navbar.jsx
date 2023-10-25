// import { Link } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <Link to="/">
        <h1>BMI Calculator</h1>
      </Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Link to='/profile'>Profile</Link>
    </DIV>
  );
};

const DIV=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    width: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
    font-size: 20px;
`