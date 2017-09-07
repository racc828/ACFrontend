import React from 'react'
import SessionsAdapter from '../adapters/SessionsAdapter'
import RightPanel from './RightPanel'
import LeftPanel from './LeftPanel'
import ProjectsAdapter from '../adapters/ProjectsAdapter'
import ListsAdapter from '../adapters/ListsAdapter'



export default class Board extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {},
      projects: [],
      selectedProject: null
    }
  }

  componentDidMount() {
    SessionsAdapter.currentUser()
    .then( data => {
      this.setState({
        currentUser: data
      })
    })
    .then( () => {
      ProjectsAdapter.getProjects(this.state.currentUser)
      .then( projects => {
        this.setState({projects: projects})
      })
    })
  }

  createProject = (newProject) => {
    ProjectsAdapter.createProject(newProject, this.state.currentUser)
    .then(newData => {
      this.setState({
        projects: [...this.state.projects, newData]
      })
    })
  }

  deleteProject = (project) => {
    ProjectsAdapter.deleteProject(project)
    .then(projects => {
      this.setState({
        projects: projects
      })
    })
    if (this.state.selectedProject.id === project) {
      this.props.history.push('/')
    }
  }

  createList = (newList, projectId) => {
    ListsAdapter.createList(newList, projectId)
    .then(list => {
      this.setState({
       selectedProject: {
         ...this.state.selectedProject,
         lists: [...this.state.selectedProject.lists, list]
       }
     })
   })
  }

  getProject = (project) => {
    ProjectsAdapter.getProject(project)
    .then(project => {this.setState({
        selectedProject: project
      })
    })
  }

  render() {
    return(
      <div id="board-component">
        <LeftPanel currentUser={this.state.currentUser} projects={this.state.projects} createProject={this.createProject} deleteProject={this.deleteProject} getProject={this.getProject} />
        <RightPanel currentUser={this.state.currentUser}  projects={this.state.projects} logOut={this.props.logOut} selectedProject={this.state.selectedProject} createList={this.createList} />
      </div>
    )
  }
}
