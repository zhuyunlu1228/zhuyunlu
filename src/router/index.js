import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login';
import NotFound from '@/pages/errorPage/404';
import Forbidden from '@/pages/errorPage/403';
import Layout from '@/pages/layout/index';
import Profile from '@/pages/profile/index'
//import { component } from 'vue/types/umd';
import Home from '@/pages/home/index';
Vue.use(Router);

/**
 * Init router
 * For login part
*/
export default new Router(
    {
        routes: [{
            path: '/login',
            component: Login
        }
        ]
    }
);

/**
 * DynamicRoutes
 */
export const DynamicRoutes = [
    {
        path: '/',
        component: Layout,
        name: 'container',
        redirect: {
            name: 'home'
        },
        meta: {
            requiresAuth: true,
            name: '首页'
        },
        children: [
            {
                id: 1,
                path: '/home',
                component: Home,
                name: 'home',
                meta: {
                    name: "首页",
                    //FIXME add icon
                }
            },
            {
                id: 2,
                path: '/profile',
                component: Profile,
                name: 'profile',
                meta: {
                    name: "profile"

                }

            }
        ],

    },
    {
        path: '/403',
        component: Forbidden
    },
    {
        path: '*',
        component: NotFound
    }
]