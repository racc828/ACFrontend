import React from 'react'
import SubmitTask from './SubmitTask'
import ListsAdapter from '../adapters/ListsAdapter'
import TasksAdapter from '../adapters/TasksAdapter'
import Task from './Task'
import EditList from './EditList'

export default class List extends React.Component {

  constructor() {
    super()

    this.state = {
      showAddTask: false,
      tasks: [],
      showEditList:false,
      editingDropdown:false

    }
  }

  getList = (listId) => {
    ListsAdapter.getList(listId)
    .then(list => {
      this.setState({
        tasks: list.tasks
      })
    })
  }

  componentDidMount() {
    this.getList(this.props.list.id)
  }

  componentWillReceiveProps(nextProps) {
    this.getList(nextProps.list.id)
  }

  createTask = (newTask) => {
    TasksAdapter.createTask(newTask, this.props.list.id)
    .then(task => {
      this.setState({
        tasks: [...this.state.tasks, task]
      })
    })
  }

  deleteList = (e) => {
    e.preventDefault()
    let list = this.props.list.id
    this.props.deleteList(list)
  }

  showEditList = () => this.setState({showEditList: !this.state.showEditList, editingDropdown: !this.state.editingDropdown})

  editingDropdown = () => this.setState({editingDropdown: !this.state.editingDropdown})

  showAddTask = () => this.setState({showAddTask: !this.state.showAddTask})

  render() {
    return(
      <div className="list-component">
        <div className="editing-list-btns">
            <div className="dropdown-btn-container">
              <h3 className="list-title">{this.props.list.name} <i className="fa fa-chevron-down right-chevron" onClick={this.editingDropdown}></i></h3>
            </div>
            <div>{this.state.showEditList ?
              <div><EditList /></div> : null}
            </div>
            <div>{this.state.editingDropdown ?
                <div className="dropdown-button-btn-container"><button className="dropdown-button-btn" onClick={this.deleteList}>
                  <div> Delete List </div>
                </button>
                <button className="dropdown-button-btn" onClick={this.showEditList}>
                  <div> Edit List </div>
                </button></div> : null}
            </div>
          </div>
        <div className="add-task-btn-container">
          <button onClick={this.showAddTask} className="add-task-btn"><i className="fa fa-plus"></i></button>
        </div>
        <div className="submit-task-container">
          {this.state.showAddTask ? <SubmitTask createTask={this.createTask}/> : null}
        </div>
        <div className="tasks-container">
          {this.state.tasks.map((task, i) => {
            return <Task task={task} key={i} />
          })}
        </div>
      </div>
    )
  }
}
