import React from 'react'


export default class Collaborator extends React.Component {


  render() {
    return(
      <div className="collab-container">
        <div className="collab-circle"><i className="fa fa-user"></i></div>
        <div className="center"><small>{this.props.collaborator.firstname.charAt(0)}{this.props.collaborator.lastname.charAt(0)}</small></div>
      </div>
    )
  }



}
