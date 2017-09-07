import React from 'react'

export default class SubmitList extends React.Component {

  constructor() {
  super()

    this.state = {
      name: "",
      positionX: null,
      positionY: null
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newList = this.state
    this.props.createList(newList, this.props.selectedProject.id)
    e.target.reset()
  }

  render() {
    return(
      <div id="submit-list-component">
        <form onSubmit={this.handleSubmit} id="submit-list-form">
          <label>List name</label>
          <input type="text" name="name" onChange={this.handleChange} required/>
          <button className="btn submit-btn" type="submit">Add List </button>
        </form>
      </div>
    )
  }

}
