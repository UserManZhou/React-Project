import React, {Component} from 'react';
import {Menu} from "antd";
import {
    TeamOutlined,
    IdcardOutlined,
    UserAddOutlined,
    SearchOutlined,
    ApartmentOutlined,
    UserOutlined,
    ProfileOutlined,
    DownloadOutlined
} from "@ant-design/icons";
import {Link, NavLink} from "react-router-dom";

const {SubMenu} = Menu

class Index extends Component {
    render() {
        return (
            <div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined style={{fontSize:'16px'}} />} title="User Manage">
                        <Menu.Item key="1" icon={<SearchOutlined  style={{fontSize:'16px'}}/>} >
                            <NavLink replace to="/home/usersearch" >User Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserAddOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink replace to="/home/incrementuser">Increment User</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<ApartmentOutlined style={{fontSize:'16px'}}/>} title="Branch Manage">
                        <Menu.Item key="3">Team 1</Menu.Item>
                        <Menu.Item key="4">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<IdcardOutlined style={{fontSize:'16px'}}/>} title="Position Manage">
                        <Menu.Item key="5">Team 1</Menu.Item>
                        <Menu.Item key="6">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<TeamOutlined style={{fontSize:'16px'}}/>} title="Employee Manage">
                        <Menu.Item key="7">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<ProfileOutlined style={{fontSize:'16px'}}/>} title="Notice Manage">
                        <Menu.Item key="9">Team 1</Menu.Item>
                        <Menu.Item key="10">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" icon={<DownloadOutlined style={{fontSize:'16px'}}/>} title="Download Manage">
                        <Menu.Item key="11">Team 1</Menu.Item>
                        <Menu.Item key="12">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Index;