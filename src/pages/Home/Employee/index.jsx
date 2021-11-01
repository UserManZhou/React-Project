import React, {Component} from 'react';
import {Divider} from "antd";
import {EMPLOYEE_INCREMENT} from "../../../constant/RouteContant";
import Table from "../../../components/Table";

class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Employee</Divider>
                <Table message="Employee Manage" to={EMPLOYEE_INCREMENT}>Search Employee Message</Table>
            </div>
        );
    }
}

export default Index;