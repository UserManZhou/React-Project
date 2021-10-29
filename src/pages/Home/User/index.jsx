import React, {Component} from 'react';
import {Divider,Table, Tag, Input } from "antd";
const { Column, ColumnGroup } = Table;
const { Search } = Input;
const data = [
    {
        key: '1',
        firstName: 'John',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        firstName: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        Name: 'Joe',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const color = 'volcano';
class Index extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">User</Divider>
                {
                    data != null ?
                        <Search placeholder="Search User Message"  /> :
                        <Search placeholder="Search User Message" loading  />
                }
                <Table dataSource={data}  scroll={{ x: 1500, y: 400 }}>
                    <ColumnGroup title="User Manage" >
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column title="tags" dataIndex="tags" key="tags"  render={tags => (
                            <>
                                {tags.map(tag => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}/>
                    </ColumnGroup>
                </Table>
            </div>
        );
    }
}

export default Index;