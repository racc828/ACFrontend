import React from 'react'

export default class TaskUser extends React.Component {



handleDelete = () => {
  this.props.deleteUserFromTask(this.props.user.id, this.props.taskId)
}


  render(){
    return(
      <div className="task-user">
        <div onClick={this.handleDelete} className="task-user-delete-hover"><i className="fa fa-trash-o"></i></div>
        <span>{this.props.user.firstname.charAt(0)} {this.props.user.lastname.charAt(0)}</span>
      </div>
    )
  }
}
