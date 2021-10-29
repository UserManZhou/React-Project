import React, {Component} from 'react';
import { Layout } from 'antd';
import Item from './Item'
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
const { Sider } = Layout;

class Index extends Component {
    render() {
        return (
            <div>
                <Sider  trigger={null}  style={{ minHeight: '100vh' }}>
                    <div className="logo" />
                    <Item/>
                </Sider>
            </div>
        );
    }
}

export default Index;