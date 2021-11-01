import React, {Component} from 'react';
import {Button, DatePicker, Divider, Form, Input, Radio} from "antd";
import {Select} from "element-react";
import Style from "./index.module.css";
import {NavLink} from "react-router-dom";
import {EMPLOYEE} from "../../../constant/RouteContant";
const SelectData = {
    options: [
        {
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶',
            disabled: true
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面'
        }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
}
const education = {
    options: [
        {
            id: 1,
            value: '小学'
        },
        {
            id: 2,
            value: '初中'
        },
        {
            id: 3,
            value: '高中'
        },
        {
            id: 4,
            value: '中专'
        },
        {
            id: 5,
            value: '大专'
        },
        {
            id: 6,
            value: '本科'
        },
    ]
}
const plitics = [
    {
        id: 1,
        status: '群众',
    },
    {
        id: 2,
        status: '团员',
    },
    {
        id: 3,
        status: '党员',

    }
]

class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Increment Employee</Divider>
                <Form labelCol={{span: 2}} wrapperCol={{span: 3}}>
                    <Form.Item label="User Name" required tooltip="This is a required field">
                        <Input placeholder="Please Output User Name"/>
                    </Form.Item>
                    {/* 部门 */}
                    <Form.Item label="Identity Card" required tooltip="Identity Card is a required feild">
                        <Input placeholder="Please Ouput Identity Card"/>
                    </Form.Item>
                    {/* 性别 */}
                    <Form.Item label="User Sex" wrapperCol={{span: 10}}>
                        <Radio.Group>
                            <Radio value={1}>Man</Radio>
                            <Radio value={2}>Women</Radio>
                            <Radio value={3}>Undefined Sex</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {/* 职位 */}
                    <Form.Item label="User Position" required tooltip="Identity Card is a required feild"  wrapperCol={{span: 10}}>
                        <Select>
                            {
                                SelectData.options.map((data) => {
                                    return (
                                        <Select.Option key={data.value} label={data.label} value={data.value}
                                                       disabled={data.disabled}/>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    {/* 学历 */}
                    <Form.Item label="Education">
                        <Select>
                            {
                                education.options.map((data) => {
                                    return (
                                        <Select.Option key={data.value} label={data.label} value={data.value}
                                                       disabled={data.disabled}/>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    {/* 邮箱 */}
                    <Form.Item label="E-mail">
                        <Input placeholder="Please Output E-mail"/>
                    </Form.Item>
                    {/* 号码 */}
                    <Form.Item label="Phone Number">
                        <Input placeholder="Please Output Phone Number"/>
                    </Form.Item>
                    {/* 政治面貌 */}
                    <Form.Item label="Politics Status">
                        <Select>
                            {
                                plitics.map((data) => {
                                    return (
                                        <Select.Option key={data.id} label={data.label} value={data.status}/>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    {/* QQ */}
                    <Form.Item label="QQ">
                        <Input placeholder="Please Output QQ"/>
                    </Form.Item>
                    {/* 提交 */}
                    <Form.Item wrapperCol={{span: 2, offset: 18}}>
                        <Button type="primary">Submit</Button>
                        <NavLink to={EMPLOYEE}>
                            <Button type="primary" className={Style.btn}>Go Back</Button>
                        </NavLink>
                    </Form.Item>
                </Form>

                <Form labelCol={{span: 12}} wrapperCol={{span: 12}} className={Style.from}>
                    {/* 联系地址 */}
                    <Form.Item label="Contact Address">
                        <Input placeholder="Please Output Contact Address"/>
                    </Form.Item>
                    {/* 邮政编码 */}
                    <Form.Item label="Postal code" required tooltip="This is a required field">
                        <Input placeholder="Please Output Postal code"/>
                    </Form.Item>
                    {/* 出生年月 */}
                    <Form.Item label="Birthday" required tooltip="This is a required field">
                        <DatePicker />
                    </Form.Item>
                    {/* 民族 */}
                    <Form.Item label="Nation" required tooltip="This is a required field">
                        <Input placeholder="Please Output Nation"/>
                    </Form.Item>
                    {/* 专业 */}
                    <Form.Item label="Major" required tooltip="This is a required field">
                        <Input placeholder="Please Output Major"/>
                    </Form.Item>
                    {/* 爱好 */}
                    <Form.Item label="Hobby" required tooltip="This is a required field">
                        <Input placeholder="Please Output Hobby"/>
                    </Form.Item>
                    {/* 备注 */}
                    <Form.Item label="Remark" required tooltip="This is a required field">
                        <Input placeholder="Please Output Remark"/>
                    </Form.Item>
                    {/* 所属部门 */}
                    <Form.Item label="Department">
                        <Select>
                            {
                                plitics.map((data) => {
                                    return (
                                        <Select.Option key={data.id} label={data.label} value={data.status}/>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Index;