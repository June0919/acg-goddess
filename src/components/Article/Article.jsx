import React, { Component } from 'react';
import { Card, Button } from 'antd';
// 引入样式
import './Article.css'


class Article extends Component {
  addArticle=()=>{
  this.props.history.push('/article/addArticle')
  }
  render () {
    const test = [0, 1, 2, 3]
    return (
      <div className='article' >
         <Button type="primary" className='titleBtn' size='large' onClick={this.addArticle}>添加文章</Button>
        <div className='articleList'>
          {
            test.map((te, index) => (
              <Card
                style={{ width: 500 ,marginBottom:'30px'}}
                className='articleItem'
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <div className='btn'>
                  <Button type="primary">修改</Button>
                  <Button type="primary">删除</Button>
                </div>
              </Card>
            ))
          }
        </div>
      </div>

    );
  }
}

export default Article;