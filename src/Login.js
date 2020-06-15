import React, { Component } from 'react'
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'
import Register from './Register'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: '',
            userNameError: '',
            passwordError: '' 
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    valid = (e) => {
        //Username Conditions
        if (this.state.username.includes("")){
            this.setState({
                userNameError: "Username cannot be blank"
            })
        }
        if (this.state.username.includes("@") || this.state.username.length<=5){
            this.setState({
                userNameError: "Invalid form of username"
            })
        }
        //Password Conditions
        if (this.state.password.includes("")){
            this.setState({
                passwordError: "Password cannot be blank"
            })
        }
        if (this.state.password.includes("#") || this.state.password.includes("?") || this.state.password.includes("%") || this.state.password.includes("?")){
            this.setState({
                passwordError: "Special characters except '@' not allowed"
            })
        }
        else{
            return true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.valid(e)==true){
            alert(`Welcome ${this.state.username}`)
            this.setState({
                username: '', 
                password: ''
            })
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = (e) => {
        
        // <Link to="/dashboard"/>
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label 
                        style={{textAlign:'left'}}
                    >
                        Username
                    </label>
                    <br></br>                    
                    <input 
                        placeholder="Enter your username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <br></br>
                    <span style={{color: "red"}}>{this.state.userNameError}</span>

                    <br></br>

                    <label 
                        style={{textAlign:'left'}}
                    >
                        Password
                    </label>
                    <br></br>
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <br></br>
                    <span style={{color: "red"}}>{this.state.passwordError}</span>

                    <br></br>

                    {/* <Link to="/dashboard"> */}
                        <button 
                            onClick={this.handleLogin}
                            className="button button4"
                        >
                            Login
                        </button>
                    {/* </Link> */}
                </form>
                <h5>New Here?</h5>
                <Link to="/register">
                    Register
                </Link>
                {/* <Dashboard username={this.state.username} /> */}
            </div>
        )
    }
}

export default Login

