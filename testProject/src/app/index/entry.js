/**
 * Created by qiangkaowei on 2017/5/3.
 */
import Vue from 'vue'
// import App from './index.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes  from './router.js'
const router = new VueRouter({
    routes
})
import Favlist from '../components/Favlist.vue'
Vue.config.debug = true;//开启错误提示

Vue.component('my-item',{
    props:['td'],
    template:"<li>{{td.text}}</li>"
})
new Vue({
    el: '#app', router,
    data:{
        myList:[
            {text:'设计1'},
            {text:'设计2'},
            {text:'设计3'},
            {text:'设计4'},
        ]
    }
})
// document.body.style.display='block';