const path = 'http://localhost:3000/api/v1/projects'
export default class ProjectsAdapter {

  static createProject(project, currentUser) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name: `${project.name}`,
        user_id: `${currentUser.id}`
      })
    })
    .then( resp => resp.json())
  }


  static addUserToProject(userId, projectId) {
    return fetch('http://localhost:3000/api/v1/projects/add_user',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        id: projectId,
        user_id: userId
      })
    })
    .then( resp => resp.json())
  }

  static deleteUserFromProject(userId, projectId) {
    return fetch('http://localhost:3000/api/v1/projects/delete_user',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        project_id: projectId,
        user_id: userId
      })
    })
    .then( resp => resp.json())
  }

  static getProjects(currentUser) {
    return fetch(path, {
      headers: headers()
      })
      .then( resp => resp.json())
    }

  static getProject(projectId) {
    return fetch(path + "/" + projectId, {
      headers: headers()
    })
    .then(resp => resp.json())
  }

    static editProject(project) {
    return fetch(`http://localhost:3000/api/v1/projects/${project.projectId}`, {
      method: 'PATCH',
      headers:headers(),
      body: JSON.stringify({
        name: `${project.name}`
      })
    })
    .then( resp => resp.json())
    }

    static deleteProject(projectId) {
      return fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({
          id: `${projectId}`
        })
      })
      .then( resp => resp.json())
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
