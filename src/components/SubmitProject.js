import React from 'react'

export default class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ""
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
    let newProject = this.state
    this.props.createProject(newProject)
    e.target.reset()
  }

  render() {
    return(
      <div id="submit-project-component">
        <form onSubmit={this.handleSubmit} id="submit-project-form">
          <label>Project Name</label>
          <input type="text" name="name" onChange={this.handleChange}  required/>
        </form>
      </div>
    )
  }

}
