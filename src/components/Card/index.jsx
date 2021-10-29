import React, {Component} from 'react';
import {Col, Row} from "antd";
import ColItem from './Col'

const data = [
    {
        content: 'Star Trek',
        desription: "J·J·艾布拉姆斯执导，克里斯·派恩、扎克瑞·昆图、艾瑞克·巴纳、佐伊·索尔达娜等联合主演。\n" +
            "该片根据1966年同名剧集改编，讲述了来自爱荷华州的农场男孩詹姆斯·柯克和来自瓦肯星球的史波克第一次在舰队学院相遇成为搭档，同心协力执行一系列外太空任务。",
        img: "/img/v2-996be5e52e4b43d08ae6ca8cae80b0fd_r.jpg"
    },
    {
        content: 'Night Market',
        desription: "夜市在唐代后期的大城市中已出现。宋朝北宋年间统治者明令允许夜市，在北宋东京（现河南开封市）。\n" +
            "现今所指为主要於夜间做买卖的市场，可能贩售杂货、饮食小吃、游戏等。\n",
        img: "/img/v2-1609ea7d5edb30456484e9601c409024_r.jpg"
    },
    {
        content: 'Starry sky',
        desription: "指有星光的天空。\n" +
            "沙汀 《困兽记》十八：“仿佛他们的心思，全被灿烂的星空吸引住了。” 杨朔 《潼关之夜》：“ 潼关 的城墙和城楼衬映在星空之下，画出深黑色的轮廓。” 冰心 《走进人民大会堂》：“走进万人大礼堂……好像凝立在夏夜的星空之下。",
        img: "/img/v2-67c608fef0f04478d7f04b3645fb380f_r.jpg"
    }
]

class Index extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        data.map((value) => {
                            return (
                                <Col span={8}>
                                    <ColItem img={value.img} description={value.desription}>{value.content}</ColItem>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Index;