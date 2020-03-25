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
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});