const path = 'http://localhost:3000/api/v1/tasks'
export default class TasksAdapter {

  static createTask(newTask, listId) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        list_id: `${listId}`,
        name: `${newTask.name}`,
        description: `${newTask.description}`,
        completed: `${newTask.completed}`,
        positionX: `${newTask.positionX}`,
        positionY: `${newTask.positionY}`
      })
    })
    .then( resp => resp.json())
  }

  static editTaskCoordinates(positionX, positionY, taskId) {
    return fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
      method: 'PATCH',
      headers:headers(),
      body: JSON.stringify({
        positionY: `${positionY}`
      })
    })
    .then( resp => resp.json())
  }

    static editTask(task) {
      return fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
        method: 'PATCH',
        headers:headers(),
        body: JSON.stringify({
          name: `${task.name}`,
          description: `${task.description}`
        })
      })
      .then( resp => resp.json())
    }

    static addUser(userId, taskId) {
      return fetch('http://localhost:3000/api/v1/tasks/add_user',{
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
          id: taskId,
          user_id: userId
        })
      })
        .then( resp => resp.json())
      }

      static deleteUser(userId, taskId) {
        return fetch('http://localhost:3000/api/v1/tasks/delete_user',{
          method: 'POST',
          headers: headers(),
          body: JSON.stringify({
            task_id: taskId,
            user_id: userId
          })
        })
          .then( resp => resp.json())
        }

  static deleteTask(taskId) {
    return fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({
          id: `${taskId}`
        })
      })
      .then( resp => resp.json())
    }

    static getUserTasks(userId) {
      debugger
      return fetch('http://localhost:3000/api/v1/tasks/get_tasks', {
        method: 'post',
        headers: headers(),
        body: JSON.stringify({
          user_id: userId
        })
      })
      .then( resp => resp.json())
    }

    static getTask(taskId) {
      return fetch(path + "/" + taskId, {
        headers: headers()
      })
      .then(resp => resp.json())
    }

  }

  let headers = () => {
    const token = localStorage.getItem('token')
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }
