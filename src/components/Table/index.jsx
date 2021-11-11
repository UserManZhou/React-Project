import React, { Component, Fragment } from 'react';
import { Table, Input, Tag, Button } from "antd";
import { CloseCircleFilled, PlusCircleFilled, EditFilled } from '@ant-design/icons'
import { NavLink } from "react-router-dom";
import { delete_user_action } from '../../redux/action/increment_user';
import { connect } from "react-redux"
import { DELETE_USER, DELETE_DEPARTMENT,DELETE_POSITION } from '../../constant/StroeContant';
import { delete_department_action } from "../../redux/action/Department"
import { delete_Position_Action } from '../../redux/action/Position';
import { departmentMap, userMap, searchDepartmentMap } from '../../utils/utils';
import { searchEquestValue } from '../../utils/utils';
const { Search } = Input;

class Index extends Component {

    state = {
        data: [],
        isShow: true,
        department: [],
        position : []
    }

    columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            render: (text) => <a>{text}</a>,
        },

        {
            title: 'LoginName',
            dataIndex: 'LoginName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Password',
            dataIndex: 'Password',
        },
        {
            title: 'CreateDate',
            dataIndex: 'CreateDate',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'UserName',
            key: 'UserName',
            dataIndex: 'UserName',
            render: (text) => <Tag color="blue" key={text}>{text}</Tag>,
        },
        {
            title: 'Status',
            key: 'Status',
            dataIndex: 'Status',
            render: (text) => <Tag color="blue" key={text}>{text === 2 ? "Developer" : "User"}</Tag>,
        },
        {
            title: 'Action',
            key: "action",
            render: (text) =>
                <div>
                    <Button type="primary" shape="round" icon={<CloseCircleFilled />} size='small' onClick={() => this.deleteUser(text)} />
                    <NavLink to={this.props.to}>
                        <Button type="primary" shape="round" icon={<PlusCircleFilled />} size='small' />
                    </NavLink>
                    <NavLink to={{ pathname: this.props.to, state: text }}>
                        <Button type="primary" shape="round" icon={<EditFilled />} size='small' />
                    </NavLink>
                </div>

        }
    ];

    departmentColumns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'NAME',
            dataIndex: 'NAME',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'REMARK',
            dataIndex: 'REMARK',
            render: (text) => <Tag color="blue" key={text}>{text}</Tag>,
        },
        {
            title: 'Action',
            key: "action",
            render: (text) =>
                <div>
                    <Button type="primary" shape="round" icon={<CloseCircleFilled />} size='small' onClick={() => this.deleteDepartment(text)} />
                    <NavLink to={this.props.to}>
                        <Button type="primary" shape="round" icon={<PlusCircleFilled />} size='small' />
                    </NavLink>
                    <NavLink to={{ pathname: this.props.to, state: text }}>
                        <Button type="primary" shape="round" icon={<EditFilled />} size='small' />
                    </NavLink>
                </div>

        }
    ]

    positionCloumns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'NAME',
            dataIndex: 'NAME',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'REMARK',
            dataIndex: 'REMARK',
            render: (text) => <Tag color="blue" key={text}>{text}</Tag>,
        },
        {
            title: 'Action',
            key: "action",
            render: (text) =>
                <div>
                    <Button type="primary" shape="round" icon={<CloseCircleFilled />} size='small' onClick={() => this.deletePosition(text)} />
                    <NavLink to={this.props.to}>
                        <Button type="primary" shape="round" icon={<PlusCircleFilled />} size='small' />
                    </NavLink>
                    <NavLink to={{ pathname: this.props.to, state: text }}>
                        <Button type="primary" shape="round" icon={<EditFilled />} size='small' />
                    </NavLink>
                </div>

        }
    ]




    static getDerivedStateFromProps(props, state) {
        let { isShow, Search, search_Department,search_position } = state
        const { user, department,position } = props
      
        if (Search !== undefined) {
            return { data: Search, isShow: Search.length > 0 ? true : isShow }
        } else if (department != undefined && search_Department == undefined) {
            const departments = departmentMap(department)
            return { department: [...departments] }
        } else if (user != undefined && state.Search == undefined) {
            if (user.length != undefined && user.length > 0) {
                const data = userMap(user)
                return { data: data }
            }
        } else if (search_Department != undefined) {
            if (search_Department.length > 0) {
                const departments = searchDepartmentMap(search_Department)
                return { department: departments, isShow: search_Department.length > 0 ? true : isShow }
            } else {
                return { department: search_Department, isShow: search_Department.length > 0 ? true : isShow }
            }
        }else if (position != undefined && search_position === undefined) {
            const positions =  departmentMap(position)
            return {position : positions}
        }else if ( search_position != undefined) {
           if (search_position.length > 0) {
               const positions = searchDepartmentMap(search_position)
               return {position : positions ,isShow: search_position.length > 0 ? true : isShow}
           }else {
            return { position: search_position, isShow: search_position.length > 0 ? true : isShow }
           }
        }
    }







    deleteUser = (text) => {
        if (window.confirm("Really?")) {
            this.props.DELETE_USER(text)
        }
    }

    deleteUserall = () => {
        if (window.confirm("Really?")) {
            this.props.DELETE_USER(this.deleteArr)
        }
    }

    deleteDepartment = (department) => {
        if (window.confirm("Really?")) {
            const { Action } = department
            this.props.DELETE_DEPARTMENT({ ...Action })
        }
    }

    deleteDepartmentall = () => {
        if (window.confirm("Really?")) {
            this.props.DELETE_DEPARTMENT(this.deleteDepartmentArr)
        }
    }

    deletePosition = (position) => {
        if (window.confirm("Really?")) {
            const {Action} = position
            this.props.DELETE_POSITION([Action])
        }
    }

    deletePositionall = () => {
        if (window.confirm("Really?")) {
            this.props.DELETE_POSITION(this.deletePosisionArr)
        }
    }

    // rowSelection object indicates the need for row selection
    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.deleteArr = selectedRows

    };

    onSelectChangeDepartment = (selectedRowKeys, selectedRows) => {
        this.deleteDepartmentArr = selectedRows
    }

    onSelectChangePosition = (selectedRowKeys, selectedRows) => {
        this.deletePosisionArr = selectedRows
    }

    

    searchUser = (event) => {
        if (13 === event.which) {
            let { isShow } = this.state
            isShow = false
            this.setState({ isShow: isShow })
            const { value } = this.search.state
            const { increment_user } = this.props
            const { incrementUser } = increment_user
            const arr = incrementUser.filter(user => {
                return user.loginname.indexOf(value) >= 0
            })
            const data = userMap(arr)
            this.setState({ Search: data })
        }
    }

    searchDepartment = (event) => {
        if (13 === event.which) {
            let { isShow } = this.state
            isShow = false
            this.setState({ isShow: isShow })
            const { value } = this.search.state
            const { departmentReducer } = this.props
            const searchDepartment = searchEquestValue(departmentReducer,value)
            this.setState({ search_Department: searchDepartment })
        }
    }

    searchPosition = (event) =>{
        if (13 === event.which) {
            let {isShow} = this.state
            isShow = false
            this.setState({ isShow: isShow })
            const { value } = this.search.state
            const {positionReducer} = this.props
            const searchPosition =  searchEquestValue(positionReducer,value)
            this.setState({ search_position : searchPosition})
        }
    }

    render() {
        const { data, isShow, department,position } = this.state
        const rowSelectionUser = {
            type: "checkbox",
            onChange: this.onSelectChange,
        };
        const rowDepartmentSelection = {
            type: "checkbox",
            onChange: this.onSelectChangeDepartment
        }
        const rowPositionSelectioin = {
            type : "checkbox",
            onChange : this.onSelectChangePosition
        }
        return (
            <div>
                {
                    data.length > 0 ?
                        <Fragment>
                            {
                                isShow ?
                                    <Search placeholder={this.props.children} onKeyPress={this.searchUser} ref={c => this.search = c} /> :
                                    <Search placeholder={this.props.children} onKeyPress={this.searchUser} ref={c => this.search = c} loading />
                            }
                        </Fragment> :
                        department.length > 0 ?
                            <Fragment>
                                {
                                    isShow ?
                                        <Search placeholder={this.props.children} onKeyPress={this.searchDepartment} ref={c => this.search = c} /> :
                                        <Search placeholder={this.props.children} onKeyPress={this.searchDepartment} ref={c => this.search = c} loading />
                                }
                            </Fragment> :
                            <Fragment>
                                {
                                    isShow ?
                                        <Search placeholder={this.props.children} onKeyPress={this.searchPosition} ref={c => this.search = c} /> :
                                        <Search placeholder={this.props.children} onKeyPress={this.searchPosition} ref={c => this.search = c} loading />
                                }
                            </Fragment>
                }
                {
                    data.length > 0 ? <Fragment>
                        <Table dataSource={data} scroll={{ x: 500, y: 400 }} rowSelection={rowSelectionUser} columns={this.columns}
                            title={() => this.props.message} footer={() => (<Button type="primary" shape="round" icon={<CloseCircleFilled onClick={this.deleteUserall} />}
                                rowKey={record => record.id}
                                size='small' />)} />
                    </Fragment> :
                        department.length > 0 ?
                            <Fragment>
                                <Table dataSource={department} scroll={{ x: 500, y: 400 }} rowSelection={rowDepartmentSelection} columns={this.departmentColumns}
                                    title={() => this.props.message} footer={() => (<Button type="primary" shape="round" icon={<CloseCircleFilled onClick={this.deleteDepartmentall} />}
                                        rowKey="key"
                                        size='small' />)} />
                            </Fragment> :
                            <Fragment>
                                <Table dataSource={position} scroll={{ x: 500, y: 350 }} rowSelection={rowPositionSelectioin} columns={this.positionCloumns}
                                    title={() => this.props.message} footer={() => (<Button type="primary" shape="round" icon={<CloseCircleFilled onClick={this.deletePositionall} />}
                                        rowKey="key"
                                        size='small' />)} />
                            </Fragment>
                }
            </div>
        );
    }
}

// export default Index;
export default connect(
    state => (
        {
            increment_user: state.IncrementUserReducer,
            departmentReducer: state.DepartmentReducer,
            positionReducer : state.PositionReducer
        }
    ),
    {
        DELETE_USER: delete_user_action,
        DELETE_DEPARTMENT: delete_department_action,
        DELETE_POSITION : delete_Position_Action
    }
)(Index)