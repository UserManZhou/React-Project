import React, {Component,Suspense} from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import {Spin,Alert} from 'antd'
import {HOME, LOGIN} from "./constant/RouteContant";
import {Home, Login} from "./constant/RouteLaxyContant";

class App extends Component {
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
                <Route path={HOME} component={Home}/>
                <Route path={LOGIN}component={Login}/>
                <Redirect to={LOGIN}/>
                </Suspense>
            </Switch>
            </div>
        );
    }
}

export default App;