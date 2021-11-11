import { INCREMENT_USER, UPDATE_USER,DELETE_USER, ADD_USER } from "../../constant/StroeContant";

export const increment_user_action = data => ({type:INCREMENT_USER,data})

export const update_user_action = data => ({type:UPDATE_USER,data})

export const delete_user_action = data => ({type:DELETE_USER,data})

export const add_user_action = data => ({type:ADD_USER,data})