import React from 'react'
import TaskUser from './TaskUser'

export default class TaskUsers extends React.Component {
  render(){
    return(
      <div className="task-users">
        {this.props.users.map((user, i) => {
          return <TaskUser deleteUserFromTask={this.props.deleteUserFromTask} user={user} key={i} />
        })}
      </div>
    )
  }
}
