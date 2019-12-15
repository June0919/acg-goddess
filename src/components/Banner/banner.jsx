import React, { Component } from "react";
import { Table, Drawer, Button } from "antd";
import styles from "./banner.module.less";




class Banner extends Component {
  //抽屉 添加图片轮播
  state = { visible: false, id: "" };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  //删除
  deleteBanner = () => {};
  //添加图片轮播
  addBanner=()=>{
    this.onClose()
  }
  //表头
  columns = [ 
    { title: "轮播图Id", dataIndex: "id", key: "id" },                                                    
    { title: "图片", width: 320,dataIndex: "name", key: "name" ,render:text=>( <img style={{width:'170px',height:'90px'}} src={`${text}`} /> )
    },
    { title: "图片注释", dataIndex: "alt", key: "alt" },
    { title: "图片跳转", dataIndex: "href", key: "href" },
    {
      title: "操作",
      dataIndex: "doit",
      key: "doit",
      render: text => (
        <a
          onClick={() => {
            //e.preventDefault()
            console.log(text)
          }}
        >
          删除
        </a>
      )
    }
  ];
  //列表数据
  data = [
    {
      id: 1,
      name:"http://img1.imgtn.bdimg.com/it/u=3942027719,2162533398&fm=26&gp=0.jpg",
      alt: '来谷唯湖',
      href:
        "New York No. 1users is John Brown",
        doit:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
    },
    {
      id: 2,
      name: "http://img3.imgtn.bdimg.com/it/u=416288537,844461922&fm=26&gp=0.jpg",
      alt: '坂上智代',
      href: "London No. 1 Lake Park",
      doit:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
    },
    {
      id: 3,
      name: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3635199020,294529816&fm=26&gp=0.jpg',
      alt: '萩原夏树',
      href: "Sidney No. 1 Lake Park",
      doit:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
    },
    {
      id: 4,
      name: 'http://img2.imgtn.bdimg.com/it/u=3216641527,1695557561&fm=26&gp=0.jpg',
      alt: '蕾姆',
      href: "Sidney No. 1 Lake Park",
      doit:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
    },  

  ];
  bannerData = [
    { id: 1, name: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1701012814,685719540&fm=26&gp=0.jpg" },
    { id: 2, name: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1204302793,1252338636&fm=26&gp=0.jpg" },
    { id: 3, name: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1738466288,2927867121&fm=26&gp=0.jpg" },
    { id: 4, name: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1867036698,254364248&fm=26&gp=0.jpg" }
  ];
  render() {
    return (
      <div>
        <div style={{ padding: "15px" }}>
          <Button type="primary" onClick={this.showDrawer}  style={{padding:'0 15px'}}>
            选择添加图片轮播
          </Button>
        </div>

        <Drawer
          title="选择添加轮播图"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className={styles.drawerBg}
        >
          {this.bannerData.map(item => {
            return (
              <img
                key={item.id}
                style={
                  this.state.id === item.id
                    ? {
                        width: "95%",
                        //boxSizing:'border-box',
                        marginBottom: "20px",
                        boxShadow:' 0px 0px 0px 2px #1890ff',
                        //border: "2px solid #1890ff",
                        cursor: "pointer",
                        
                      }
                    : {
                        width: "95%", 
                        //boxSizing:'border-box',
                        marginBottom: "20px",
                        cursor: "pointer",
                        
                      }
                }
                onClick={()=>{
                  this.setState({
                      id: item.id
                  })
              }}
              src={`${item.name}`}
              />
                
              
            );
          })}

          <div style={{ textAlign: "center" }}>
            <Button type="primary" onClick={this.addBanner} style={{padding:'0 15px'}}>
              添加
            </Button>
          </div>
        </Drawer>

        <Table
          rowKey={record => record.id}
          columns={this.columns}
          dataSource={this.data}
          pagination={{pageSize:5}}
          className={styles.modelTable}
        />
      </div>
    );
  }
}
export default Banner;
