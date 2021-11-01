import React, {Component} from 'react';
import CustomIncrement from '../../../components/CustomIncrement'
import {POSITION} from "../../../constant/RouteContant";

const inputs ={
    input : 'Position Name',
    inputT : 'Position Remark'
}

class Index extends Component {
    render() {
        return (
            <div>
                <CustomIncrement title="Increment Position" inputs={inputs} to={POSITION}/>
            </div>
        );
    }
}

export default Index;