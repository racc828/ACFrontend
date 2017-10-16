import React from 'react'
import TasksAdapter from '../adapters/TasksAdapter'
import AllUserTasks from './AllUserTasks'
import { Link } from "react-router-dom";

export default class MyTasks extends React.Component {

  constructor() {
    super()
    this.state ={
      myTasks: []
    }
  }

  componentDidMount() {
    TasksAdapter.getUserTasks(this.props.currentUser.id)
    .then(data => this.setState({
      myTasks: data
    }))
  }

  componentWillReceiveProps(nextProps) {
    TasksAdapter.getUserTasks(nextProps.currentUser.id)
    .then(data => this.setState({
      myTasks: data
    }))
  }

  render(){
    debugger
    return(
      <div className="container">
        <div className="top-user-tasks-header">
          <Link to="/home">Home</Link>
        </div>
        {this.state.myTasks.map((task, i) => {
        return <AllUserTasks task={task} key={i} />
        })}
      </div>
    )
  }
}
