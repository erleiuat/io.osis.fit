import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        goals: {
            weight: null,
            fat: null,
            date: null
        },
        metabolism: {
            gender: null,
            height: null,
            birthdate: null,
            pal: null
        }
    },

    getters: {

    },

    mutations: {

        setGoals (state, items) {
            state.goals = { ...state.goals, ...items }
        },

        setMetabolism (state, items) {
            state.metabolism = { ...state.metabolism, ...items }
        }

    },

    actions: {

        saveGoals (con) {
            return new Promise((resolve, reject) => {
                let url = 'destiny/goals/' + con.rootState.auth.account.id
                Apios.patch(url, con.state.goals).then(() => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        saveMetabolism (con) {
            return new Promise((resolve, reject) => {
                let url = 'destiny/metabolism/' + con.rootState.auth.account.id
                Apios.patch(url, con.state.metabolism).then(() => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        loadGoals (con) {
            return new Promise((resolve, reject) => {
                Apios.get('destiny/goals/' + con.rootState.auth.account.id).then(res => {
                    con.commit('setGoals', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        loadMetabolism (con) {
            return new Promise((resolve, reject) => {
                Apios.get('destiny/metabolism/' + con.rootState.auth.account.id).then(res => {
                    con.commit('setMetabolism', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}
