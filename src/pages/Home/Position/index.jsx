import React, {Component} from 'react';
import Table from '../../../components/Table'
import {Divider} from "antd";
import {POSITION_INCREMENT} from "../../../constant/RouteContant";
class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Position</Divider>
                <Table message='Position' to={POSITION_INCREMENT}>Prosition Search</Table>
            </div>
        );
    }
}

export default Index;