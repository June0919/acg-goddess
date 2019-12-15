import React, { Component } from 'react';
import {  Menu,  Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom'


@withRouter
class LeftNav extends Component {

  goto = () => {
    console.log(this);

    //  this.props.history.push('/login')

  }
  render () {
    return (
      <div >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='menuList'>
          <Menu.Item key="1" className='menuItem'>
            <Link to='/user'>
              <Icon type="user" style={{ color: '#6C7B95' }} />
              <span style={{ color: '#6C7B95' }}>用户管理</span>
            </Link>

          </Menu.Item>
          <Menu.Item key="2" onClick={this.goto}>
            <Link to='/article'>
              <Icon type="container" style={{ color: '#6C7B95' }} />
              <span style={{ color: '#6C7B95' }}>文章管理</span>
            </Link>

          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/discuss'>
              <Icon type="message" style={{ color: '#6C7B95' }} />
              <span style={{ color: '#6C7B95' }}>评论管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/banner'>
              <Icon type="file-image" style={{ color: '#6C7B95' }} />
              <span style={{ color: '#6C7B95' }}>轮播图管理</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="5">
              <Icon type="smile" style={{color:'#6C7B95'}}/>
              <span style={{color:'#6C7B95'}}>其他小东西管理</span>
            </Menu.Item> */}
        </Menu>
      </div>
    );
  }
}

export default LeftNav;