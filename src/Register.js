import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useState} from 'react'

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
                            <Link to="/">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="button button4"
                                onClick={handleSubmit}
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

// import React, { Component } from 'react'
// import Dashboard from './Dashboard'

// class Register extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             email: '',
//             username: '',
//             password: '',
//             cnfpassword: '',
//             emailError:'',
//             userError: '',
//             passError: '',
//             cnfError: ''
//         }

//         // this.handleCnfPasswordChange = this.handleCnfPasswordChange.bind(this);
//         // this.handleEmailChange = this.handleEmailChange.bind(this);
//         // this.handlePasswordChange = this.handlePasswordChange.bind(this);
//         // this.handleUsernameChange = this.handleUsernameChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         // this.isValid = this.isValid.bind(this);
//     }

//     isValid = (e) =>{
//         //USERNAME ERROR CONDITIONS
//         if (this.state.username.includes("") || this.state.username.length<=5){
//             this.setState({
//                 userError:"Invalid username"
//             })
//         }
//         // //EMAIL ERROR CONDITIONS
//         if (!this.state.email.includes("@") || this.state.emailError.includes("")){
//             this.setState({
//                 emailError: "Invalid email"
//             })
//         }
//         //PASSWORD ERROR CONDITIONS
//         else if (this.state.password.includes("#") || this.state.password.includes("$") || this.state.password.includes("%") || this.state.password.includes("^") || this.state.password.includes("?")){
//             this.setState({
//                 passError: "Invalid form of password"
//             })
//         }
//         else if (this.state.password.includes("") || this.state.password.length<=8){
//             this.setState({
//                 passError: "Password should be atleast of 8 characters"
//             })
//         }
//         //CONFIRM PASSWORD ERROR CONDITIONS
//         else if(this.state.cnfpassword !== this.state.password){
//             this.setState({
//                 cnfError: "Password and Confirm password do not match"
//             })
//         }
//         else if (this.state.cnfpassword.includes("")){
//             this.setState({
//                 cnfError: "Confirm password field cannot be empty"
//             })
//         }
//         else {
//             return true
//         }
//     }
    
//     handleSubmit = (e) => {
//         if (this.isValid()){
//             e.preventDefault()
//             alert(`Thank You for Registering with us ${this.state.email}`)
//             // this.setState({
//             //     email:'',
//             //     username: '', 
//             //     password: '',
//             //     cnfpassword:''
//             // })
//         }
//         else {
//             return 'Error encountered'
//         }
//     }

//     handleUsernameChange = (e) => {
//         this.setState({
//             username: e.target.value
//         })
//     }

//     handlePasswordChange = (e) => {
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleCnfPasswordChange = (e) => {
//         this.setState({
//             cnfpassword: e.target.value
//         })
//     }


//     handleEmailChange = (e) =>{
//         this.setState({
//             email:e.target.value
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <h1>Register Here!</h1>

//                     <label style={{textAlign:'left'}}>E-Mail</label><br></br>
//                     <input 
//                         type="text"
//                         placeholder="Enter your valid email id"
//                         value={this.state.email}
//                         onChange={this.handleEmailChange}
//                     /><br></br>
//                     <span style={{color: "red"}}>{this.state.emailError}</span>

//                     <br></br>

//                     <label style={{textAlign:'left'}}>Username</label><br></br>
//                     <input 
//                         type="text"
//                         placeholder="Enter any username"
//                         value={this.state.username}
//                         onChange={this.handleUsernameChange}
//                     /><br></br>
//                     <span style={{color: "red"}}>{this.state.userError}</span>

//                     <br></br>
//                     <label style={{textAlign:'left'}}>Password</label><br></br>
//                     <input
//                         type="password"
//                         placeholder="Create password"                       
//                         value={this.state.password}
//                         onChange={this.handlePasswordChange}
//                     /><br></br>
//                     <span style={{color: "red"}}>{this.state.passError}</span>

//                     <br></br>

//                     <label style={{textAlign:'left'}}>Confirm Password</label><br></br>
//                     <input
//                         type="password"
//                         placeholder="Retype your Password"
//                         value={this.state.cnfpassword}
//                         onChange={this.handleCnfPasswordChange}
//                     /><br></br>
//                     <span style={{color: "red"}}>{this.state.cnfError}</span>

//                     <br></br>
//                     <button 
//                         className="button button4"
//                     >
//                         Register Here
//                     </button>
//                 </form>
//             </div>
//         )
//     }
// }


// export default Register