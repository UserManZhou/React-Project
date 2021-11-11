import { FIND_DEPARTMENT,DELETE_DEPARTMENT,UPDATE_DEPARTMENT,INCRMENT_DEPARTMENT } from "../../constant/StroeContant";

export const find_department_action = data => ({type:FIND_DEPARTMENT,data})

export const delete_department_action = data => ({type:DELETE_DEPARTMENT,data})

export const update_department_action = data => ({type:UPDATE_DEPARTMENT,data})

export const incrment_department_action = data => ({type:INCRMENT_DEPARTMENT,data})