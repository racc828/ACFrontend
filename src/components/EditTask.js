import React from 'react'

export default class EditTask extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: this.props.description,
      name: this.props.name,
      id: this.props.id
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value,
    })
  }

  handleFocus = (e) => {
    e.currentTarget.autofocus = true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let task = this.state
    this.props.editTask(task)
    this.props.showEditTask()
  }

  render() {
    return(
      <div id="edit-task-component">
        <form onSubmit={this.handleSubmit} id="edit-task-form" className="edit-task-form">
          <input type="text" onClick={this.handleFocus} name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} required/>
          <input type="text" onClick={this.handleFocus} name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description} required />
          <button className="btn submit-btn" type="submit">Save </button>
        </form>
      </div>
    )
  }

}
