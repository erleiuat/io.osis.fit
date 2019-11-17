import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/plugins/vuex/'
import i18n from '@/plugins/i18n/'

import main from '@/plugins/router/routes/main'
import auth from '@/plugins/router/routes/auth'
import general from '@/plugins/router/routes/general'
import app from '@/plugins/router/routes/app'

Vue.use(VueRouter)

const router = new VueRouter({
    navLoad: false,
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        ...main,
        ...auth,
        ...general,
        ...app
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('auth/check')
    if (!router.navLoad) {
        router.navLoad = true
        store.dispatch('app/loading', true)
    }

    var auth = store.getters['auth/status']
    var needAuth = (to.name ? to.meta.auth : true)

    if (auth !== 'unauthorized') {
        if (auth === 'authorized') {
            next()
        } else if (auth === 'expired') {
            store.dispatch('auth/refresh').then(() => {
                next()
            }).catch(res => {
                next({ name: 'auth' })
            })
        } else if (auth === 'unhooked') {
            store.dispatch('auth/logout')
            next({ name: 'auth', query: { target: to.name } })
        } else if (auth === 'available') {
            store.commit('auth/place')
            next()
        }
    } else if (!needAuth) {
        next()
    } else next({ name: 'auth', query: { target: to.name } })
})

router.afterEach((to, from) => {
    if (router.navLoad) {
        router.navLoad = false
        store.dispatch('app/loading', false)
    }
    if (to.name) document.title = i18n.t('view.' + to.name + '.name') + ' | ' + store.state.app.title
})

export default router
