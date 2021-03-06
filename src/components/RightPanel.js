import React from 'react'
import '../css/RightPanel.css'
import Project from './Project'
import RightPanelHome from './RightPanelHome'
import { Link } from "react-router-dom";

export default class RightPanel extends React.Component {


  render() {
    return(
      <div id="right-panel-component">
        <div className="right-panel-header">
          <div className="container">
            <button className="logout-btn square-btn blue-highlight" onClick={this.props.logOut}>Log Out</button>
            <Link to="/mytasks">My Tasks</Link>
          </div>
        </div>
        {this.props.selectedProject === null ? <RightPanelHome createProject={this.props.createProject} /> : <Project editList={this.props.editList}
          addCollaborator={this.props.addCollaborator}
          deleteCollaborator={this.props.deleteCollaborator} createList={this.props.createList} deleteList={this.props.deleteList} selectedProject={this.props.selectedProject} editProject={this.props.editProject}/>}
      </div>
    )
  }



}
