import React from 'react'
import '../css/LeftPanel.css';
import SubmitProject from './SubmitProject';
import ProjectOptions from './ProjectOptions';

export default class LeftPanel extends React.Component {

  constructor() {
    super()
    this.state = {
      showAddProject:false
    }
  }

  showAddProject = () => this.setState({showAddProject: !this.state.showAddProject})


  render() {
    return(
      <div id="left-panel-component">
        <span>{this.props.currentUser.firstname}</span>
        <button className="float-right add-project-btn circle-btn" onClick={this.showAddProject}>
          <i className="fa fa-plus"></i>
        </button>
        {this.state.showAddProject ? <SubmitProject createProject={this.props.createProject} /> :null}
        <ProjectOptions projects={this.props.projects} getProject={this.props.getProject} deleteProject={this.props.deleteProject}/>
      </div>
    )
  }



}
