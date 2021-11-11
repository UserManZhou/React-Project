import { nanoid } from 'nanoid'

export const verifyToken = (token,history,routeUrl) =>{
    if (token === '' || token === null || token === undefined) {
      console.log("------------");
      history.replace(routeUrl,{message:'Please Login'});
  }
}

export const StringJson  = (value) => {
 try {
  return JSON.parse(value)
 } catch (error) {
   return error
 }
}

export const departmentMap = (department)  => {
  return department.map(value => {
    return {
        key: nanoid(),
        ID: value.id,
        NAME: value.name,
        REMARK: value.remark,
        Action: value
    }
})
}

export const userMap = (user) => {
  return user.map(user => {
    return {
        key: nanoid(),
        ID: user.id,
        LoginName: user.loginname,
        Password: user.password,
        CreateDate: user.createTime,
        UserName: user.username,
        Status: user.status,
        Action: user
    }
})
}

export const searchDepartmentMap = (search_Department) => {
  return search_Department.map(value => {
    return {
        key: nanoid(),
        ID: value.id,
        NAME: value.name,
        REMARK: value.remark,
        Action: value
    }
})
}


export const searchEquestValue = (Reducer,value) => {
  const { incrmentDepartment,incrmentPosition } = Reducer
  if (incrmentDepartment != undefined) {
    return incrmentDepartment.filter(department => {
      return department.name === value
  })
  }else {
    return incrmentPosition.filter(position => {
      return position.name === value
  })
  }
}