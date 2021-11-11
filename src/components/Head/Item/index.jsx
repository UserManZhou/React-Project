import React, { Component } from 'react';
import Item from './index.module.css'
import MyNavLink from '../../../pages/MyNavLink'
import { Avatar } from 'antd';
import { LOGIN, CENTRE } from "../../../constant/RouteContant";
import { connect } from 'react-redux'
import { StringJson } from '../../../utils/utils';
import {
    HomeFilled,
    UnlockOutlined,
    HeatMapOutlined
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import {requestUser} from '../../../axios/requestUser'
import {requestDepartment} from '../../../axios/requestDepartment'


class Index extends Component {


    state = { timer: '', user: {} }

    componentDidMount() {
        const { Head } = this.props
        this.setState({ user: StringJson(Head) })

    }

    changeTime = (timer) => {
        console.log(timer)
        if (timer != null) this.setState({ timer: '' })
        else this.setState({ timer: new Date().toLocaleTimeString() })
    }

    componentWillUnmount() {
        const { increment_user,department } = this.props
        const { incrementUser, updateUser, deleteUser } = increment_user
        const {incrmentDepartment,deleteDepartment,updateDepartment} = department
        if (incrementUser != undefined && updateUser != undefined && deleteUser != undefined) {
            requestUser(updateUser,deleteUser,incrementUser,this.props.loginToken)
        }else if (incrmentDepartment != undefined && deleteDepartment != undefined && updateDepartment != undefined) {
            requestDepartment(incrmentDepartment,deleteDepartment,updateDepartment,this.props.loginToken)
        }
    }

    render() {
        const { timer, user } = this.state
        return (
            <div>
                <HeatMapOutlined style={{ fontSize: '16px', color: 'white' }} />   <span className={Item.logo}>
                    <NavLink to={CENTRE}>A M O L P S W</NavLink>
                </span>
                {
                    timer === '' ?
                        <span onClick={() => this.changeTime(null)} className={Item.span}>时间</span> :
                        <span className={Item.span} onClick={() => this.changeTime(timer)}>{timer}</span>

                }
                <Avatar size={50} src="/img/img-8e50cc5f55c9f01891cbb2ce14c95761.jpg" className={Item.activit} />
                <span className={Item.user}>{user.loginname}</span>
                <MyNavLink to={CENTRE} ><HomeFilled className={Item.icon} /></MyNavLink>
                <MyNavLink to={LOGIN} ><UnlockOutlined className={Item.loginIcon} /></MyNavLink>
            </div>
        );
    }
}
// export default Index;
export default connect(
    state => (
        { Head: state.HeadeReducer, increment_user: state.IncrementUserReducer, loginToken: state.loginReducer,department : state.DepartmentReducer }
    )
)(Index)