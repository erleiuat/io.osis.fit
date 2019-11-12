export default {
    namespaced: true,

    state: {
        sending: false
    },

    mutations: {
        submit (state) {
            state.sending = true
        },
        sent (state) {
            state.sending = false
        }
    },

    actions: {
        submit (con) {
            con.commit('submit')
        },
        sent (con) {
            con.commit('sent')
        }
    }

}
