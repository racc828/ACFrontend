import React from 'react'
import List from './List'
import SubmitList from './SubmitList'

export default class Project extends React.Component {


  render(){
    return(
      <div id="project-component">
        <div className="project-header">
          <h1>{this.props.selectedProject.name}</h1>
        </div>
        <div className="submit-list">
          <SubmitList createList={this.props.createList} selectedProject={this.props.selectedProject} />
        </div>
        <div className="list-container">
          {this.props.selectedProject.lists.map((list, i) => {
            return <List list={list} key={i} deleteList={this.props.deleteList} />
          })}
        </div>
      </div>
    )
  }
}
