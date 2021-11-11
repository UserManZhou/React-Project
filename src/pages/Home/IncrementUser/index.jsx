import React, { Component, Fragment } from 'react';
import { Divider } from 'antd';
import { Form, Input, Button, Table } from 'element-react'
import { USER_SEARCH } from "../../../constant/RouteContant";
import Item from './index.module.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from "react-router-dom";
import { ADD_USER,UPDATE_USER } from '../../../constant/StroeContant'
import { add_user_action, increment_user_action, update_user_action } from '../../../redux/action/increment_user'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid';
var moment = require('moment');
class Index extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        columns: [
            {
                label: "ID",
                prop: "ID",
                width: 180
            },
            {
                label: "LoginName",
                prop: "LoginName",
                width: 180
            },
            {
                label: "Password",
                prop: "Password",
                width: 180
            },
            {
                label: "CreateDate",
                prop: "CreateDate",
                width: 180
            },
            {
                label: "UserName",
                prop: "UserName",
            }
        ],
        data: [],
        userArr: []
    }

    handleChange(date) {
        console.log(date);
    }

    SubmitUser = () => {
        if (this.ID === undefined) {
            if (this.state.data.length === 0) {
               const user = this.assignment(
                   this.LoginName.refs.input.value, 
                   this.Password.refs.input.value,
                   this.Status.refs.input.value,
                   this.UserName.refs.input.value,
                   moment(this.CreateDate.props.selected).format("YYYY年MM月DD日 hh:mm:ss")
                   )
                this.setState({ userArr: [user, ...this.state.userArr] })
                this.clearValue(this.LoginName, this.Password, this.Status, this.UserName)
            }
        }else if (this.ID.name === "") {
            const user = this.assignment(
                this.LoginName.refs.input.value, 
                this.Password.refs.input.value,
                this.Status.refs.input.value,
                this.UserName.refs.input.value,
                moment(this.CreateDate.props.selected).format("YYYY年MM月DD日 hh:mm:ss")
            )
            this.setState({updateUser:{user:user,compareLoginName : this.compareLoginName.name}})
        }else if (this.ID.name != "") {
            const user = this.assignment(
                this.LoginName.refs.input.value, 
                this.Password.refs.input.value,
                this.Status.refs.input.value,
                this.UserName.refs.input.value,
                moment(this.CreateDate.props.selected).format("YYYY年MM月DD日 hh:mm:ss")
            )
            user["id"] = this.ID.name*1
            this.setState({updateUser:{user:user,compareLoginName : this.compareLoginName.name}})
        }
    }

    assignment = (loginname,password,status,username,createTime) => {
        const user = {
            loginname: this.LoginName.refs.input.value,
            password: this.Password.refs.input.value,
            status: this.Status.refs.input.value,
            username: this.UserName.refs.input.value,
            createTime: moment(this.CreateDate.props.selected).format("YYYY年MM月DD日 hh:mm:ss")
        }
        return user
    }

    clearValue = (LoginName, Password, Status, UserName) => {
        LoginName.refs.input.value = ""
        Password.refs.input.value = ""
        Status.refs.input.value = ""
        UserName.refs.input.value = ""
    }

    componentWillUnmount() {
        console.log('componentWillUnmount',this.state.updateUser);
        if (this.state.updateUser != null && this.state.updateUser != undefined) {
            this.props.UPDATE_USER(this.state.updateUser)
        }
        this.props.ADD_USER(this.state.userArr)
    }


    static getDerivedStateFromProps(props, state) {
        if (props.location != undefined) {
            const { state } = props.location
            console.log("state", state);
            let user = {}
            if (state != null) {
                user = {
                    ID: state.ID === null ? nanoid() : state.ID,
                    LoginName: state.LoginName,
                    Password: state.Password,
                    CreateDate: state.CreateDate,
                    UserName: state.UserName,
                    Status: state.Status
                }
                return { data: [user] }
            }
        }
        return null;
    }

    render() {
        const { data } = this.state

        return (
            <div>
                <Divider orientation="left">Increment User</Divider>
                <Form labelWidth='100'>
                    {
                        data.length > 0 ? data.map(value => {
                            console.log(value);
                            return (
                                <Fragment >
                                    <Form.Item label="User Name" className={Item.Item}>
                                        <input type="hidden" name={value.ID} ref={c => this.ID = c} />
                                        <Input placeholder="Please Output User Name" ref={c => this.UserName = c} />
                                    {value.UserName}
                                    </Form.Item>
                                    <Form.Item label="User Status" className={Item.Item} >
                                        <Input placeholder="Please Output User Status" ref={c => this.Status = c} />
                                        {value.Status === 2 ? "Developart" : "User"}
                                    </Form.Item>
                                    <Form.Item label="User Login Name" className={Item.right}>
                                        <Input placeholder="Please Output User Login Name" ref={c => { this.LoginName = c }} />
                                        <input type="hidden" name={value.LoginName} ref={c => this.compareLoginName = c} />
                                        {value.LoginName}
                                    </Form.Item>
                                    <Form.Item label="User Password" className={Item.rightT}>
                                        <Input placeholder="Please Output User Password" ref={c => this.Password = c} />
                                        {value.Password}
                                    </Form.Item>
                                    <Form.Item label="User Create" className={Item.rightF}>
                                        <DatePicker selected={new Date()} onChange={this.handleChange}
                                            onSelect={(data) => console.log(data)} dateFormat={value.CreateDate}
                                            ref={c => this.CreateDate = c}
                                        />
                                    </Form.Item>
                                </Fragment>
                            )
                        }) :
                            <Fragment>
                                <Form.Item label="User Name" className={Item.Item}>
                                    <Input placeholder="Please Output User Name" ref={c => this.UserName = c} ></Input>
                                </Form.Item>
                                <Form.Item label="User Status" className={Item.Item} >
                                    <Input placeholder="Please Output User Status" type="number" ref={c => this.Status = c} />
                                </Form.Item>
                                <Form.Item label="User Login Name" className={Item.right}>
                                    <Input ref={c => { this.LoginName = c }} placeholder="Please Output User Login Name"  ></Input>
                                </Form.Item>
                                <Form.Item label="User Password" className={Item.rightT}>
                                    <Input placeholder="Please Output User Password" ref={c => this.Password = c} />
                                </Form.Item>
                                <Form.Item label="User Create" className={Item.rightF}>
                                    <DatePicker selected={new Date()} onChange={this.handleChange}
                                        onSelect={(data) => console.log(data)}
                                        ref={c => this.CreateDate = c}
                                    />
                                </Form.Item>
                            </Fragment>
                    }
                    <Form.Item>
                        <div className={Item.button}>
                            <Button type="primary" nativeType="button" onClick={this.SubmitUser}>Submit</Button>
                            <NavLink to={USER_SEARCH}>
                                <Button>GoBack</Button>
                            </NavLink>
                        </div>
                    </Form.Item>
                </Form>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    stripe={true}
                />
            </div>
        );
    }
}
// export default Index;
export default connect(
    state => (
        {
            increment_user: state.IncrementUserReducer
        }
    ),
    {
        ADD_USER: add_user_action,
        UPDATE_USER : update_user_action
    }
)(Index);