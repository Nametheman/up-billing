import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";


const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {
      const errors = {};
      console.log(errors);
      if (!formik.values.email) {
        errors.email = "Required";
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          formik.values.email
        )
      ) {
        errors.email = "Invalid email address";
      }
      if (!formik.values.password) {
        errors.password = "Required";
      } else if (formik.values.password.length < 8) {
        errors.password = "Must be 8 characters or more";
      }
      return errors;
    },
    onSubmit: (values) => {
      // handle form submission
    },
  });

  return (
    <Container>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
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
          <div>{formik.errors.password}</div>
        ) : null}
        <input type="submit" value="Sign In" className="submitBtn" />
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

    input {
      width: 96%;
      height: 43px;
      padding-left: 18px;
      margin-bottom: 20px;
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
      margin-bottom: 10px;
    }

    .submitBtn {
      border: none;
      outline: none;
      background-color: #ff993a;
      color: #fff;
      font-size: 16px;
    }
  }
`;
