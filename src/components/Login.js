import React from 'react'
import { Link } from "react-router-dom";
import '../css/EnterSite.css';

export default class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.getUser(user)
    this.props.resetError()
  }

  render(){
    return(
      <div id="login-component" className="enter-site">
        <div className="container">
          <div className="enter-site-box">
            <div className="enter-site-box-inner">
              <form onSubmit={this.handleSubmit} id="login-form" className="user-form">
                <div className="form-header">
                  <h1>Login</h1>
                </div>
                <div className="input-wrapper">
                  <label>Username</label>
                  <input type="text" onChange={this.handleChange} name="username"/>
                </div>
                <div className="input-wrapper">
                  <label>Password</label>
                  <input type="password" onChange={this.handleChange} name="password"/>
                </div>
                <Link to="/signup">Create Account</Link>
                <div className="form-submit-btn-wrapper">
                  <button type="submit" className="btn login-btn square-btn blue-highlight">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
