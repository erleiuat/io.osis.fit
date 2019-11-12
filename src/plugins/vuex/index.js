import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/plugins/vuex/modules/auth'
import app from '@/plugins/vuex/modules/app'
import form from '@/plugins/vuex/modules/form'
import logFood from '@/plugins/vuex/modules/log/food'
import logActivity from '@/plugins/vuex/modules/log/activity'
import logBody from '@/plugins/vuex/modules/log/body'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
    },

    mutations: {
    },

    actions: {
    },

    modules: {
        auth, app, form, logFood, logActivity, logBody
    }

})
