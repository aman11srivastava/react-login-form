import React, { Component } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </div>
      </Router>
    )
  }
}

export default App
