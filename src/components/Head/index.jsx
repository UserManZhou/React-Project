import React, {Component} from 'react';
import Item from './Item'

import {Layout} from "antd";
const {Header} = Layout
class Index extends Component {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }} >
                <Item/>
            </Header>
        );
    }
}

export default Index;