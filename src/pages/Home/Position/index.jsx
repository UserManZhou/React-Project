import React, { Component } from 'react';
import Table from '../../../components/Table'
import { Divider } from "antd";
import { LOGIN, POSITION_INCREMENT } from "../../../constant/RouteContant";
import { request } from '../../../axios/request'
import { connect } from "react-redux"
import { find_Positioin_Action } from '../../../redux/action/Position'
import { FIND_POSITION } from '../../../constant/StroeContant'
class Index extends Component {


    state = { position: [] }

    static getDerivedStateFromProps(props, state) {
        const {positionData} =  props
        if (positionData.incrmentPosition.length > 0) {
            return {position:positionData.incrmentPosition}            
        }
        return null;
    }

    componentDidMount() {
        const { loginToken } = this.props
        const {position} = this.state
        if (position.length === 0) {
            request({
                url : 'position/PositionManage/findPosition',
                Headers: {'authorization':'Bearer' + loginToken },
                method: 'GET'
            },success => {
                const {data} = success
                const {history} = this.props
                if (data === " Please Login get Token") {
                    history.replace(LOGIN,{message : data})
                }else {
                    this.setState({position : data})
                    this.props.FIND_POSITION(data)
                }
            },error => console.log(error))
        }
    }

    render() {
        const {position} = this.state
        return (
            <div>
                <Divider orientation="left">Position</Divider>
                <Table message='Position' to={POSITION_INCREMENT} position={position}>Prosition Search</Table>
            </div>
        );
    }
}

// export default Index;

export default connect(
    state => (
        { loginToken: state.loginReducer,positionData : state.PositionReducer}
    ),
    {
        FIND_POSITION: find_Positioin_Action
    }
)(Index)