import  React from 'react'

export default class AddCollaborators extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedCollaborator: null
    }
  }

  handleChange = (e) => {
    let collaborator = parseInt(e.target.value)
    this.setState({
      selectedCollaborator: collaborator
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCollaborator(this.state.selectedCollaborator)
    this.props.showAddCollaborators()
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="addCollaboratorDropdown">
          <select onChange={this.handleChange}>
            <option>Add a Collaborator</option>
            {this.props.users.map((user, i) => {
              return <option value={user.id} key={i}>{user.firstname}</option>
            })}
          </select>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
