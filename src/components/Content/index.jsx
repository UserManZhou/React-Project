import React, {Component,Suspense} from 'react';
import {Layout,Spin,Alert} from 'antd';
import {
    USER_SEARCH,
    USER_INCREMENT,
    DEPARTMENT,
    DEPARTMENT_INREMENT,
    POSITION,
    POSITION_INCREMENT,
    EMPLOYEE,
    EMPLOYEE_INCREMENT,
    NOTICE,
    NOTICE_INREMENT,
    DOWNLOAD,
    DOWNLOAD_INCREMENT,
    CENTRE
} from '../../constant/RouteContant'
import {Redirect, Route, Switch} from "react-router-dom"
import {
    Centre,
    Department,
    Departmentincrement, Download, DownloadInrement,
    Employee,
    EmployeeIncrement, Notice, NoticeInrement,
    Position,
    PositionIncrement,
    User,
    UserIncrement,

} from "../../constant/RouteLaxyContant";

const {Content} = Layout;

class Index extends Component {
    render() {
        return (
            <div>
                <Content style={{margin: '0 16px'}}>
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
                        <Route path={USER_SEARCH} component={User}/>
                        <Route path={USER_INCREMENT} component={UserIncrement}/>
                        <Route path={DEPARTMENT} component={Department}/>
                        <Route path={DEPARTMENT_INREMENT} component={Departmentincrement}/>
                        <Route path={POSITION} component={Position}/>
                        <Route path={POSITION_INCREMENT} component={PositionIncrement}/>
                        <Route path={EMPLOYEE} component={Employee}/>
                        <Route path={EMPLOYEE_INCREMENT} component={EmployeeIncrement}/>
                        <Route path={NOTICE} component={Notice}/>
                        <Route path={NOTICE_INREMENT} component={NoticeInrement}/>
                        <Route path={DOWNLOAD} component={Download}/>
                        <Route path={DOWNLOAD_INCREMENT} component={DownloadInrement}/>
                        <Route path={CENTRE} component={Centre}/>
                        <Redirect to={CENTRE}/>
                        </Suspense>
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default Index;