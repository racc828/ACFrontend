import React from 'react'


export default class Task extends React.Component {

  constructor() {
    super()

    this.state = {
      showEditTask: false
    }
  }

  handleStop = (e, ui) => {
    this.setState({
      positionX: ui.lastX,
      positionY: ui.lastY
    })
  }

  render() {
    return(
        <div className="task-component">
          <div>{this.props.task.name}</div>
          <div><small>{this.props.task.description}</small></div>
          <div className="editing-task-options">
            <button onClick={this.deleteTask}>
              <i className="fa fa-trash-o"> </i>
            </button>
            <button onClick={this.showEditTask}>
              <i className="fa fa-pencil"> </i>
            </button>
          </div>
        </div>
    )
  }


}
