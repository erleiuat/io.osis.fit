
import VueCookies from 'vue-cookies'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        login: false,
        token: {
            auth: VueCookies.get(process.env.VUE_APP_COOKIE_PREF + 'tknAtrApp') || null,
            refresh: null
        },
        account: {
            id: null,
            mail: null,
            username: null,
            status: null,
            level: null,
            firstname: null,
            lastname: null,
            birthdate: null,
            locale: null,
            avatar: null
        },
        timeout: null
    },

    getters: {

        status: state => {
            if (state.token.auth && state.token.refresh && state.login) return 'authorized'
            else if (state.token.auth && state.token.refresh) return 'available'
            else if (state.token.refresh) return 'expired'
            else if (state.login) return 'unhooked'
            else return 'unauthorized'
        }

    },

    mutations: {

        clean (state) {
            state.login = false
            state.token = {
                auth: null,
                refresh: null
            }
            state.account = {
                id: null,
                mail: null,
                username: null,
                status: null,
                level: null,
                firstname: null,
                lastname: null,
                birthdate: null,
                locale: null,
                avatar: null
            }
        },

        place (state) {
            var dAuth = JSON.parse(window.atob((state.token.auth.split('.')[1]).replace('-', '+').replace('_', '/')))
            var dRefresh = JSON.parse(window.atob((state.token.refresh.split('.')[1]).replace('-', '+').replace('_', '/')))

            VueCookies.set(process.env.VUE_APP_COOKIE_PREF + 'tknRefr', state.token.refresh, new Date(dRefresh.exp * 1000))
            VueCookies.set(process.env.VUE_APP_COOKIE_PREF + 'tknAtrApp', state.token.auth, new Date(dAuth.exp * 1000))
            Apios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token.auth
            state.account = dAuth.data.account

            state.timeout = setTimeout(() => {
                state.token.auth = false
            }, (new Date(dAuth.exp * 1000).getTime() - new Date().getTime()) - 5)
            state.login = true
        },

        remove (state) {
            Apios.defaults.headers.common['Authorization'] = null
            VueCookies.remove(process.env.VUE_APP_COOKIE_PREF + 'tknRefr')
            VueCookies.remove(process.env.VUE_APP_COOKIE_PREF + 'tknAtrApp')
            clearTimeout(state.timeout)
            state.timeout = null
        },

        setTokens (state, tokens) {
            state.token.auth = tokens.auth
            state.token.refresh = tokens.refresh
        },

        check: state => {
            state.token.refresh = VueCookies.get(process.env.VUE_APP_COOKIE_PREF + 'tknRefr') || false
        }

    },

    actions: {

        login (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('session', form).then(res => {
                    con.commit('setTokens', {
                        auth: res.data.token,
                        refresh: res.data.refresh
                    })
                    con.commit('place')
                    resolve()
                }).catch(err => {
                    con.dispatch('remove')
                    reject(err)
                })
            })
        },

        logout (con) {
            return new Promise((resolve, reject) => {
                con.commit('clean')
                con.commit('remove')
                con.dispatch('clean', null, { root: true })
                resolve()
            })
        },

        refresh (con, force = false) {
            return new Promise((resolve, reject) => {
                Apios.put('session', {
                    token: con.state.token.refresh,
                    force: force
                }).then(res => {
                    con.commit('setTokens', {
                        auth: res.data.token,
                        refresh: res.data.refresh
                    })
                    con.commit('place')
                    resolve()
                }).catch(err => {
                    con.dispatch('remove')
                    reject(err)
                })
            })
        }

    }

}
