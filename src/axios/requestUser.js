import { request } from './request'

export function requestUser(updateUser,deleteUser,incrementUser,token) {
  const update_user = updateUser.filter(value => {
    if (value.id != undefined) {
        return value
    }
  })
  const delete_user = deleteUser.filter(value => {
    if (value.id != undefined) {
        return value
    }
  })
  const increment_users = incrementUser.filter(value => {
    if (value.id === undefined) {
        return value
    }
  })
  if (update_user.length > 0) {
    request({
        url: "user/UserManage/updateUser",
        headers: { 'authorization': 'Bearer ' + token },
        data: update_user,
        method: "POST"
    }, success => {
        if (success.data === "OK") {
            alert("OK")
        } else if (success.data === "Please Again Operation") {
            alert(success.data)
        }
    }, error => console.log(error))
  }
  if (delete_user.length > 0) {
    request({
        url: "user/UserManage/deleteUser",
        headers: { 'authorization': 'Bearer ' + token },
        data: delete_user,
        method: "POST"
    }, success => {
        if (success.data === "OK") {
            alert("OK")
        } else if (success.data === "Please Again Operation") {
            alert(success.data)
        }
    }, error => console.log(error))
  }
  if (increment_users.length > 0) {
    request({
        url: "user/UserManage/incrementUser",
        headers: { 'authorization': 'Bearer ' + token },
        data: increment_users,
        method: "POST"
    }, success => {
        if (success.data === "OK") {
            alert("OK")
        } else if (success.data === "Please Again Operation") {
            alert(success.data)
        }
    }, error => console.log(error))
  }
}