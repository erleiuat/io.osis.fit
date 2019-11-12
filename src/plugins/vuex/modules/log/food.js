import Vue from 'vue'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: {}
    },

    getters: {

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
        }

    }

}
