import React from 'react'
import Draggable from 'react-draggable'
import TasksAdapter from '../adapters/TasksAdapter'
import EditTask from './EditTask'
import TaskUsers from './TaskUsers'
import ProjectUsersDropdown from './ProjectUsersDropdown'

export default class Task extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showEditTask: false,
      showAddUserToTask:false,
      taskUsers: []
    }
  }

  componentDidMount() {
    this.setState({
      taskUsers: this.props.task.users
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      taskUsers: nextProps.task.users
    })
  }

  // handleStop = (e, ui) => {
  //   if (ui.deltaY !== 0) {
  //     debugger
  //     TasksAdapter.editTaskCoordinates(ui.lastX, ui.lastY, this.props.task.id )
  //   }
  // }

  addUserToTask = (selectedUser) => {
    TasksAdapter.addUser(selectedUser, this.props.task.id)
    .then((data) => {
      data.error ? alert ("user has already been assigned this task") :
      this.setState({
        taskUsers: [...this.state.taskUsers, data]
      })
    })
  }

  deleteUserFromTask = (userId) => {
    TasksAdapter.deleteUser(userId, this.props.task.id)
    .then((data) => {
      this.setState({
        taskUsers: data
      })
    })
  }

  deleteTask = (e) => {
    e.preventDefault()
    this.props.deleteTask(this.props.task.id)
  }

  showEditTask = () => this.setState({showEditTask: !this.state.showEditTask})

  showAddUserToTask = () => this.setState({showAddUserToTask: !this.state.showAddUserToTask})


  render() {
    return(
      // <Draggable
      //     axis="y"
      //     grid={[135,135]}
      //     onStop={this.handleStop}
      //     defaultPosition={{x: this.props.task.positionX, y: this.props.task.positionY,}}
      //     >
          <div className="task-component">
          { this.state.showEditTask ?
            <EditTask showEditTask={this.showEditTask} name={this.props.task.name} description={this.props.task.description} id={this.props.task.id} editTask={this.props.editTask} /> : <div><p><b>{this.props.task.name}</b></p>
            <small>{this.props.task.description}</small>
            <TaskUsers deleteUserFromTask={this.deleteUserFromTask} users={this.state.taskUsers} />
            <button onClick={this.showAddUserToTask} className="add-user-task"><i className="fa fa-plus"></i></button>
            {this.state.showAddUserToTask ? <ProjectUsersDropdown projectUsers={this.props.projectUsers}
            showAddUserToTask={this.showAddUserToTask} addUserToTask={this.addUserToTask} /> :null }
          </div>
          }
            <div className="editing-task-options">
              <button onClick={this.deleteTask}>
                <i className="fa fa-trash-o"> </i>
              </button>
              <button onClick={this.showEditTask}>
                <i className="fa fa-pencil"> </i>
              </button>
            </div>
          </div>
    // </Draggable>
    )
  }


}
