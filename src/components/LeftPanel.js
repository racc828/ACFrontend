import React from 'react'
import '../css/LeftPanel.css';
import SubmitProject from './SubmitProject';
import ProjectOptions from './ProjectOptions';

export default class LeftPanel extends React.Component {


  render() {
    return(
      <div id="left-panel-component">
        Hey {this.props.currentUser.firstname}
        <SubmitProject createProject={this.props.createProject} />
        <ProjectOptions projects={this.props.projects} getProject={this.props.getProject} deleteProject={this.props.deleteProject}/>
      </div>
    )
  }



}
