import React, {Component} from 'react';
import {Divider} from 'antd';
import {Form, Input, Button, Table} from 'element-react'
import {USER_SEARCH} from "../../../constant/RouteContant";
import Item from './index.module.css'
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
                <Divider orientation="left">Increment User</Divider>
                <Form labelWidth='100' >
                    <Form.Item label="User Name" className={Item.Item}>
                        <Input placeholder="Please Output User Name"></Input>
                    </Form.Item>
                    <Form.Item label="User Status" className={Item.Item} >
                        <Input placeholder="Please Output User Status"></Input>
                    </Form.Item>
                    <Form.Item label="User Login Name" className={Item.right}>
                        <Input placeholder="Please Output User Login Name"></Input>
                    </Form.Item>
                    <Form.Item label="User Password" className={Item.rightT}>
                        <Input placeholder="Please Output User Password"></Input>
                    </Form.Item>
                    <Form.Item>
                       <div className={Item.button}>
                           <Button type="primary" nativeType="submit">Submit</Button>
                           <NavLink to={USER_SEARCH}>
                               <Button>GoBack</Button>
                           </NavLink>
                       </div>
                    </Form.Item>
                </Form>
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