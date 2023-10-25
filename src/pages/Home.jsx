import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userName = useSelector((store) => {
    console.log(store)
    return store.authReducer.userName
  });

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [BMI, setBMI] = useState('');
  const navigate = useNavigate("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let meters = height * 0.3048;
    setBMI(weight / meters ** 2);
  };
  return (
    <div>
      <DIV>
        <Heading>BMI calculator</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>height </FormLabel>
            <Input
              placeholder="Enter your height(feet)"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <FormLabel>Weight</FormLabel>
            <Input
              placeholder="Enter your weight (kg)"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <br />
            <br />
            <Input
              type="submit"
              value="Calculate BMI"
              _hover={{
                backgroundColor: "gray",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            />
          </FormControl>
        </form>
        {BMI && <Heading>Hey {userName} your BMI is :{BMI}</Heading>}
      </DIV>
    </div>
  );
};

export default Home;

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
