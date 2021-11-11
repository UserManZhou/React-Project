import {TOKEN } from "../../constant/StroeContant";
   //  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'
let initValue =  sessionStorage.getItem('token')?sessionStorage.getItem('token'):''
export default function loginReducer(prevValue=initValue,action) {
  
    const {type,data} = action
    switch (type) {
      case TOKEN :
         // 存储token
        storageSession.setItem("token",JSON.stringify(data))
        return prevValue = data;   
      default:
        return prevValue;
    }
}