import React from 'react'
import List from './List'
import Collaborator from './Collaborator'
import SubmitList from './SubmitList'
import EditProject from './EditProject'
import AddCollaborators from './AddCollaborators'
import UsersAdapter from '../adapters/UsersAdapter'
import ProjectsAdapter from '../adapters/ProjectsAdapter'
import TasksAdapter from '../adapters/TasksAdapter'

export default class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showEditProjet: false,
      users: [],
      showAddCollaborators: false
    }
  }

  componentDidMount() {
    UsersAdapter.getUsers()
    .then(data => {this.setState({
      users: data
      })
    })
  }


  showEditProject = () => this.setState({showEditProject: !this.state.showEditProject})

  showAddCollaborators = () => this.setState({showAddCollaborators: !this.state.showAddCollaborators})


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
          {this.state.showAddCollaborators ? <AddCollaborators addCollaborator={this.props.addCollaborator} users={this.state.users}/>: null }
          <div className="collaborators-container">
            {this.props.selectedProject.users.map((user, i) => {
              return <Collaborator collaborator={user} key={i}/>
            })}
            <div className="add-collab-btn" onClick={this.showAddCollaborators}>
              <div className="collab-circle-grey"><i className="fa fa-plus"></i></div>
            </div>
          </div>
        </div>

        <div className="list-container">

          {this.props.selectedProject.lists.map((list, i) => {
            return <List list={list} key={i} deleteList={this.props.deleteList} editList={this.props.editList} projectUsers={this.props.selectedProject.users} />
          })}
        </div>


      </div>
    )
  }
}
