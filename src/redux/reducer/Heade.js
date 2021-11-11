import { USER } from "../../constant/StroeContant";
import storageSession from 'redux-persist/lib/storage/session'
const initValue =  sessionStorage.getItem('user')?sessionStorage.getItem('user'):{}
export default function HeadeReducer(pervValue = initValue,action) {
  const {type,data} = action
  switch (type) {
    case USER:      
    storageSession.setItem("user",JSON.stringify(data))
    return pervValue = {...data}
    default:
    return pervValue
  }
  
}