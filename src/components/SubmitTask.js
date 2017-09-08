import React from 'react'

export default class SubmitTask extends React.Component {

  constructor() {
    super()

    this.state ={
      name: "",
      description: "",
      completed: false,
      positionX: null,
      positionY:null
    }

  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newTask = this.state
    this.props.createTask(newTask)
    this.props.showAddTask()
    e.target.reset()
  }

  render() {
    return(
      <div id="submit-task-component">
        <form onSubmit={this.handleSubmit} id="submit-task-form">
          <input type="text" placeholder="name" name="name" onChange={this.handleChange} required/>
          <input type="text" placeholder="description" name="description" onChange={this.handleChange} required/>
          <button className="btn submit-btn" type="submit">Add Task </button>
        </form>
      </div>
    )
  }

}
