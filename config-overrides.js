const { override, fixBabelImports, addLessLoader ,addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',

   style: true,
  }),
 addLessLoader({ 
   javascriptEnabled: true,  /* 女生~背景颜色 #D3F4FF*/       /*  ACG女生管理系统的背景颜色 */        /* 左边 < 的背景颜色 */             /* button文本颜色 */                                    /* 左边item选中的背景 */               /* input输入框背景     */
   modifyVars: { '@layout-body-background':'#FFFDF9','@layout-header-background':'#ffd9e4','@layout-trigger-background':'#FFD9E4','@btn-primary-color':'#465881','@btn-primary-bg':'#D3F4FF','@menu-dark-item-active-bg':'#D3F4FF','@input-bg':'rgba(0,0,0,0.1)'},
 }),   /* 哔哩哔哩的蓝色66ccff 粉色 #F992A7  #6B96D8 #B1DAFA  #608FF9   #F992A7 */  /*  '@btn-primary-bg':'#D3F4FF' */
 /* '@primary-color': '#D3F4FF' , */ 
 addDecoratorsLegacy()
);
