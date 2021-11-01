import React, {Component} from 'react';
import Table from '../../../components/Table'
import {Divider} from 'antd'
import {USER_INCREMENT} from "../../../constant/RouteContant";
class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">User</Divider>
                <Table message="User Manage" to={USER_INCREMENT}>Search User Message</Table>
            </div>
        );
    }
}

export default Index;