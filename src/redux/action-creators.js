import { GET_DATA, ADD_USER, REMOVE_USER, ADD_ART, REMOVE_ART, REMOVE_COM, SAVE_USER } from './action-types'
//引入请求方法
import { reqGetDate, reqAddUser, reqRemoveUser, reqAddArt, reqRemoveArt, reqRemoveCom } from '../api/index'

import axios from 'axios'

//获取数据  data 包括 user art com  用户 文章 评论
//同步的actin
const getDataSuccess = (datas) => ({ type: GET_DATA, data: datas })
//异步的action 
export const getData = () => {
  return async (disptach) => {
    // const result =await axios('/data')
    const result = await reqGetDate()
    if (result.code === 0) {
      disptach(getDataSuccess(result))
    }
  }
}
//用户的操作====
//添加用户
//同步ACTION
const addUserSuccess = (users) => ({ type: ADD_USER, data: users })
//异步action
export const addUser = ({ userName, isAdmin, password }) => {
  return async (disptach) => {
    const result = await reqAddUser({ userName, isAdmin, password })
    if (result.code === 0) {
      disptach(addUserSuccess(result.user))

    }
  }
}
//删除用户
const removeUserSuccess = (user) => ({ type: REMOVE_USER, data: user })
//异步action
export const removeUser = (id) => {
  return async (disptach) => {
    const result = await reqRemoveUser(id)
    if (result.code === 0) {
      disptach(removeUserSuccess(result.user))
    }
  }
}
//文章的操作
//添加文章
//同步ACTION
const addArtSuccess = (art) => ({ type: ADD_ART, data: art })
//异步action
export const addArt = ({ title, author, createTime, mian }) => {
  return async (disptach) => {
    const result = await reqAddArt({ title, author, createTime, mian })
    if (result.code === 0) {
      disptach(addArtSuccess(result.article))
    }
  }
}
// //删除文章
const removeArtSuccess = (art) => ({ type: REMOVE_ART, data: art })
//异步action
export const removeArt = (id) => {
  return async (disptach) => {
    const result = await reqRemoveArt(id)
    if (result.code === 0) {
      disptach(removeArtSuccess(result.article))
    }
  }
}

//评论的操作
//删除评论
const removeComSuccess = (comment) => ({ type: REMOVE_COM, data: comment })
//异步action
export const removeCom = (id) => {
  return async (disptach) => {
    const result = await reqRemoveCom(id)
    if (result.code === 0) {
      disptach(removeComSuccess(result.comment))
    }
  }
}

// 登录的
export const saveUser = (value) => ({ type:SAVE_USER, data:value })


