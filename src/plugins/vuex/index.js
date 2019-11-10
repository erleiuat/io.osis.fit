import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/plugins/vuex/modules/auth'
import app from '@/plugins/vuex/modules/app'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
    },

    mutations: {
    },

    actions: {
    },

    modules: {
        auth, app
    }

})
