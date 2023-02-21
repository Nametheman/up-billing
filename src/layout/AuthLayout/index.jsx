import React from "react";
import styled from "styled-components";
import image from "../../assets/images/laptop.svg";
import circles from "../../assets/images/circle.svg";
import circle2 from "../../assets/images/circle2.png";
import Form from "./Form";
import logo from "../../assets/images/logo_small.svg";
import googleLogo from "../../assets/images/google.svg";

const Login = () => {
  return (
    <Container>
      <LeftContainer>
        <div className="eclipse1">
          <img src={circles} alt="" />
        </div>
        <div className="eclipse2">
          <img src={circle2} alt="" />
        </div>
        <div className="eclipse3">
          <img src={circle2} alt="" />
        </div>
        <img src={image} alt="laptop" />
      </LeftContainer>
      <RightContainer>
        <img src={logo} alt="" style={{ marginBottom: "6em" }} />
        <p className="signIn">Sign in</p>
        <p>Welcome back! Please enter your details </p>
        <Form />
        <a href="#" className="googleAuth">
          <img src={googleLogo} alt="" /> <p>Sign in with Google</p>
        </a>
        <p className="createAcct">
          Need an account? <a href="#">Create an account</a>{" "}
        </p>
      </RightContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 450px) {
    display: block;
    height: unset;
  }
`;
const LeftContainer = styled.div`
  background-color: #00b3fe;
  position: relative;
  flex: 0.59;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 450px) {
    display: none;
    flex: 0;
  }
  img {
    width: 70%;
    height: 50%;
  }
  .eclipse1 {
    position: absolute;
    bottom: -3%;
    left: 5%;
  }
  .eclipse2 {
    position: absolute;
    top: 7%;
    left: 5%;
  }
  .eclipse3 {
    position: absolute;
    top: 4%;
    right: 5%;

    img {
      width: 200px;
    }
  }
`;
const RightContainer = styled.div`
  flex: 0.4;
  padding: 3em 9rem;

  @media only screen and (max-width: 450px) {
    flex: 1;
    width: 100%;
    padding: 10px 20px;
  }

  .signIn {
    font-size: 25px;
    font-weight: 600;
    color: #000;
  }
  p {
    margin-top: 1%;
    font-size: 15px;
    color: #9b9b9b;
  }
  .googleAuth {
    border: 1px solid #bdbdbdcc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 96%;
    padding: 4px 0;
    border-radius: 5px;
    gap: 4px;

    p {
      color: #000;
      margin-bottom: 1%;
    }
  }

  .createAcct {
    text-align: center;
    margin-top: 20px;
    color: #000;
    a {
      border: none;
      text-decoration: none;
      color: #ff993a;
    }
  }
`;
