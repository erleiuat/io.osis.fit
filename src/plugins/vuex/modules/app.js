import NProgress from '@/plugins/nprogress/'
import VueCookies from 'vue-cookies'

export default {
    namespaced: true,

    state: {
        time: false,
        title: process.env.VUE_APP_TITLE,
        loading: 0,
        drawer: true,
        locale: VueCookies.get(process.env.VUE_APP_COOKIE_PREF + 'appLoc') || false,
        dark: VueCookies.get(process.env.VUE_APP_COOKIE_PREF + 'drkMde') || false,
        hasLoaded: (!!VueCookies.get(process.env.VUE_APP_COOKIE_PREF + 'hasLoaded')),
        update: null,
        current: (() => {
            var tDat = new Date()
            var d = (new Date(Date.UTC(tDat.getFullYear(), tDat.getMonth(), tDat.getDate())))
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
            return {
                date: tDat,
                year: tDat.getUTCFullYear(),
                week: Math.ceil((((d - new Date(Date.UTC(d.getUTCFullYear(), 0, 1))) / 86400000) + 1) / 7)
            }
        })()
    },

    mutations: {

        setDrawer: (state, condition) => {
            state.drawer = condition
        },

        setLoading: (state, val) => {
            if (val === true) state.loading++
            else if (val === false && state.loading > 0) state.loading--
            if (state.loading === 1) NProgress.start()
            else if (state.loading === 0) NProgress.done()
        },

        setDark: (state, val) => {
            state.dark = val
            if (val) VueCookies.set(process.env.VUE_APP_COOKIE_PREF + 'drkMde', 1, Infinity)
            else VueCookies.remove(process.env.VUE_APP_COOKIE_PREF + 'drkMde')
        },

        setLocale: (state, val) => {
            state.locale = val
            VueCookies.set(process.env.VUE_APP_COOKIE_PREF + 'appLoc', val, Infinity)
        },

        setUpdate: (state, val) => {
            if (!state.hasLoaded) VueCookies.set(process.env.VUE_APP_COOKIE_PREF + 'hasLoaded', true, -1)
            else state.update = val
        }

    },

    actions: {

        drawer (con) {
            con.commit('setDrawer', !con.state.drawer)
        },

        loading (con, value) {
            con.commit('setLoading', value)
        },

        dark (con, value) {
            con.commit('setDark', value)
        },

        locale (con, value) {
            con.commit('setLocale', value.substring(0, 2))
        },

        update (con, value) {
            con.commit('setUpdate', value)
        }

    }

}
