import React, { Component } from 'react';
import { connect } from 'react-redux'
import { tokenAction } from '../../../redux/action/login';
import { verifyToken } from '../../../utils/utils';
import { List, Divider } from 'antd';
import Card from "../../../components/Card"
import { LOGIN } from '../../../constant/RouteContant';

const data = [
    "这是个非常简单的一个网站，由于初衷开发这个网站只是简单的巩固react的技术，自此至今你自己。左上方就是该网站的内容，前提你是该网站的开发者如不是请联系我"
    + ",由于个人的能力有限就不会后期维护这个项目。"
];

class Index extends Component {

    componentDidMount() {
        const { loginToken, history } = this.props
        verifyToken(loginToken, history, LOGIN)
    }

    render() {
        console.log(this.props);
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Divider orientation="left">Message</Divider>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Divider orientation="content">Print</Divider>
                <Card />
            </div>
        );
    }
}
export default connect(
    state => ({ loginToken: state.loginReducer}),
)(Index);
// export default Index;