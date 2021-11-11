import React, { Component, Fragment } from 'react';
import { Button, Form, Input, Table } from "element-react";
import { Divider } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import { incrment_department_action } from '../../redux/action/Department'
import { INCRMENT_DEPARTMENT,INCRMENT_POSITION } from "../../constant/StroeContant"
import {increment_Position_Action} from '../../redux/action/Position'
class Index extends Component {
    DepartmentData = {

        columns: [
            {
                label: "name",
                prop: "ID",
                width: 480
            },
            {
                label: "NAME",
                prop: "NAME",
                width: 680
            },
            {
                label: "REMARK",
                prop: "REMARK"
            }
        ],
    }

    departmenSubmit = () => {
        console.log("ss");
        const name = this.NAME.refs.input.value
        const remark = this.REMARK.refs.input.value
        this.clearInputValue(this.NAME.refs, this.REMARK.refs)
        if (name != undefined && remark != undefined && this.ID === undefined) {
            const department =  {
                name,
                remark
            }
            this.props.INCRMENT_DEPARTMENT(department)
        } else if (name != undefined && remark != undefined && this.ID != undefined) {
            const id = this.ID.name
            const department =  {
                id: id * 1,
                name,
                remark
            }
            this.props.INCRMENT_DEPARTMENT(department)
        } else {
            alert("Please Again Output!!!")
        }
    }
    positioinSubmit = () => {
        const name = this.NAME.refs.input.value
        const remark = this.REMARK.refs.input.value
        this.clearInputValue(this.NAME.refs, this.REMARK.refs)
        if (name != undefined && remark != undefined && this.ID === undefined ) {
            const position = {
                name,remark
            }
           this.props.INCRMENT_POSITION(position)
        }else if (name != undefined && remark != undefined && this.ID != undefined) {
            const position = {
                name,remark,id : this.ID
            }
            this.props.INCRMENT_POSITION(position)
        }else {
            alert("Please Again Output!!!")
        }
    }

    clearInputValue = (name, remark) => {
        name.input.value = ""
        remark.input.value = ""
    }

    render() {
        const { state,position,inputs } = this.props
        const {input} = inputs
        const dataArr = [state]
        return (
            <Fragment>
                <Divider orientation="left">{this.props.title}</Divider>
                <Form inline={true} className="demo-form-inline">
                    <Form.Item>
                        <Input placeholder={this.props.inputs.input} ref={c => this.NAME = c}></Input>
                        {
                            state != undefined ? 
                                     <Fragment> <span >{state.NAME}</span><input type="hidden" name={state.ID} ref={c => this.ID = c} /> </Fragment> :
                                     position != undefined ? <Fragment> <span >{position.NAME}</span><input type="hidden" name={position.ID} ref={c => this.ID = c} /> </Fragment> :
                                     null
                        }
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder={this.props.inputs.inputT} ref={c => this.REMARK = c}></Input>
                        {
                            state != undefined ? <span >{state.REMARK}</span> : position != undefined ? 
                            <span >{position.REMARK}</span> : null
                        }
                    </Form.Item>
                    {
                        this.props.isDownload ?
                            <Form.Item>
                                <Input placeholder={this.props.inputs.inputTh} ></Input>
                            </Form.Item> : null
                    }
                    <Form.Item>
                        <NavLink to={this.props.to}><Button nativeType="button" type="warning">Goback</Button></NavLink>
                        &nbsp; {
                            input === 'Department Name' ?
                            <Button nativeType="button" type="primary" onClick={this.departmenSubmit}>Submit</Button> :
                            <Button nativeType="button" type="primary" onClick={this.positioinSubmit}>Submit</Button>
                        }
                    </Form.Item>
                </Form>
                <Divider orientation="centent">Example</Divider>
                {
                    state != undefined ?
                        <Table
                            style={{ width: '100%' }}
                            columns={this.DepartmentData.columns}
                            data={dataArr}
                            stripe={true}
                        /> :
                        <Table
                            style={{ width: '100%' }}
                            columns={this.DepartmentData.columns}
                            data={[position]}
                            stripe={true}
                        />
                }
            </Fragment>
        );
    }
}

// export default Index;
export default connect(
    state => ({ departmentReducer: state.DepartmentReducer,positionReducer : state.PositionReducer}),
    {
        INCRMENT_DEPARTMENT: incrment_department_action,
        INCRMENT_POSITION : increment_Position_Action
    }
)(Index)