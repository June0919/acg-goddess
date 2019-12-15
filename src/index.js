// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import store from "./redux/store"
// 引入App 组件
import App from './App.jsx'

// 引入样式重置的文件
import './assets/css/reset.css'
// 渲染组件
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,document.getElementById('root'))


