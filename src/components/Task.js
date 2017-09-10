import React from 'react'
import Draggable from 'react-draggable'
import TasksAdapter from '../adapters/TasksAdapter'
import EditTask from './EditTask'

export default class Task extends React.Component {

  constructor() {
    super()

    this.state = {
      showEditTask: false
    }
  }

  handleStop = (e, ui) => {
    if (ui.deltaX !== 0) {
      TasksAdapter.editTaskCoordinates(ui.lastX, ui.lastY, this.props.task.id )
    }
  }

  deleteTask = (e) => {
    e.preventDefault()
    this.props.deleteTask(this.props.task.id)
  }

  showEditTask = () => this.setState({showEditTask: !this.state.showEditTask})


  render() {
    return(
      <Draggable
          axis="y"
          grid={[110,110]}
          onStop={this.handleStop}
          defaultPosition={{x: this.props.task.positionX, y: this.props.task.positionY,}}
          >
          <div className="task-component">
          { this.state.showEditTask ?
            <EditTask showEditTask={this.showEditTask} name={this.props.task.name} description={this.props.task.description} id={this.props.task.id} editTask={this.props.editTask} /> : <div><p><b>{this.props.task.name}</b></p>
            <small>{this.props.task.description}</small></div>
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
    </Draggable>
    )
  }


}
