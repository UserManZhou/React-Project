import React, {Component} from 'react';
import {Layout} from 'antd';
import {Redirect, Route, Switch} from "react-router-dom"
import Centre from '../../pages/Home/Centre'
import User from '../../pages/Home/User'
import IncrementUser from '../../pages/Home/IncrementUser'
const {Content} = Layout;

class Index extends Component {
    render() {
        return (
            <div>
                <Content style={{margin: '0 16px'}}>
                    <Switch>
                        <Route path='/home/usersearch' component={User}/>
                        <Route path='/home/incrementuser' component={IncrementUser}/>
                        <Route path="/home/centre" component={Centre}/>
                        <Redirect to="/home/centre"/>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default Index;