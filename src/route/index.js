import Vue from 'vue'
import VueRouter from 'vue-router'
import User from "../components/User";
import Animate from '../components/Animate'
import Home from "../components/Home";
import Homepage from "../components/Homepage";

//安装路由
Vue.use(VueRouter);

//实例化路由，导出路由
export default new VueRouter({
  routes:[
    // {
    //   //路由路径
    //   path:'/home',
    //   name:'home',
    //   //跳转的组件
    //   component:Home
    // },
    {path:'/',redirect:'/homepage'}, //默认路由
    {path:'/homepage', name:'homepage', component:Homepage},
    {path:'/user', name:'user', component:User},
    {path:'/animate', name:'animate', component:Animate}
  ]
});
