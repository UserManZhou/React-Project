import React, { Component } from 'react';
import Table from '../../../components/Table'
import { connect } from "react-redux"
import { Divider } from 'antd'
import { request } from "../../../axios/request"
import { LOGIN, USER_INCREMENT } from "../../../constant/RouteContant";
import { StringJson } from "../../../utils/utils"
import { increment_user_action } from '../../../redux/action/increment_user'

class Index extends Component {

    state = { user: [] }

    static getDerivedStateFromProps(props, state) {
        const { increment_user } = props
       if (increment_user.incrementUser != undefined) {
        if (increment_user.incrementUser.length > 0) {
            // if (state.user.length > increment_user.length  ) {
            //     const userArr = [...state.user]
            //     console.log(userArr);
            //     return { user: userArr }
            // } if ( increment_user.length > state.user.length) {
            //     const userArr = [...increment_user]
            //     return { user: userArr }
            // }
            const userArr = [...increment_user.incrementUser]
            return { user: userArr }
        }
       }
        return null
    }

    componentDidMount() {
        let { loginToken} = this.props
        if (loginToken != null || loginToken != undefined) {
            loginToken = StringJson(loginToken)
            if (this.state.user.length == 0) {
                request({
                    url: "user/UserManage/findUser",
                    headers: { 'authorization': 'Bearer ' + loginToken },
                    method: "GET",
                }, success => {
                    if (success.data === " Please Login get Token") {
                        this.props.history.replace(LOGIN, { message: success.data })
                    }
                   this.setState({ user: success.data.User })
                    this.props.INCREMENT_USER(success.data.User)
                }, error => console.log(error))
            }
        } else {
            console.log(this);
        }
    }


    render() {

        const { user } = this.state
        return (
            <div>
                <Divider orientation="left">User</Divider>
                <Table message="User Manage" to={USER_INCREMENT} user={user} >Search User Message</Table>
            </div>
        );
    }
}
export default connect(
    state => (
        { increment_user: state.IncrementUserReducer, loginToken: state.loginReducer }),
    {
        INCREMENT_USER: increment_user_action
    }
)(Index)