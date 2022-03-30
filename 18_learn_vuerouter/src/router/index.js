import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


// import Home from '../pages/Home.vue'
import About from '../pages/About.vue'


// 配置映射关系
const routes = [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: "home",
            component: () => {
                return import (
                    /* webpackChunkName: "home-chunk" */
                    '../pages/Home.vue')
            },
            children: [{
                    path: "",
                    redirect: "/home/message"
                }, {
                    path: "message",
                    component: () =>
                        import ("../pages/HomeMessage.vue")
                },
                {
                    path: "shops",
                    component: () =>
                        import ("../pages/HomeShops.vue")
                }
            ]
        },
        {
            path: '/about',
            component: () =>
                import ( /* webpackChunkName: "about-chunk" */ '../pages/About.vue')
        },
        {
            path: '/login',
            component: () =>
                import ('../pages/login.vue')
        
    },
    // : 路由动态匹配
    // 尽量使用懒加载,不然控制台有warning
    // { path: '/user/:username/:id', component: import ( /* webpackChunkName: "user-chunk" */ '../pages/User.vue') },
    {
        path: '/user/:username/:id',
        component: () =>
            import ( /* webpackChunkName: "user-chunk" */ '../pages/User.vue')
    }, {
        // 路径匹配 . 表示任意  * 表示 多个字符 第二个* 会将参数解析为数组
        path: '/:pathMatch(.*)*',
        component: () =>
            import ("../pages/NotFound.vue")
    }
];

//创建一个路由对象 router
const router = createRouter({
    // routes: routes,
    routes,
    history: createWebHashHistory()
});

// 动态添加路由
const Category = {
    path: '/category',
    component: () =>
        import ("../pages/Category.vue")
}

// 添加顶级路由对象
router.addRoute(Category)

// 添加二级路由对象
router.addRoute("home", {
    path: "moment",
    component: () =>
        import ("../pages/HomeMoment.vue")
})


// 导航守卫 beforeEach
let counter = 0;

// to: Route 对象， 即将跳转道德Routedui'xang
// from: Route对象
/**
 * 返回值的问题:
 *      1.false:不进行导航
 *      2.undergined 或者不屑返回值: 进行默认导航
 *      3.字符串: 路径,跳转到对应的路径中
 *      4.对象: 类似于 router.push({path: "/login",query:...})
 */
router.beforeEach((to, from) => {
    console.log(`进行了${++counter}路由跳转`);
    if (to.path !== '/login') {
        const token = window.localStorage.getItem('token');
        if (!token) {
            return '/login'
        }
    }
})


export default router