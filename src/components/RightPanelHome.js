import React from 'react'

export default class RightPanelHome extends React.Component {

  constructor() {
    super()
    this.state = {
      showProjectForm: false,
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
  }

showProjectForm = () => this.setState({showProjectForm: !this.state.showProjectForm})

  render(){
    return(
      <div id="project-home-component">
        <div className="project-header">
          <h1>Home</h1>
        </div>
        {this.state.showProjectForm ?
          <div className="home-panel-main">
            <form className="center" onSubmit={this.handleSubmit}>
              <label>Project Name</label>
              <input onChange={this.handleChange} type="text" name="name"/>
              <div><input className="btn square-btn blue-highlight" type="submit" value="Add List"/></div>
            </form>
          </div> :
          <div className="home-panel-main">
            <div className="home-panel-main-inner center">
              <h2 className="center">Create Project</h2>
              <i onClick={this.showProjectForm} className="fa fa-plus fa-2x"></i>
            </div>
          </div>
        }
      </div>
    )
  }
}
