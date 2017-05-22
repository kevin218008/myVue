/**
 * Created by qiangkaowei on 2017/5/5.
 */
import Index from '../pages/index.vue'
import First from '../pages/Registration-home.vue'
import Second from '../pages/CheckScores-guide-page.vue'
import Third from '../pages/Examination-room-home.vue'
import Forth from '../pages/Help-home.vue'
// import Fifth from '../pages/Registration-home.vue'
import Six from '../pages/Register-1.vue'
import LoginRegister from '../pages/login&register.vue'

// const router = new VueRouter({
//     mode: 'history',
//     // base: __dirname,
//     routes: [
//         // { path: '/', name: '/', component: Index },
//         { path: '../pages/page1', name: 'first', component: First },
//         { path: '../pages/page2', name: 'second', component: Second }
//     ]
// })
// 配置路由
export default [
    { path:'/',component: Index},
    { path: '/Registration-home',  component: First },
    { path: '/CheckScores-guide-page',  component: Second },
    { path: '/Examination-room-home',  component: Third },
    { path: '/Help-home',  component: Forth },
    // { path: '/Registration-home', name:'xixi5', component: Fifth },
    { path: '/Register-1',  component: Six },
    { path: '/login&register',  component: LoginRegister }
]

