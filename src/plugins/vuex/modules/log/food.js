import Vue from 'vue'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: {}
    },

    getters: {

        week: state => {
            return state.items
        },

        day: (state, getters, rootState) => {
            var dat = new Date()
            var month = dat.getMonth() + 1
            var day = dat.getDate()
            var date = dat.getFullYear() + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)

            var todays = {}
            for (const key in getters.week) {
                if (date === state.items[key].date) todays[key] = state.items[key]
            }
            return todays
        },

        totalWeek: (state, getters) => {
            var week = getters.week
            var total = {
                calories: null,
                fat: null,
                protein: null
            }
            for (const key in week) {
                total.calories += week[key].totalCalories
                total.fat += week[key].totalFat
                total.protein += week[key].totalProtein
            }
            return total
        },

        totalDay: (state, getters) => {
            var day = getters.day
            var total = {
                calories: null,
                fat: null,
                protein: null
            }
            for (const key in day) {
                total.calories += day[key].totalCalories
                total.fat += day[key].totalFat
                total.protein += day[key].totalProtein
            }
            return total
        }

    },

    mutations: {

        setItems (state, items) {
            state.items = items
        },

        deleteItem (state, item) {
            Vue.delete(state.items, item.id)
        }

    },

    actions: {

        setCurrent (con, items) {
            var d = con.rootState.app.current.date
            var day = d.getDay()
            var weekFirst = new Date(d.setDate(d.getDate() - day + (day === 0 ? -6 : 1)))
            var weekLast = new Date()
            weekLast.setDate(weekFirst.getDate() + 6)
            var toSet = {}
            for (const key in items) {
                var check = new Date(items[key].date)
                if (check > weekFirst && check < weekLast) toSet[key] = items[key]
            }
            con.commit('setItems', { ...con.state.items, ...toSet })
        },

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('log/food', form).then(res => {
                    con.dispatch('setCurrent', [res.data])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        read (con, filter) {
            return new Promise((resolve, reject) => {
                let url = 'log/food?year=' + filter.year + '&week=' + filter.week
                Apios.get(url).then(res => {
                    con.dispatch('setCurrent', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        remove (con, item) {
            return new Promise((resolve, reject) => {
                let url = 'log/food/' + item.id
                Apios.delete(url).then(() => {
                    con.commit('deleteItem', item)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        load (con) {
            return new Promise((resolve, reject) => {
                var current = con.rootState.app.current
                con.dispatch('read', {
                    year: parseInt(current.year),
                    week: parseInt(current.week)
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}
