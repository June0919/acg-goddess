import { Upload, Icon, message } from 'antd';
import React from 'react'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

//图片校验
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传jpg或png图片当头像');
  }
  const isLt = file.size / 1024 / 100;
  if (!isLt) {
    message.error('头像图片大小不能超过100kb');
  }
  return isJpgOrPng && isLt;
}

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
    };
  }
  triggerChange = changedValue => {
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        imgUrl:changedValue.imageUrl
      });
    }
  };
  //图片上传阶段都会触发的函数
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      console.log(this)
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>{
        this.setState({
          imageUrl,
          loading: false,
        })
        this.triggerChange({imageUrl});
      }
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '102px',height:'102px' }} /> : uploadButton}
      </Upload>
    );
  }
}

export default Avatar