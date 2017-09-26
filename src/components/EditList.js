import React from 'react'

export default class EditList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      id: this.props.id
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]:value
    })
  }

  handleFocus = (e) => {
    e.currentTarget.focus()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let list = this.state
    this.props.editList(list)
    this.props.editingDropdowninEditList()
  }


  render() {
    return(
      <div id="edit-list-component" className="edit-list-component">
        <form onSubmit={this.handleSubmit} id="edit-list-form">
          <input type="text" onClick={this.handleFocus} name="name" value={this.state.name} onChange={this.handleChange} placeholder="List Name" required autoFocus/>
          <button className="btn submit-btn" type="submit">Edit List Name </button>
        </form>
      </div>
    )
  }
}
