import React from 'react'

export default class TaskUser extends React.Component {
  render(){
    return(
      <div className="task-user">
        <span>{this.props.user.firstname.charAt(0)} {this.props.user.lastname.charAt(0)}</span>
      </div>
    )
  }
}
