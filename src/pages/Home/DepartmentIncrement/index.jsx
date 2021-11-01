import React, {Component} from 'react';
import CustomIncrement from '../../../components/CustomIncrement'
import {DEPARTMENT} from "../../../constant/RouteContant";

const inputs ={
   input : 'Department Name',
    inputT : 'Department Remark'
}
class Index extends Component {
    render() {
        return (
            <div>
                <CustomIncrement title="Increment User" inputs={inputs} to={DEPARTMENT}/>
            </div>
        );
    }
}

export default Index
