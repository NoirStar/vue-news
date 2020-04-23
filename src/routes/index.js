import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
//import CreateListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'


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
            //component: CreateListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => {
                    console.log('fetched');
                    next();
                  })
                  .catch(e => console.log(e));
                  
            }

            
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: CreateListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => {
                    console.log('fetched');
                    next();
                  })
                  .catch(e => console.log(e));
                  
            }

        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: CreateListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                  .then(() => {
                    console.log('fetched');
                    next();
                  })
                  .catch(e => console.log(e));
                  
            }
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