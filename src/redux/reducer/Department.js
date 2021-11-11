import { FIND_DEPARTMENT,INCRMENT_DEPARTMENT,DELETE_DEPARTMENT,UPDATE_DEPARTMENT } from "../../constant/StroeContant";

const department = {

  incrmentDepartment : [],
  deleteDepartment : [],
  updateDepartment : []

}


export default function DepartmentReducer(prevValue=department,action) {
  
  const {type,data} = action


  switch (type) {
    case FIND_DEPARTMENT:
      department.incrmentDepartment = data
      return department
    case INCRMENT_DEPARTMENT :
     if (data.id != undefined) {
      let departmentArr =  department.incrmentDepartment.filter((department,index) => {
        return department.id != data.id
      })
      departmentArr = [data,...departmentArr]
      department.incrmentDepartment = departmentArr
      department.updateDepartment.push(data)
     }else {
       department.incrmentDepartment.push(data)
     }
      return department;

    case DELETE_DEPARTMENT:
     if (data.id != undefined) {
      let departmentArr =  department.incrmentDepartment.filter(department =>{
         return department.id != data.id
       })
       department.incrmentDepartment = departmentArr
       department.deleteDepartment.push(data)
     }else if (data.length != undefined && data.length > 0) {
       for(let i = 0 ;i<data.length ;i++){
         for(let j = 0 ; j < department.incrmentDepartment.length ; j++){
          if (data[i].ID != undefined) {
            if (data[i].ID === department.incrmentDepartment[j].id) {
              department.incrmentDepartment.splice(j,1)
              department.deleteDepartment.push(data[i])
            }
          }else {
           if (data[i].NAME === department.incrmentDepartment[j].name) {
              department.incrmentDepartment.splice(j,1)
           }
          }
         }
       }
     }else {
      let departmentArr =  department.incrmentDepartment.filter(department =>{
        return department.id != data.id
      })
      department.incrmentDepartment = departmentArr
     }
    return department;

    default:
      return prevValue;
  }

}