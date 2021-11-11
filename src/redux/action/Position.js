import { INCRMENT_POSITION,DELETE_POSITION,UPDATE_POSITION,FIND_POSITION, } from "../../constant/StroeContant";


export const find_Positioin_Action = data => ({type:FIND_POSITION,data})

export const increment_Position_Action = data => ({type:INCRMENT_POSITION,data})

export const delete_Position_Action = data => ({type:DELETE_POSITION,data})

export const update_Position_Action = data => ({type : UPDATE_POSITION,data})