import React from 'react'


export default class Collaborator extends React.Component {

  deleteCollaborator = (e) => {
    let userId = parseInt(e.currentTarget.dataset.id)
    this.props.deleteCollaborator(userId)
  }

  render() {
    return(
      <div className="collab-container" onClick={this.deleteCollaborator} data-id={this.props.collaborator.id}>
        <div className="collab-circle">
          <div className="collab-circle-delete-overlay">
            <i className="fa fa-trash-o"></i>
          </div>
          <i className="fa fa-user"></i>
        </div>
        <div className="center"><small>{this.props.collaborator.firstname.charAt(0)}{this.props.collaborator.lastname.charAt(0)}</small></div>
      </div>
    )
  }



}
