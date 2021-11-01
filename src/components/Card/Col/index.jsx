import React, {Component} from 'react';
import {Card} from "antd";

class Index extends Component {
    render() {
        return (
            <div>
                <Card title={this.props.children} bordered={false} cover={<img alt="example" src={this.props.img}/>}>
                    {this.props.description}
                </Card>
            </div>
        );
    }
}

export default Index;