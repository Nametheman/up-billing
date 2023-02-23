import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../hooks/UseSessionStorage";

const Form = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({
  //   userName: "",
  //   password: "",
  // });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = { userName: "", password: "" };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {
      const errors = {};
      if (!formik.values.email) {
        errors.email = "Email is required";
        setFormIsValid(false);
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          formik.values.email
        )
      ) {
        errors.email = "Invalid email address";
        setFormIsValid(false);
      }
      if (!formik.values.password) {
        errors.password = "Password is required";
        setFormIsValid(false);
      } else if (formik.values.password.length < 8) {
        errors.password = "Must be 8 characters or more";
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
      return errors;
    },
    onSubmit: (values) => {
      // handle form submission
      setUserName(formik.values.email);
      setPassword(formik.values.password);
      user.userName = formik.values.email;
      user.password = formik.values.password;

      // console.log(user);
      authenticateUser();
    },
  });

  const { setSessionStorage } = useSessionStorage("__appUser");

  const authenticateUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.jonexy.somee.com/api/User/Login/`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setIsLoading(false);

      if (data?.status === "Success") {
        setSessionStorage(data?.token);
        window.location.assign("/home");
      } else {
        setErrMsg(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errorMessage">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        {/* <div className="passWordInput"> */}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* </div> */}

        {formik.touched.password && formik.errors.password ? (
          <div className="errorMessage">{formik.errors.password}</div>
        ) : null}
        <input
          type="submit"
          value={isLoading ? "Please Wait..." : "Sign In"}
          className={
            !formIsValid || isLoading ? "submitBtn disabled" : "submitBtn"
          }
        />
      </form>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1rem;

    @media only screen and (max-width: 450px) {
    }
    input {
      width: 96%;
      height: 43px;
      padding-left: 18px;
      margin-bottom: 6px;
      border: 1px solid #bdbdbdcc;
      border-radius: 5px;

      &::placeholder {
        color: #bdbdbdcc;
      }
    }
    .passwordInput {
      border: 1px solid #bdbdbdcc;
      border-radius: 5px;
    }
    label {
      margin: 10px 0;
    }

    .submitBtn {
      border: none;
      outline: none;
      background-color: #ff993a;
      color: #fff;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
    .disabled {
      background-color: #868484;
      color: #fff;
      cursor: not-allowed;
    }

    .errorMessage {
      color: red;
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
`;
