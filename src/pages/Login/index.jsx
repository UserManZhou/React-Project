import React, {Component} from 'react';
import {Form, Input, Button , Icon,Checkbox,Spin} from 'antd';
import styles from './index.module.css'

class Index extends Component {

    state = {isSpin:false}

    btnLogin = () => {
        this.setState({isSpin:true})
        this.props.history.replace("/home")
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
                                    placeholder="Username" onChange={(event) => {this.inputName = event}}
                                />,
                        </Form.Item>
                        <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(event) => this.inputPassword = event}
                                />,
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
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