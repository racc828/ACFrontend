import React from 'react'
import TaskUser from './TaskUser'

export default class TaskUsers extends React.Component {
  render(){
    return(
      <div>
        {this.props.users.map((user, i) => {
          return <TaskUser user={user} key={i} />
        })}
      </div>
    )
  }
}
