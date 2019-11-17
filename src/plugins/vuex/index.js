import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/plugins/vuex/modules/auth'
import app from '@/plugins/vuex/modules/app'
import form from '@/plugins/vuex/modules/form'
import logFood from '@/plugins/vuex/modules/log/food'
import logActivity from '@/plugins/vuex/modules/log/activity'
import logBody from '@/plugins/vuex/modules/log/body'
import template from '@/plugins/vuex/modules/template'
import destiny from '@/plugins/vuex/modules/destiny'

Vue.use(Vuex)

export default new Vuex.Store({

    actions: {
        clean (con) {
            con.commit('logFood/clean')
            con.commit('logActivity/clean')
            con.commit('logBody/clean')
            con.commit('template/clean')
            con.commit('destiny/clean')
        }
    },

    modules: {
        auth, app, form, logFood, logActivity, logBody, template, destiny
    }

})
