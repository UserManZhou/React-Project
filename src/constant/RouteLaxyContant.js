import {lazy} from 'react'
export const Centre = lazy(() => import('../pages/Home/Centre'))
export const User = lazy(()=>import('../pages/Home/User'))
export const UserIncrement = lazy(() => import('../pages/Home/IncrementUser') )
export const Department = lazy(()=>import('../pages/Home/Department'))
export const Departmentincrement = lazy(()=>import('../pages/Home/DepartmentIncrement'))
export const Position = lazy(() => import('../pages/Home/Position'))
export const PositionIncrement = lazy(() => import('../pages/Home/PrositionIncrement'))
export const Employee = lazy(() => import('../pages/Home/Employee'))
export const EmployeeIncrement = lazy(() => import('../pages/Home/EmployeeIncrement'))
export const Notice = lazy(() => import('../pages/Home/Notice'))
export const NoticeInrement = lazy(() => import('../pages/Home/NoticeInrement'))
export const Download = lazy(() => import('../pages/Home/Download'))
export const DownloadInrement = lazy(() => import('../pages/Home/DownloadIncrement'))
export const Home = lazy(() => import('../pages/Home'))
export const Login = lazy(() => import('../pages/Login'))
