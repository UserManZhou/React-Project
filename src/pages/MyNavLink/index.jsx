import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <NavLink activeClassName="baidu" {...this.props}/>
        );
    }
}

export default Index;