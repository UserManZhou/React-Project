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
    DownloadOutlined,
    ClusterOutlined,
    PlusSquareOutlined,
    ContactsOutlined,
    SolutionOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
    NotificationOutlined,
    PlusCircleFilled,
    FileMarkdownFilled,
    FileAddFilled
} from "@ant-design/icons";
import {
    USER_SEARCH,
    USER_INCREMENT,
    DEPARTMENT,
    DEPARTMENT_INREMENT,
    POSITION,
    POSITION_INCREMENT,
    EMPLOYEE,
    EMPLOYEE_INCREMENT,
    NOTICE,
    NOTICE_INREMENT,
    DOWNLOAD,
    DOWNLOAD_INCREMENT,
} from '../../../constant/RouteContant'
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu

class Index extends Component {

    render() {
        return (
            <div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined style={{fontSize:'16px'}} />} title="User Manage">
                        <Menu.Item key="1" icon={<SearchOutlined  style={{fontSize:'16px'}}/>} >
                            <NavLink replace to={USER_SEARCH} >User Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserAddOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink replace to={USER_INCREMENT}>Increment User</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<ApartmentOutlined style={{fontSize:'16px'}}/>} title="Branch Manage">
                        <Menu.Item key="3" icon={<ClusterOutlined  style={{fontSize:'16px'}}/>}>
                            <NavLink to={DEPARTMENT}>Department Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PlusSquareOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink to={DEPARTMENT_INREMENT}>Department Increment</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<IdcardOutlined style={{fontSize:'16px'}}/>} title="Position Manage">
                        <Menu.Item key="5" icon={<ContactsOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink to={POSITION}>Position Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<SolutionOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink to={POSITION_INCREMENT}>Position Increment</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<TeamOutlined style={{fontSize:'16px'}}/>} title="Employee Manage">
                        <Menu.Item key="7" icon={<UserSwitchOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink to={EMPLOYEE}>Employee Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<UsergroupAddOutlined style={{fontSize:'16px'}}/>}>
                            <NavLink to={EMPLOYEE_INCREMENT}>Employee Increment</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<ProfileOutlined style={{fontSize:'16px'}}/>} title="Notice Manage">
                        <Menu.Item key="9" icon={<NotificationOutlined  style={{fontSize:'16px'}}/>}>
                            <NavLink to={NOTICE}>Notice</NavLink>
                        </Menu.Item>
                        <Menu.Item key="10" icon={<PlusCircleFilled style={{fontSize:'16px'}}/>}>
                            <NavLink to={NOTICE_INREMENT}>Increment Notice</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" icon={<DownloadOutlined style={{fontSize:'16px'}}/>} title="Download Manage">
                        <Menu.Item key="11" icon={<FileMarkdownFilled style={{fontSize:'16px'}}/>}>
                            <NavLink to={DOWNLOAD}>Download Search</NavLink>
                        </Menu.Item>
                        <Menu.Item key="12" icon={<FileAddFilled style={{fontSize:'16px'}}/>}>
                            <NavLink to={DOWNLOAD_INCREMENT}>Download Increment</NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Index;