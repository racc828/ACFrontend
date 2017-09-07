import React from 'react'

export default class ProjectOptions extends React.Component {

handleClick = (e) => {
  let project = parseInt(e.target.dataset.id)
  this.props.getProject(project)
}

handleDelete = (e) => {
  e.preventDefault()
  let project = parseInt(e.currentTarget.dataset.id)
  this.props.deleteProject(project)
}

render() {
  return(
    <div className="project-options-component">
      {this.props.projects.map((project, i) =>
        <div className="side-list-btn-container" key={i}>
          <button onClick={this.handleClick} className="project-option-btn" data-id={project.id}>
            {project.name}
          </button>
          <button onClick={this.handleDelete} className="projet-option-delete-btn" data-id={project.id}>
            <i className="fa fa-trash-o"> </i>
          </button>
        </div> )}
    </div>
  )
}


}
