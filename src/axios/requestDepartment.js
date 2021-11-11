import { request } from './request'

export function requestDepartment(incrmentDepartment,deleteDepartment,updateDepartment,token) {
  const incrment_department =  incrmentDepartment.filter(department => {
    return department.id === undefined
  })
  const delete_department = deleteDepartment.filter(department => {
    return department.id != undefined
  })
  const update_department =  updateDepartment.filter(department => {
    return department.id != undefined
  })
  if (incrment_department.length > 0) {
    
    request({
      url : "department/DepartmentManage/incrementDepartment",
      Headers : {"authorization" : "Bearer"+token},
      data : incrment_department,
      method : "POST"
    }, success => {
      if (success.data === "OK") {
          alert("OK")
      } else if (success.data === "Please Again Operation") {
          alert(success.data)
      } 
    }, error => console.log(error))

  }else if (delete_department.length > 0) {
    
    request({
      url : 'department/DepartmentManage/deleteDepartment',
      Headers : {'authorization' : 'Bearer' + token},
      method : "POST",
      data : delete_department
    }, success => {
      if (success.data === "OK") {
          alert("OK")
      } else if (success.data === "Please Again Operation") {
          alert(success.data)
      } 
    }, error => console.log(error))

  }else if (update_department.length > 0) {
    
    request({
      url : 'department/DepartmentManage/updateDepartment',
      Headers : {'authorization' : 'Bearer'+token},
      method:'POST',
      data : update_department
    }, success => {
      if (success.data === "OK") {
          alert("OK")
      } else if (success.data === "Please Again Operation") {
          alert(success.data)
      } 
    }, error => console.log(error))

  }
}