import React, {Component} from 'react';
import { Layout } from 'antd';
import Sider from '../../components/Sider'
import Content from '../../components/Content'
import Head from '../../components/Head'

class Index extends Component {
    render() {
        return (
            <div>
                  <Layout style={{ minHeight: '100vh' }}>
                    <Sider />
                    <Layout className="site-layout">
                        <Head/>
                            <Content/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Index;