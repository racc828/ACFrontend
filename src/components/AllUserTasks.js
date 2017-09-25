import React from 'react'

export default class AllUserTasks extends React.Component {


  render(){
    return(
      <div className="user-tasks">
        {this.props.task.name}
        {this.props.task.description}
      </div>
    )
  }
}
