import Vue from 'vue'
import App from './App.vue'

//导入富文本
import VueQuillEditor from 'vue-quill-editor'

//导入axios
import axios from "axios"

//element-ui; 1.引入
import ElementUI from "element-ui";

//element-ui; 2.引入样式
import 'element-ui/lib/theme-chalk/index.css'

//引入vue-router
import VueRouter from "vue-router";
//导入组件
import Login from "./page/Login"
import Admin from "./page/Admin"
import GoodsList from "./page/goods/GoodsList"
import CategoryList from "./page/category/CategoryList"
import GoodsAdd from "./page/goods/GoodsAdd"
import CategoryAdd from "./page/category/CategoryAdd"
import AccountList from "./page/member/AccountList"
import OrderList from "./page/order/OrderList"
import OrderEdit from "./page/order/OrderEdit"

//富文本编辑导入样式和插件
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

//注册插件
Vue.use(VueRouter)

//element-ui; 3.注册插件
Vue.use(ElementUI)

Vue.config.productionTip = false;

//配置路由
const routes =[
  {path:"/",redirect:"/admin"},
  {path:"/login",component:Login,meta:"登录页"},
  {path:"/admin",component:Admin,
  meta:"首页",
  redirect:"/admin/goods-list",
  children: [
    { path: "goods-list", component: GoodsList, meta: "商品管理" },
    { path: "cacategory-list", component: CategoryList,meta:"栏目管理"},
    { path:"account-list", component: AccountList,meta:"会员列表"},  
    { path:"order-list", component: OrderList,meta:"订单管理"}, 

    {path:"goods-add",component:GoodsAdd,meta:"添加商品"},
    {path:"category-add",component:CategoryAdd,meta:"新增栏目"},
    {path: "order-edit/:id",component: OrderEdit,name: "order-edit",meta: "编辑订单",},
  ]},
]

//创建路由对象
const router = new VueRouter({routes})

//给vue构造函数的原型连添加￥axios
Vue.prototype.$axios=axios;

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
