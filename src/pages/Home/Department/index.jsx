import React, { Component } from 'react';
import Table from '../../../components/Table'
import { DEPARTMENT_INREMENT, LOGIN } from "../../../constant/RouteContant";
import { Divider } from 'antd'
import { request } from "../../../axios/request"
import { connect } from "react-redux"
import { FIND_DEPARTMENT } from '../../../constant/StroeContant';
import {find_department_action} from '../../../redux/action/Department'
class Index extends Component {


    state = { department: [] }

    static getDerivedStateFromProps(props,state){
        const {department} = state
        const {departmentReducer} = props
        const {incrmentDepartment} = departmentReducer
        if (department.length > 0 ) {
            return {department}
        }else if (incrmentDepartment.length > 0) {
            return {department : incrmentDepartment}
        }
    }

    componentDidMount() {
        const { loginToken } = this.props
        const {department} = this.state
       if (department.length === 0 ) {
        request({
            url: 'department/DepartmentManage/findDepartment',
            headers: { 'authorization': 'Bearer ' + loginToken },
            method: 'GET'
        }, success => {
            const { data } = success
            const { history } = this.props
            if (data === " Please Login get Token") {
                history.replace(LOGIN, { message: data })
            }else{
            this.setState({ department : success.data })
            this.props.FIND_DEPARTMENT(success.data)
            }
        }, error => console.log(error))
       }
    }

    render() {
        const {department} = this.state
        console.log(department);
        return (
            <div>
                <Divider orientation="left">Department</Divider>
                <Table message="Department" to={DEPARTMENT_INREMENT} department={department}>Department Search</Table>
            </div>
        );
    }
}

// export default Index;
export default connect(
    state => (
        { loginToken: state.loginReducer,departmentReducer : state.DepartmentReducer }),
    {
        FIND_DEPARTMENT : find_department_action
    }
)(Index)
