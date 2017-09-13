import React from 'react'

export default class TaskUser extends React.Component {
  render(){
    return(
      <div className="task-user">
        {this.props.user.firstname}
      </div>
    )
  }
}
