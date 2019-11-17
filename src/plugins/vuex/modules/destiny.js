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

        age: state => {
            if (!state.metabolism.birthdate) return false
            var birthDate = new Date(state.metabolism.birthdate)
            var ageDifMs = Date.now() - birthDate.getTime()
            var ageDate = new Date(ageDifMs)
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        },

        bmr: (state, getters, rootState, rootGetters) => {
            var weight = (rootGetters['logBody/current'] ? rootGetters['logBody/current'].weight : false)
            var height = state.metabolism.height || false
            var gender = state.metabolism.gender || false
            var age = getters.age
            if (!weight || !height || !age || !gender) return false
            if (gender === 'male') return Math.round(((3.4 * weight) + (15.3 * height) + (6.8 * age) - 961) * 100) / 100
            else return Math.round(((2.4 * weight) + (9 * height) + (4.7 * age) - 65) * 100) / 100
        },

        bmrPal: (state, getters) => {
            var bmr = getters.bmr
            var pal = state.metabolism.pal || false
            if (!pal || !bmr) return false
            return Math.round((((14.65 + (9 * pal)) / 24) * bmr) * 100) / 100
        },

        timeRemaining: (state) => {
            if (!state.goals.date) return { days: false, weeks: false }
            var date1 = new Date()
            var date2 = new Date(state.goals.date)
            var DifferenceInDays = Math.round((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))
            return {
                days: DifferenceInDays,
                weeks: Math.round(DifferenceInDays / 7 * 10) / 10
            }
        },

        lossInKg: (state, getters, rootState, rootGetters) => {
            var current = (rootGetters['logBody/current'] ? rootGetters['logBody/current'].weight : false)
            var goal = state.goals.weight || false
            if (!current || !goal) return { total: false, perWeek: false }
            var total = current - goal
            return {
                total: total,
                perWeek: (getters.timeRemaining ? Math.round(total / getters.timeRemaining.weeks * 10) / 10 : '-')
            }
        },

        possibleCals: (state, getters) => {
            var toLoose = getters.lossInKg.total
            var remainingDays = getters.timeRemaining.days
            var bmrPal = getters.bmrPal
            if (!toLoose || !remainingDays || !bmrPal) return { daily: false, weekly: false }
            var perDay = Math.round((bmrPal - ((toLoose * 7200) / remainingDays)) * 100) / 100
            return {
                daily: perDay,
                weekly: perDay * 7
            }
        }

    },

    mutations: {

        clean (state) {
            state.goals = {
                weight: null,
                fat: null,
                date: null
            }
            state.metabolism = {
                gender: null,
                height: null,
                birthdate: null,
                pal: null
            }
        },

        setGoals (state, items) {
            state.goals = { ...state.goals, ...items }
        },

        setMetabolism (state, items) {
            state.metabolism = { ...state.metabolism, ...items }
        }

    },

    actions: {

        set (con, items) {
            con.commit('setGoals', items.goals)
            con.commit('setMetabolism', items.metabolism)
        },

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
        },

        load (con) {
            return new Promise((resolve, reject) => {
                Apios.get('destiny/' + con.rootState.auth.account.id).then(res => {
                    con.commit('setGoals', res.data.goals)
                    con.commit('setMetabolism', res.data.metabolism)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}
