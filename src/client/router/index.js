import Vue from 'vue';
import Router from 'vue-router';
import store from './../store/store';
Vue.use(Router);




// 导入相应的子页面
import Hello from './../components/Hello';
import index from '../views/index.vue';

var router = new Router({
  mode: 'history',
  routes: [
    { name: 'index', path: '/', component: index },
    { name: 'hello', path: '/hello', component: Hello }
  ]
})

export default router;