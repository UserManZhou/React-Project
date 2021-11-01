import React, {Component} from 'react';
import {Divider} from "antd";
import Table from "../../../components/Table";
import {NOTICE_INREMENT} from "../../../constant/RouteContant";

class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Notice</Divider>
                <Table message='Notice' to={NOTICE_INREMENT}>Notice Search</Table>
            </div>
        );
    }
}

export default Index