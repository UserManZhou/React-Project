import {FINDUSER} from "../../constant/StroeContant"


const initvalue = {}
export default function UserReducer(prevValue = initvalue,action) {
    const {type , data} = action
    switch (type) {
      case FINDUSER:
        return prevValue = data        

      default:
        return prevValue
    }
}