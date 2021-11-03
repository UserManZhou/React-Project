import React, {Component} from 'react';
import {Form, Input, Button ,Checkbox,Spin} from 'antd';
import styles from './index.module.css'
import Icon from "@ant-design/icons";
import {HOME} from "../../constant/RouteContant";
import axios from "axios";

const url = 'http://localhost:8080/user/login/'
class Index extends Component {

    state = {isSpin:false}

    btnLogin = () => {
        axios.post('http://localhost:8080/user/login/',
            {
                username:this.input.value,
                password:this.inputT.value
            }).then(value => {
            console.log(value)})
        // this.setState({isSpin:true})
        // this.props.history.replace(HOME)
    }

    render() {
        const {isSpin}  = this.state
        return (
            <div className={styles.bg}>
                <div className={styles.login_card}>
                    <h1>HRM</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username" onChange={(event) => {this.inputName = event}} key="UserName" name="username"
                                    ref={c => this.input = c}
                                />,
                        </Form.Item>
                        <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(event) => this.inputPassword = event}
                                    ref={c => this.inputT = c}
                                />,
                        </Form.Item>
                        <Form.Item>
                            <Checkbox name="rememberMe">Remember me</Checkbox>
                            {
                                isSpin ?  <Spin size="large" /> :
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

export default Index;