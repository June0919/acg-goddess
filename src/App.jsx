// 创建
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Redirect, Route } from 'react-router-dom'
// 引入 routes 
import routes from './config/routes.js'
import Login from './components/Login/Login'
import Admin from './components/admin/admin'
// 引入 css
// 引入最外面的大组件 BasicLayout组件
import BasicLayout from './components/basic-layout/BasicLayout.jsx'


class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Admin}></Route>
          <Route path="/login" exact component={Login} />
          <BasicLayout>
            <Switch>
              {
                routes.map((route,index)=>(<Route key={index}{...route}/>))
              }
            </Switch>
          </BasicLayout>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
      </Router>
    );
  }
}

export default App;