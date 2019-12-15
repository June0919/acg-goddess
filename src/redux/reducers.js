import { GET_DATA, ADD_USER, REMOVE_USER, ADD_ART, REMOVE_ART, REMOVE_COM,SAVE_USER  } from './action-types'

import { combineReducers } from 'redux'
//数据的获取
function data(prevState = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action
    default:
      return prevState
  }
}
//用户的操作
function user(prevState = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...prevState, action.data]
    case REMOVE_USER:
      return action.data
    default:
      return prevState
  }
}
//文章的操作
function art(prevState = [], action) {
  switch (action.type) {
    case ADD_ART:
      return [...prevState, action.data]
    case REMOVE_ART:
      return action.data
    default:
      return prevState
  }
}
//评论的操作
function com(prevState = [], action) {
  switch (action.type) {
    case REMOVE_COM:
      return action.data
    default:
      return prevState
  }
}
/* // 登录
const initUser = {
  user:getItem('user') || {},
  token:getItem("token")||{}
}

function users(prevState=initUser,action){
  // 判断type
  switch (action.type) {
    case SAVE_USER:
      // 保存用户信息到redux中的同时也要保存到localStorage
      // prevState.user=action.data.user
      setItem('user',action.data.user)
      // 保存token串到redux中的同时也要保存到localStorage
      setItem('token',action.data.token)
      //prevState.token=action.data.token
      return action.data
  
    default:
      return prevState
  }
} */
//获取数据的时候最好用data  ，，不对数据进行修改的时候redux中的user,art,com为空
//mock没写对应的的单个数据的获取方法，数据在data中
//当你对user,art，com 就可以获取在redux中单独的获取了
export default combineReducers({
  data,
  user,
  art,
  com,
  //users
})

