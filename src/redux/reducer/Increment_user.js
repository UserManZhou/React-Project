import { ADD_USER, DELETE_USER, INCREMENT_USER, UPDATE_USER } from "../../constant/StroeContant";

const initValue = {}
let userArr = {
  incrementUser : [],
  updateUser : [],
  deleteUser:[]
}
export default function IncrementUserReducer(prevValue = initValue,action) {

    const {type,data} = action

    switch (type) {
      case INCREMENT_USER:
        if (data.length > 0) {
          if (userArr.incrementUser.length > 0) {
            for(let j = 0 ; j < userArr.incrementUser.length;j++){
              let num = 0;
              for(let i = 0 ; i <data.length ; i++ ){
                if (data[i].id === userArr.incrementUser[j].id) {
                  num++;
                  if (num >1) {
                    userArr.incrementUser.splice(j,1)
                  }
                }
              }
            }
          }else{
            userArr.incrementUser = [...data,...userArr.incrementUser]
          }
        }
        return userArr
      case UPDATE_USER:
        for(let i = 0 ;i<userArr.incrementUser.length;i++){
          if (userArr.incrementUser[i].loginname === data.compareLoginName) {
                  const arr = userArr.incrementUser[i]
                  userArr.incrementUser.splice(i,1)
           }
        }
        if (data.user.id != undefined) {
          userArr.updateUser = [data.user]
        }
          userArr.incrementUser = [...userArr.incrementUser,data.user]
       return userArr
      case DELETE_USER:
       
       if (data.length <= 1) {
        userArr.incrementUser.filter((value,index) => {
          if (value.loginname === data.Action.loginname) {
            userArr.deleteUser = [data.Action]
            userArr.incrementUser.splice(index,1)
          }
        })
       }else if (data.length > 1) {
        data.filter(data => {
          userArr.incrementUser.filter((arr,index) => {
            if ( arr.loginname === data.Action.loginname) {
              userArr.deleteUser.push(data.Action)
              debugger
              userArr.incrementUser.splice(index,1)
            }
          })
        })
       }
        return userArr
      case ADD_USER : 
      userArr.incrementUser = [...data,...userArr.incrementUser]
        return userArr
      default:
      return prevValue
    }
  
}
