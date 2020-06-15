import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to Dashboard</h1>
                <Link to="/">
                    <button className="button button4">
                        Logout
                    </button>
                </Link>
            </div>
        )
    }
}

export default Dashboard
