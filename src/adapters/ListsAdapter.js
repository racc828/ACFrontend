const path = 'http://localhost:3000/api/v1/lists'
export default class ListsAdapter {

  static createList(list, projectId) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name: `${list.name}`,
        project_id: `${projectId}`,
        positionX: `${list.positionX}`,
        positionY: `${list.positionY}`
      })
    })
    .then( resp => resp.json())
  }

  static getList(listId) {
    return fetch(path + "/" + listId, {
      headers: headers()
    })
    .then(resp => resp.json())
  }


  // static editList(list, projectId) {
  //   return fetch(`http://localhost:3000/api/v1/lists/${list.id}`, {
  //     method: 'PATCH',
  //     headers:headers(),
  //     body: JSON.stringify({
  //       name: `${list.name}`,
  //       project_id: `${projectId}`
  //     })
  //   })
  //   .then( resp => resp.json())
  // }

  // static editListCoordinates(positionX, positionY, listId, projectId) {
  //   return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
  //     method: 'PATCH',
  //     headers:headers(),
  //     body: JSON.stringify({
  //       project_id: `${projectId}`,
  //       positionX: `${positionX}`,
  //       positionY: `${positionY}`
  //     })
  //   })
  //   .then( resp => resp.json())
  // }

  static deleteList(listId) {
    return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({
        id: `${listId}`
      })
    })
    .then( resp => resp.json())
  }
}


let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem('token')}`
  }
}
