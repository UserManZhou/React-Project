import React, {Component} from 'react';
import Table from '../../../components/Table'
import {DEPARTMENT_INREMENT} from "../../../constant/RouteContant";
import {Divider} from 'antd'
class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Department</Divider>
                <Table message="Department" to={DEPARTMENT_INREMENT}>Department Search</Table>
            </div>
        );
    }
}

export default Index;