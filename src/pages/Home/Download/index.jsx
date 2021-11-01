import React, {Component} from 'react';
import {Divider} from "antd";
import {DOWNLOAD_INCREMENT} from "../../../constant/RouteContant";
import Table from "../../../components/Table";

class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Download</Divider>
                <Table message='Download' to={DOWNLOAD_INCREMENT}>Download Search</Table>
            </div>
        );
    }
}

export default Index;