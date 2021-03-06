import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Board from './components/Board'
import MyTasks from './components/MyTasks'
import SessionsAdapter from './adapters/SessionsAdapter'
import UsersAdapter from './adapters/UsersAdapter'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import PropTypes from 'prop-types'


class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      currentUser: {},
      error:false
    }
  }

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
     }

  getUser = (user) => {
    return SessionsAdapter.getUser(user)
      .then( data => {
        localStorage.setItem('token', data.jwt)
        this.setState({currentUser: data })
      })
      .then(() => {
        this.state.currentUser.error ? this.setState({error: true}) : this.context.router.history.push("/home");
      })
    }

    createUser = (user) => {
      return UsersAdapter.createUser(user)
      .then( user => {
        localStorage.setItem('token', user.jwt)
        this.setState({currentUser: user})})
      .then(() => {
        this.context.router.history.push("/home")
      })
    }

    logOut = () => {
      localStorage.token = ""
      this.setState({currentUser: {}})
      this.context.router.history.push("/")
    }

    resetError = () => {
      this.setState({error:false})
    }

  renderLogin = () => {
    return(
      <div>
        <Login getUser={this.getUser} resetError={this.resetError} />
        {this.state.error ? <span className="error"><small>Invalid Login Credentials</small> </span> : null}
      </div>
    )
  }

  renderBoard = (params) => {
    return <Board logOut={this.logOut} currentUser ={this.state.currentUser} history={params.history}/>
  }

  renderSignUp = () => {
    return <SignUp createUser={this.createUser} />
  }

  renderMyTasks = () => {
    return <MyTasks currentUser ={this.state.currentUser} />
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div>
              <Route exact path="/" render={this.renderLogin}/>
              <Route exact path="/signup" render={this.renderSignUp}/>
              <Route exact path="/mytasks" render={this.renderMyTasks}/>
              <Route exact path="/home" render={this.renderBoard}/>
              <Route exact path="/settings" render={this.renderSettings}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
