import React, { Component } from 'react'
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'
import Register from './Register'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'



const Login = (e) => {

    return(
        <div>
            <h3>Login Here</h3>
            <Formik 
                initialValues = {
                    {username: "",
                    password: ""
                }}
                onSubmit={(
                    values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log('Logging in', values)
                        },500);
                    }}

                    //Validation rules

                    validationSchema = {Yup.object().shape({
                        username: Yup.string()
                        // .username()
                        .required("Username is mandatory"),

                        password: Yup.string()
                        .required("No password provided")
                        .min(8, "Password too short. It should have atleast 8 characters ")
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
                                <Link to="dashboard">
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="button button4"
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </button>
                                </Link>
                            
                            <h3>New Here?</h3>
                            <Link to="/register">
                                <h4>Register</h4>
                            </Link>
                            </form>
                        )
                }}
            </Formik>
        </div>
    )

}
    export default Login


// class Login extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             username: '',
//             password: '',
//             userNameError: '',
//             passwordError: '' 
//         }
//         this.handleLogin = this.handleLogin.bind(this)
//     }

//     valid = (e) => {
//         //Username Conditions
//         if (this.state.username.includes("")){
//             this.setState({
//                 userNameError: "Username cannot be blank"
//             })
//         }
//         if (this.state.username.includes("@") || this.state.username.length<=5){
//             this.setState({
//                 userNameError: "Invalid form of username"
//             })
//         }
//         //Password Conditions
//         if (this.state.password.includes("")){
//             this.setState({
//                 passwordError: "Password cannot be blank"
//             })
//         }
//         if (this.state.password.includes("#") || this.state.password.includes("?") || this.state.password.includes("%") || this.state.password.includes("?")){
//             this.setState({
//                 passwordError: "Special characters except '@' not allowed"
//             })
//         }
//         else{
//             return true
//         }
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         if (this.valid(e)==true){
//             alert(`Welcome ${this.state.username}`)
//             this.setState({
//                 username: '', 
//                 password: ''
//             })
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

//     handleLogin = (e) => {
        
//         // <Link to="/dashboard"/>
//     }
    
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <h2>Login</h2>
//                     <label 
//                         style={{textAlign:'left'}}
//                     >
//                         Username
//                     </label>
//                     <br></br>                    
//                     <input 
//                         placeholder="Enter your username"
//                         type="text"
//                         value={this.state.username}
//                         onChange={this.handleUsernameChange}
//                     />
//                     <br></br>
//                     <span style={{color: "red"}}>{this.state.userNameError}</span>

//                     <br></br>

//                     <label 
//                         style={{textAlign:'left'}}
//                     >
//                         Password
//                     </label>
//                     <br></br>
//                     <input
//                         placeholder="Enter your password"
//                         type="password"
//                         value={this.state.password}
//                         onChange={this.handlePasswordChange}
//                     />
//                     <br></br>
//                     <span style={{color: "red"}}>{this.state.passwordError}</span>

//                     <br></br>

//                     {/* <Link to="/dashboard"> */}
//                         <button 
//                             onClick={this.handleLogin}
//                             className="button button4"
//                         >
//                             Login
//                         </button>
//                     {/* </Link> */}
//                 </form>
//                 <h5>New Here?</h5>
//                 <Link to="/register">
//                     Register
//                 </Link>
//                 {/* <Dashboard username={this.state.username} /> */}
//             </div>
//         )
//     }
// }

// export default Login

