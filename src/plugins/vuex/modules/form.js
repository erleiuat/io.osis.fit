export default {
    namespaced: true,

    state: {
        send: false,
        sending: false,
        sent: false
    },

    mutations: {
        send (state) {
            state.send = true
            state.sending = false
            state.sent = false
        },
        sending (state) {
            state.send = false
            state.sending = true
            state.sent = false
        },
        sent (state) {
            state.send = false
            state.sending = false
            state.sent = true
        }
    }

}
