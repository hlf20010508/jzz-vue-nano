import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/AboutUs'
import CulturalCreative from '../views/CulturalCreative'
import Market2C from '../views/Market2C'
import Market2B from '../views/Market2B'
import Market2CDetail from '../views/Market2CDetail'
import NotFound from '../views/NotFound'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const includPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return includPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Market2C,
        },
        {
            path: '/market2c',
            component: Market2C,
        },
        {
            path: '/market2c/:itemId',
            component: Market2CDetail,
        },
        {
            path: '/market2b',
            component: Market2B,
        },
        {
            path: '/culturalcreative',
            component: CulturalCreative,
        },
        {
            path: '/aboutus',
            component: AboutUs,
        },
        {
            path: '*',
            component: NotFound
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})