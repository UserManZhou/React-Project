import React, {Component} from 'react';
import Item from './index.module.css'
import MyNavLink from '../../../pages/MyNavLink'
import { Avatar } from 'antd';
import {
    HomeFilled,
    UnlockOutlined,
    HeatMapOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";


class Index extends Component {

    state = {timer: ''}


    changeTime = (timer) =>{
        console.log(timer)
        if (timer != null) this.setState({timer:''})
        else this.setState({timer:new Date().toLocaleTimeString()})
    }

    render() {
        const {timer} = this.state
        return (
            <div>
                <HeatMapOutlined style={{fontSize:'16px',color:'white'}} />   <span className={Item.logo}>
                <NavLink to="/home/">A M O L P S W</NavLink>
            </span>
                {
                    timer === '' ?
                        <span onClick={()=>this.changeTime(null)} className={Item.span}>时间</span>:
                        <span className={Item.span} onClick={()=>this.changeTime(timer)}>{timer}</span>

                }
                    <Avatar size={50} src="/img/img-8e50cc5f55c9f01891cbb2ce14c95761.jpg" className={Item.activit}/>
                    <span className={Item.user}>User</span>
                <MyNavLink to="/home" ><HomeFilled className={Item.icon}/></MyNavLink>
                <MyNavLink to="/login" ><UnlockOutlined className={Item.loginIcon}/></MyNavLink>
            </div>
        );
    }
}

export default Index;