import React from 'react'
import List from './List'
import SubmitList from './SubmitList'
import EditProject from './EditProject'

export default class Project extends React.Component {

  constructor() {
    super()
    this.state = {
      showEditProjet: false
    }
  }

  showEditProject = () => this.setState({showEditProject: !this.state.showEditProject})

  render(){
    return(
      <div id="project-component">
        <div className="project-header">
          { this.state.showEditProject ? <EditProject  editProject={this.props.editProject} name={this.props.selectedProject.name} projectId={this.props.selectedProject.id} showEditProject={this.showEditProject}/> : <h1>{this.props.selectedProject.name}
          <button className="edit-project-btn" onClick={this.showEditProject}> <i className="fa fa-pencil"></i>
          </button>
        </h1>}

        </div>
        <div className="submit-list">
          <SubmitList createList={this.props.createList} selectedProject={this.props.selectedProject} editProject={this.props.editProject} />
        </div>
        <div className="list-container">
          {this.props.selectedProject.lists.map((list, i) => {
            return <List list={list} key={i} deleteList={this.props.deleteList} editList={this.props.editList} />
          })}
        </div>
      </div>
    )
  }
}
