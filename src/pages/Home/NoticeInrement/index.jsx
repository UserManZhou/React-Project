import React, {Component} from 'react';
import CustomIncrement from "../../../components/CustomIncrement";
import {NOTICE} from "../../../constant/RouteContant";
const inputs ={
    input : 'Notice Title',
    inputT : 'Notice Content'
}
class Index extends Component {
    render() {
        return (
            <div>
                <CustomIncrement title="Increment Notice" inputs={inputs} to={NOTICE}/>
            </div>
        );
    }
}

export default Index;