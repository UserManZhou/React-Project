import React, {Component} from 'react';
import {Table, Tag, Input, Checkbox, Button} from "antd";
import {CloseCircleFilled,PlusCircleFilled,EditFilled} from '@ant-design/icons'
import {NavLink} from "react-router-dom";

const {Search} = Input;
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
];

class Index extends Component {
     columns = [

        {
            title: 'firstName',
            dataIndex: 'firstName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (text) => <Tag color="blue" key={text} onClick={this.goBack}>{text}</Tag>,
        },
        {
            title: 'Action',
            key: "action",
            render: () =>
                <div>
                    <Button type="primary" shape="round" icon={<CloseCircleFilled/>} size='small' />
                   <NavLink to={this.props.to}>
                       <Button type="primary" shape="round" icon={<PlusCircleFilled />} size='small'/>
                   </NavLink>
                    <Button type="primary" shape="round" icon={<EditFilled />} size='small'/>
                </div>

        }
    ];
    render() {
        return (
            <div>
                {
                    data != null ?
                        <Search placeholder={this.props.children}/> :
                        <Search placeholder={this.props.children} loading/>
                }
                <Table dataSource={data} scroll={{x: 500, y: 400}} rowSelection={{type: <Checkbox/>}} columns={this.columns}
                       title={() => this.props.message} footer={()=>( <Button type="primary" shape="round" icon={<CloseCircleFilled />} size='small'/>)}/>
            </div>
        );
    }
}

export default Index;