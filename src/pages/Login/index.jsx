import React, { Component } from 'react';
import { connect } from 'react-redux'
import {  tokenAction } from '../../redux/action/login';
import { getUserAction } from '../../redux/action/Heade';
import { Form, Input, Button, Spin } from 'antd';
import styles from './index.module.css'
import Icon from "@ant-design/icons";
import { HOME } from "../../constant/RouteContant";
import { request } from '../../axios/request';
import { TOKEN,USER } from '../../constant/StroeContant'
class Index extends Component {

    state = { isSpin: false }

    componentDidMount(){
        const {state} = this.props.location
        console.log(state);
        if (state!=undefined) {
            if (state.message != undefined)  if (state.message != null) this.setState({message:state.message})
        }
    }
   
    btnLogin = () => {
        request({
            url: "user/UserManage/login",
            data: {
                loginname: this.input.state.value,
                password: this.inputT.state.value
            },
            method: 'POST'
        }, success => {
            const { token, Message,user } = success.data
            if (token != null) {
                this.setState({ isSpin: true })
                this.props.USER(user)
                this.props.TOKEN(token)
                this.props.history.replace(HOME)
            }
            this.setState({ message: Message })
        }, error => console.log(error))
    }

    componentWillUnmount(){
        // 组件中通过componentWillUnmount钩子函数在组件销毁的时候将异步方法撤销：
        this.setState = ()=>false;
       
    }

    render() {
        const { isSpin } = this.state
        console.log(this.props);
        return (
            <div className={styles.bg}>
                <div className={styles.login_card}>
                    <h1>HRM</h1>
                    <Form className="login-form">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username" key="UserName"
                                ref={c => this.input = c}
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                ref={c => this.inputT = c}
                            />
                        </Form.Item>
                        {
                            this.state.message != null ? <span>Password And UserName Error,Please Agin Output Input</span> : null
                        }
                        <Form.Item>
                            {/* <Checkbox name="rememberMe">Remember me</Checkbox> */}
                            {
                                isSpin ? <Spin size="large" /> :
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.btnLogin}>
                                        Log in
                                    </Button>
                            }
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect(
    state => (
        { loginToken: state.loginReducer },
        {Head : state.HeadeReducer},
        {UserData : state.UserReducer}),
    {
        TOKEN: tokenAction,
        USER : getUserAction
    }
)(Index);
// export default Index