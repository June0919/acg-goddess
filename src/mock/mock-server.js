import Mock from 'mockjs'
import datas from './data'
import qs from 'qs'
//用户的操作
/**
 * userName,isAdmin,password  ==需要传入
 * id --唯一表示
 * userName --用户名
 * isAdmin  --是否是管理员
 * passWored --用户密码  ---不用传入，调用接口的时候
 * userImg  --用户图像   ---不用传入，图片有固定图片
 */
//反回所有数据data 
Mock.mock('/data', () => {
  // localStorage.setItem('data', JSON.stringify(data))
  const data = JSON.parse(localStorage.getItem('data')) || datas
  return data
})
//添加用户
//userName,isAdmin,password  ==需要传入
Mock.mock('/addUser', (options) => {
  //获取添加的数据
  let user = qs.parse(options.body)
  const data = JSON.parse(localStorage.getItem('data')) || datas
  // 添加固定属性
  user.id = +new Date()
  user.passWored = 123456
  user.userImg = data.user[0].userImg
  //添加数据到data中
  data.user.push(user)
  
  localStorage.setItem('data', JSON.stringify(data))
  return data
})
//删除用户
//传入Id444
Mock.mock('/removeUser', (options) => {
  let id = qs.parse(options.body)
  const data = JSON.parse(localStorage.getItem('data')) || datas
  //筛序下的数据
  data.user = data.user.filter(item => item.id !== +id.id)
  localStorage.removeItem('data')
  localStorage.setItem('data', JSON.stringify(data))
  return data
})
//获取用户
//文章的操作
/** 传入 title author createTime mian
 * id --唯一标识  ===时间戳
 * title ---标题
 * author   ---作者        
 * createTime  --创建时间  
 * main ---文章内容
 */
//添加文章
// 传入 title author createTime mian
Mock.mock('/addArt', (options) => {
  let art = qs.parse(options.body)
  //先从本地缓存获取，没有从本文件夹
  const data = JSON.parse(localStorage.getItem('data')) || datas
  art.id = +new Date()
  data.article.push(art)
  localStorage.setItem('data', JSON.stringify(data))
  return data
})
//删除文章 == id
Mock.mock('/removeArt', (options) => {
  let id = qs.parse(options.body)
  const data = JSON.parse(localStorage.getItem('data')) || datas
  data.article = data.article.filter(item => item.id !== +id.id)
  localStorage.removeItem('data')
  localStorage.setItem('data', JSON.stringify(data))
  return data
})

/**  commentUser commentTime commentMain commentArtId
 *comment
 * commentUser   ---评论人
 * commentTime   ---时间
 * commentMain   ---评论内容
 * commentArtId  ---文章id  根据id找到对应的id 
 * id            ---唯一标识  
 */
// 删除评论
Mock.mock('/removeCom', (options) => {

  let id = qs.parse(options.body)
  const data = JSON.parse(localStorage.getItem('data')) || datas
  data.comment = data.comment.filter(item => item.id !== +id.id)
  localStorage.removeItem('data')
  localStorage.setItem('data', JSON.stringify(data))
  return data
})

