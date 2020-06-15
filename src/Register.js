import React, { Component } from 'react'
import Dashboard from './Dashboard'

class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            username: '',
            password: '',
            cnfpassword: '',
            emailError:'',
            userError: '',
            passError: '',
            cnfError: ''
        }

        // this.handleCnfPasswordChange = this.handleCnfPasswordChange.bind(this);
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.isValid = this.isValid.bind(this);
    }

    isValid = (e) =>{
        //USERNAME ERROR CONDITIONS
        if (this.state.username.includes("") || this.state.username.length<=5){
            this.setState({
                userError:"Invalid username"
            })
        }
        // //EMAIL ERROR CONDITIONS
        if (!this.state.email.includes("@") || this.state.emailError.includes("")){
            this.setState({
                emailError: "Invalid email"
            })
        }
        //PASSWORD ERROR CONDITIONS
        else if (this.state.password.includes("#") || this.state.password.includes("$") || this.state.password.includes("%") || this.state.password.includes("^") || this.state.password.includes("?")){
            this.setState({
                passError: "Invalid form of password"
            })
        }
        else if (this.state.password.includes("") || this.state.password.length<=8){
            this.setState({
                passError: "Password should be atleast of 8 characters"
            })
        }
        //CONFIRM PASSWORD ERROR CONDITIONS
        else if(this.state.cnfpassword !== this.state.password){
            this.setState({
                cnfError: "Password and Confirm password do not match"
            })
        }
        else if (this.state.cnfpassword.includes("")){
            this.setState({
                cnfError: "Confirm password field cannot be empty"
            })
        }
        else {
            return true
        }
    }
    
    handleSubmit = (e) => {
        if (this.isValid()){
            e.preventDefault()
            alert(`Thank You for Registering with us ${this.state.email}`)
            // this.setState({
            //     email:'',
            //     username: '', 
            //     password: '',
            //     cnfpassword:''
            // })
        }
        else {
            return 'Error encountered'
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

    handleCnfPasswordChange = (e) => {
        this.setState({
            cnfpassword: e.target.value
        })
    }


    handleEmailChange = (e) =>{
        this.setState({
            email:e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Register Here!</h1>

                    <label style={{textAlign:'left'}}>E-Mail</label><br></br>
                    <input 
                        type="text"
                        placeholder="Enter your valid email id"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    /><br></br>
                    <span style={{color: "red"}}>{this.state.emailError}</span>

                    <br></br>

                    <label style={{textAlign:'left'}}>Username</label><br></br>
                    <input 
                        type="text"
                        placeholder="Enter any username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    /><br></br>
                    <span style={{color: "red"}}>{this.state.userError}</span>

                    <br></br>
                    <label style={{textAlign:'left'}}>Password</label><br></br>
                    <input
                        type="password"
                        placeholder="Create password"                       
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    /><br></br>
                    <span style={{color: "red"}}>{this.state.passError}</span>

                    <br></br>

                    <label style={{textAlign:'left'}}>Confirm Password</label><br></br>
                    <input
                        type="password"
                        placeholder="Retype your Password"
                        value={this.state.cnfpassword}
                        onChange={this.handleCnfPasswordChange}
                    /><br></br>
                    <span style={{color: "red"}}>{this.state.cnfError}</span>

                    <br></br>
                    <button 
                        className="button button4"
                    >
                        Register Here
                    </button>
                </form>
            </div>
        )
    }
}


export default Register