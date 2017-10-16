import React from 'react'
import '../css/UserTasks.css'

export default class AllUserTasks extends React.Component {


  render(){
    debugger
    return(
      <div className="all-user-tasks">
        <h4>{this.props.task.name}</h4>
        <p>{this.props.task.description}</p>
      </div>
    )
  }
}
