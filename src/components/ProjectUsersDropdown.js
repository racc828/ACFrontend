import React from 'react'
import TasksAdapter from '../adapters/TasksAdapter'


export default class ProjectUsersDropdown extends React.Component {

  constructor() {
    super()

    this.state = {
      selectedUser: null
    }
  }

  handleChange = (e) => {
    let userId = parseInt(e.target.value)
    this.setState({
      selectedUser: userId
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.showAddUserToTask()
    this.props.addUserToTask(this.state.selectedUser, this.props.taskId )
  }



  render() {
    return(
      <div className="project-user-dropdown">
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option>Assign to:</option>
            {this.props.projectUsers.map((user, i) => {
              return <option value={user.id} key={i}>{user.firstname}</option>
            })}
          </select>
          <input type="submit" value="save"/>
        </form>
      </div>
    )
  }



}
