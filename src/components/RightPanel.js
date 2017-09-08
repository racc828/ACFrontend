import React from 'react'
import '../css/RightPanel.css'
import Project from './Project'
import RightPanelHome from './RightPanelHome'

export default class RightPanel extends React.Component {


  render() {
    return(
      <div id="right-panel-component">
        <div className="right-panel-header">
          <div className="container">
            <button className="logout-btn square-btn blue-highlight" onClick={this.props.logOut}>Log Out</button>
          </div>
        </div>
        {this.props.selectedProject === null ? <RightPanelHome /> : <Project editList={this.props.editList} createList={this.props.createList} deleteList={this.props.deleteList} selectedProject={this.props.selectedProject} editProject={this.props.editProject}/>}
      </div>
    )
  }



}
