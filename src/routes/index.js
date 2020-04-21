import Vue from 'vue'
import VueRouter from 'vue-router'

import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path: url 주소 , component: url주소로 갔을 때 표시 될 컨포넌트
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'asks',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            // routes.param.id 에 저장된다. :id 지정함으로써
            path: '/item/:id',
            component: ItemView,
        }
    ]
});