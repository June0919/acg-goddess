import React, { Component } from 'react';
// 引入样式文件
import './Register.less'
// 引入axios
import axios from 'axios'
// 引入antd
import { Form, Icon, Input, Button, message } from "antd"
//引入路由
import { NavLink } from 'react-router-dom'
// 引入connect
// import { connect } from "react-redux"
// 引入action
// import { saveUser } from '../../redux/action-creators.js'
import Avatar from './Avatar'

const Item = Form.Item
// 装饰器的使用
// @connect(null, {
//   saveUser
// })
@Form.create()
class Register extends Component {
  state = {
    imgUrl: null
  }
  //获取头像
  getImgUrl = ({ imgUrl }) => {
    this.setState({
      imgUrl
    })
  }
  handleSubmit = e => {
    // 阻止默认事件
    e.preventDefault();
    // 表单验证是否都通过了
    console.log("点击了", this.props)
    this.props.form.validateFields((error, values) => {
      console.log('我执行了', values)
      // 错误
      if (!error) {
        // 获取账号和密码
        const { username, password } = values
        const { imgUrl } = this.state
        console.log(username, password)
        if (!imgUrl) {
          message.error('图片未上传完毕')
          return
        }
        // 发送异步请求
        console.log(username, password, imgUrl)
        axios.post(`http://localhost:3000/api/user/add`, { username, password,imgUrl })
          .then(({ data }) => {
            // 判断发送的请求是否是成功的
            if (data.status === 0) {
              message.success('注册成功')
              console.log(data)

            } else {
              // 请求失败了
              message.error(data.msg)
            }
          })
          .catch((error) => {
            message.error("请求失败:" + error)
          })


        //重置imgUrl
        this.setState({
          imgUrl: null
        })
      } else {
        message.error("表单验证失败")
      }
    })
    console.log('僵硬')
  }
  // 做表单的验证
  validator = (rule, value, callback) => {
    // console.log(rule)
    // 密码验证:规则和用户名验证规则是一样的(必须有内容,大于3位,小于12位,有数字/字母/下划线)
    if (!value) {
      // 用来做提示的
      callback('必须输入密码')
    } else if (value.length < 4) {
      callback('必须大于3位')
    } else if (value.length >= 12) {
      callback('必须小于12位')
    } else if (!/^[0-9a-zA-Z]+$/.test(value)) {
      callback('只能输入数字、字母、下划线')
    } else {
      callback()
    }
    //console.log(value)
    // callback()
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="register">
        <div className="register_container">
          <h2 >用户注册</h2>
          <Form onSubmit={this.handleSubmit} className="register-form">
            <Item className="inputAvatar">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                onChange: this.getImgUrl
              })(
                <Avatar />
              )}
            </Item>
            <Item className="inputText">
              {
                // 用户名,必须是大于4位,必须是小于12位,用户名只能是数字/字母/下划线
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '请输入用户名' },
                    { min: 4, message: '必须是大于3位' },
                    { max: 12, message: '必须是小于12位' },
                    { pattern: /^[0-9a-zA-Z_]+$/, message: '只能输入数字、字母、下划线' },
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="帐号"
                    className="register-input"
                    size="large"
                  />
                )
              }

            </Item>
            <Item className="inputText">
              {
                getFieldDecorator('password', {
                  rules: [
                    { validator: this.validator }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    className="register-input"
                    size="large"
                  />
                )
              }

            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                注&nbsp;&nbsp;&nbsp;&nbsp;册
              </Button>
            </Item>
            <p className="tip">我以前有账号,前去
              <NavLink to="/login" activeClassName="regAct">登陆</NavLink>
            </p >
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;