import React from 'react'
import '../css/EnterSite.css';

export default class SignUp extends React.Component {

  constructor() {
    super()

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
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
    let newUser = {user: this.state}
    this.props.createUser(newUser)
  }

  render() {
    return(
      <div id="login-component" className="enter-site">
        <div className="container">
          <div className="enter-site-box mt-5p">
            <div className="enter-site-box-inner">
              <form onSubmit={this.handleSubmit} id="signup-form" className="user-form">
                <div className="form-header">
                  <h1>Create Account</h1>
                </div>
                <div className="input-wrapper">
                  <label>First Name</label>
                  <input type="text" onChange={this.handleChange}  name="firstname"/>
                </div>
                <div className="input-wrapper">
                  <label>Last Name</label>
                  <input type="text" onChange={this.handleChange}  name="lastname"/>
                </div>
                <div className="input-wrapper">
                  <label>Email</label>
                  <input type="email" onChange={this.handleChange}  name="email"/>
                </div>
                <div className="input-wrapper">
                  <label>Username</label>
                  <input type="text" onChange={this.handleChange}  name="username"/>
                </div>
                <div className="input-wrapper">
                  <label>Password</label>
                  <input type="password" onChange={this.handleChange}  name="password"/>
                </div>
                <div className="form-submit-btn-wrapper">
                  <button type="submit" className="btn signup-btn square-btn blue-highlight ">
                    Create Account
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
