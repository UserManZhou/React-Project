import React, {Component} from 'react';
import CustomIncrement from "../../../components/CustomIncrement";
import {DOWNLOAD} from "../../../constant/RouteContant";

const inputs ={
    input : 'Download Title',
    inputT : 'Download description',
    inputTh: 'Download Document'
}
class Index extends Component {
    render() {
        return (
            <div>
                <CustomIncrement title="Increment Download" isDownload={true} inputs={inputs} to={DOWNLOAD}/>
            </div>
        );
    }
}

export default Index;