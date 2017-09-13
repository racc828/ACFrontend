import React from 'react'
import SubmitTask from './SubmitTask'
import ListsAdapter from '../adapters/ListsAdapter'
import TasksAdapter from '../adapters/TasksAdapter'
import Task from './Task'
import EditList from './EditList'
import Draggable from 'react-draggable'


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

  editTask = (task) => {
    TasksAdapter.editTask(task)
    .then( data => {
       let index = this.state.tasks.findIndex(taskState=> taskState.id === task.id)
       this.setState({
           tasks: [
            ...this.state.tasks.slice(0,index),
            Object.assign({}, this.state.tasks[index], data),
            ...this.state.tasks.slice(index+1)
          ]
        });
     })
  }


  deleteList = (e) => {
    e.preventDefault()
    let list = this.props.list.id
    this.props.deleteList(list)

  }

  deleteTask = (task) => {
    TasksAdapter.deleteTask(task)
    .then(data => {
        this.getList(this.props.list.id)
    })
  }

  showEditList = () => this.setState({showEditList: !this.state.showEditList, editingDropdown: !this.state.editingDropdown})

  editingDropdowninEditList = () => this.setState({showEditList: !this.state.showEditList})

  editingDropdown = () => this.setState({editingDropdown: !this.state.editingDropdown})

  showAddTask = () => this.setState({showAddTask: !this.state.showAddTask})

  handleStop = (e, ui) => {
    if (ui.deltaX !== 0) {
      ListsAdapter.editListCoordinates(ui.lastX, ui.lastY, this.props.list.id )
    }
  }

  render() {
    return(
    <Draggable
        axis="x"
        grid={[310, 310]}
        onStop={this.handleStop}
        defaultPosition={{x: this.props.list.positionX, y: this.props.list.positionY,}}
        >
        <div className="list-component">
          <div className="editing-list-btns">
              <div className="dropdown-btn-container">
                <h3 className="list-title">{this.props.list.name} <i className="fa fa-chevron-down right-chevron" onClick={this.editingDropdown}></i></h3>
              </div>
              <div>{this.state.showEditList ?
                <div><EditList name={this.props.list.name} editList={this.props.editList} id={this.props.list.id} showEditList={this.showEditList} editingDropdowninEditList={this.editingDropdowninEditList} /></div> : null}
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
            {this.state.showAddTask ? <SubmitTask createTask={this.createTask} showAddTask={this.showAddTask}/> : null}
          </div>
          <div className="tasks-container">
            {this.state.tasks.map((task, i) => {
              return <Task projectUsers={this.props.projectUsers}  task={task} key={i} deleteTask={this.deleteTask} editTask={this.editTask}   />
            })}
          </div>
        </div>
      </Draggable>
    )
  }
}
