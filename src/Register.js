import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className="box">
            <h3 id="one">Register Here</h3>
            <h6>(Fields marked with * are mandatory)</h6>
            <Formik
                initialValues = {
                    {email: "",
                    username: "",
                    password: "",
                    contact: ""
                }}

                onSubmit = {(
                    values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log('Registered successfully', values)
                        },500)
                    }
                }

                //Validation Rules

                validationSchema = {Yup.object().shape({
                    email: Yup.string()
                    .required("Email Id is mandatory"), 

                    username: Yup.string()
                    .required("Username is mandatory"),
                    
                    contact: Yup.string()
                    .matches(/(?=.*[0-9])/, "Mobile number must contain a number"),

                    password: Yup.string()
                    .required("Password cannot be blank")
                    .min(8, "Password too short. It should atleast have 8 characters")
                    .matches(/(?=.*[0-9])/, "Password should contain a number")
                    
                })}
            >

                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;

                    return (
                        <form autoComplete="off" onSubmit={handleSubmit}>

                            <label htmlFor="email">E-mail Id*</label>
                            <br></br>
                            <input
                                type="text"
                                placeholder="Enter your email id"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            />

                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}

                            <br></br>
                            <label htmlFor="usename">Username*</label>
                            <br></br>
                            <input
                                type="text"
                                placeholder="Choose your username"
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                                onBlur={handleBlur}
                                className={errors.username && touched.username && "error"}
                            />

                            {errors.username && touched.username && (
                                <div className="input-feedback">{errors.username}</div>
                            )}

                            <br></br>
                            <label htmlFor="password">Password*</label>
                            <br></br>
                            <input
                                type="password"
                                placeholder="Choose your password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            />

                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}

                            <br></br>
                            <label htmlFor="contact">Mobile Number</label>
                            <br></br>
                            <input
                                type="text"
                                placeholder="Enter your Mobile Number"
                                name="contact"
                                onChange={handleChange}
                                value={values.contact}
                                onBlur={handleBlur}
                                className={errors.contact && touched.contact && "error"}
                            />

                            {errors.contact && touched.contact && (
                                <div className="input-feedback">{errors.contact}</div>
                            )}

                            <br></br>
                            <Link to={{pathname: "/"}}>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                onClick={(e) => alert("Registered Successfully. You will be redirected to Login page.")}
                                className="button button4"
                            >
                                Register
                            </button>
                            </Link>

                            <h3 id="small">Already Registered?</h3>
                            <Link to="/">
                                <h4>Back to Login</h4>
                            </Link>
                        </form>
                    )
                }}

            </Formik>
        </div>
    )
}

export default Register
