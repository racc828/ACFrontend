import React from 'react'


export default class Collaborator extends React.Component {


  render() {
    return(
      <div className="collab-container">
        <div className="collab-circle"><i className="fa fa-user"></i></div>
        <div><small>{this.props.collaborator.firstname}</small></div>
      </div>
    )
  }



}
