import React, {Component} from 'react';
import {Button, Form, Input, Table} from "element-react";
import {Divider} from "antd";
import {NavLink} from "react-router-dom";

const DepartmentData = {
    columns: [
        {
            label: "日期",
            prop: "date",
            width: 180
        },
        {
            label: "姓名",
            prop: "name",
            width: 180
        },
        {
            label: "地址",
            prop: "address"
        }
    ],
    data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
}
class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">{this.props.title}</Divider>
                <Form inline={true}   className="demo-form-inline">
                    <Form.Item>
                        <Input placeholder={this.props.inputs.input} ></Input>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={this.props.inputs.inputT} ></Input>
                    </Form.Item>
                    {
                        this.props.isDownload ?
                            <Form.Item>
                                <Input placeholder={this.props.inputs.inputTh} ></Input>
                            </Form.Item> : null
                    }
                    <Form.Item>
                        <NavLink to={this.props.to}><Button nativeType="button" type="warning">Goback</Button></NavLink>
                        &nbsp;<Button nativeType="submit" type="primary">Submit</Button>
                    </Form.Item>
                </Form>}
                <Divider orientation="centent">Example</Divider>
                <Table
                    style={{width: '100%'}}
                    columns={DepartmentData.columns}
                    data={DepartmentData.data}
                    stripe={true}
                />
            </div>
        );
    }
}

export default Index;