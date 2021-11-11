import React, { Component, Suspense } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { Spin, Alert } from 'antd'
import { HOME, LOGIN } from "./constant/RouteContant";
import { Home, Login } from "./constant/RouteLaxyContant";
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'

class App extends Component {

    componentDidMount() {
        setInterval(() => {
            storageSession.removeItem("token")
            storageSession.removeItem("user")
        }, 1000 * 60 * 6);
    }

    render() {
 
        return (
            <div>
                <Switch>
                    <Suspense fallback={
                        <Spin tip="Loading...">
                            <Alert
                                message="Alert message title"
                                description="Further details about the context of this alert."
                                type="info"
                            />
                        </Spin>
                    }>
                        <Route path={HOME} component={Home} />
                        <Route path={LOGIN} component={Login} />
                        {
                            sessionStorage.getItem('token') ? null : <Redirect to={LOGIN}/>
                        }
                    </Suspense>
                </Switch>
            </div>
        );
    }
}

export default App;