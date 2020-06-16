import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Login = (e) => {
  return (
    <div>
      <h3>Login Here</h3>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
          }, 500);
        }}
        //Validation rules

        validationSchema={Yup.object().shape({
          username: Yup.string()
            // .username()
            .required("Username is mandatory"),

          password: Yup.string()
            .required("No password provided")
            .min(8, "Password too short. It should have atleast 8 characters ")
            .matches(/(?=.*[0-9])/, "Password should contain a number"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <br></br>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={errors.username && touched.username && "error"}
              />

              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}

              <br></br>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                name="password"
                className={errors.password && touched.password && "error"}
              />

              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}

              <br></br>
              <Link to={{ pathname: "/Dashboard" }}>
                <button
                  //disabled={isSubmitting}
                  type="submit"
                  className="button button4"
                >
                  Login
                </button>
              </Link>

              <h3>New Here?</h3>
              <Link to={{ pathname: "/Register" }}>
                <h4>Register</h4>
              </Link>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Login;