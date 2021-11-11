import React, {Component, Fragment} from 'react';
import CustomIncrement from '../../../components/CustomIncrement'
import {DEPARTMENT} from "../../../constant/RouteContant";

const inputs ={
   input : 'Department Name',
    inputT : 'Department Remark'
}
class Index extends Component {
    render() {
        const {location} = this.props 
        const {state} = location
        return (
            <Fragment>
                {
                    state != undefined ?  <CustomIncrement title="Increment User" inputs={inputs} to={DEPARTMENT} state={state}/>:
                    <CustomIncrement title="Increment User" inputs={inputs} to={DEPARTMENT}/>
                }
            </Fragment>
        );
    }
}

export default Index
