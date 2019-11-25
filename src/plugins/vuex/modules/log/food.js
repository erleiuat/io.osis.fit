import Vue from 'vue'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: {}
    },

    getters: {

        ordered: state => {
            var sortable = Object.values(state.items)
            sortable.sort((a, b) => {
                return new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time)
            })
            return sortable.reverse()
        },

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

        clean (state) {
            state.items = {}
        },

        setItems (state, items) {
            state.items = items
        },

        deleteItem (state, item) {
            Vue.delete(state.items, item.id)
        }

    },

    actions: {

        set (con, items) {
            var d = new Date()
            d.setHours(0, 0, 0, 0)
            var day = d.getDay()
            var weekFirst = new Date(d.setDate(d.getDate() - day + (day === 0 ? -6 : 1)))
            var weekLast = new Date()
            weekLast.setDate(weekFirst.getDate() + 6)
            weekLast.setHours(23, 59, 59)
            var toSet = {}
            for (const key in items) {
                var check = new Date(items[key].date)
                if (check >= weekFirst && check <= weekLast) toSet[key] = items[key]
            }
            con.commit('setItems', { ...con.state.items, ...toSet })
        },

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('log/food', form).then(res => {
                    con.dispatch('set', [res.data])
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
                    con.dispatch('set', res.data)
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
                var tDat = new Date()
                var d = (new Date(Date.UTC(tDat.getFullYear(), tDat.getMonth(), tDat.getDate())))
                d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
                con.dispatch('read', {
                    year: tDat.getUTCFullYear(),
                    week: Math.ceil((((d - new Date(Date.UTC(d.getUTCFullYear(), 0, 1))) / 86400000) + 1) / 7)
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}
