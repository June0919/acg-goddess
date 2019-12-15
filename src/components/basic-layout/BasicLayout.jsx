import React, { Component } from 'react';
// 引入logo图片
import logo from '../../img/logo.png'
// 引入样式
import './BasicLayout.css'

// 引入antd
import { Layout, Breadcrumb } from 'antd';
import LeftNav from './LeftNav/LeftNav.jsx';
const { Header, Content, Footer, Sider } = Layout;



class BasictLayout extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
        <div className="basic-layout-logo">
            <img src={logo} alt="logo" />
          </div>
          <LeftNav />
       </Sider>
        <Layout >
          <Header style={{ padding: 23, }} className='header'>
            ACG 女神管理系统
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 16px' }}>
              <Breadcrumb.Item>女神~</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {
                this.props.children
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasictLayout;