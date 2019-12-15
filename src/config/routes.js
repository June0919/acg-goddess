// 引入路由组件
// 用户管理
import User from '../components/User/User.jsx'
// 增加用户
import UpdateUser from '../components/User/UpdateUser/UpdateUser.jsx'
// 文章管理
import Article from '../components/Article/Article.jsx'
// 增加文章管理
import AddArticle from '../components/Article/AddArticle/AddArticle.jsx'
// 评论管理
import  Discuss from '../components/Discuss/Discuss'
// 轮播图的
import Banner from '../components/Banner/banner.jsx'


export default[

  // {
  //   exact:true,
  //   path: '/login',
  //   component: Login
  // },	
  {
    exact:true,
    path:'/user',
    component:User
  },
  {
    exact:true,
    path:'/user/updateUser',
    component:UpdateUser
  },
  {
    exact:true,
    path:'/article',
    component:Article
  },
  {
    exact:true,
    path:'/article/addArticle',
    component:AddArticle
  },
  {
    exact:true,
    path:'/discuss',
    component:Discuss
  },
  {
    exact:true,
    path:'/banner',
    component:Banner
  }
]