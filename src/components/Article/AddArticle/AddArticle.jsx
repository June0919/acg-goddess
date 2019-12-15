import React, { Component } from 'react';
// 引入样式
import './AddArticle.less'
// 引入antd
import { PageHeader,Input ,Button  } from 'antd';
const { TextArea } = Input;

class Article extends Component {
  render () {
    return (
      <div className='add-article'>
        <PageHeader
          onBack={() => (console.log(this.props.history.push('/article')))}
          title="添加文章"
        />
        <h2>标题(类似:[AVG]在青春的那场恋爱 汉化免安装版V3[2.95G])</h2>
        <Input placeholder="Basic usage" />
        <h2>内容(文章内容)</h2>
        <TextArea rows={6} />
        <h2>补充信息(补充说明文章)</h2>
        <Input placeholder="补充信息" />
        <h2>单个标签(类似:学院)</h2>
        <Input placeholder="学院" />
        <h2>上传用户(类似:尼酱)</h2>
        <Input placeholder="尼酱" />
        <h2>时间类似:2019/12/13)</h2>
        <Input placeholder="2019/12/13" />
        <Button type="primary" className='btn'>确认提交</Button>
      </div>
    );
  }
}

export default Article;