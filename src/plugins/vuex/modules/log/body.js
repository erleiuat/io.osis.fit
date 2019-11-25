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

        first: state => {
            var tmp = state.items
            if (Object.keys(tmp).length === 0) return false
            var first = false

            var earliest = new Date()
            earliest.setDate(earliest.getDate() + 1)
            for (const key in tmp) {
                var comp = new Date(tmp[key].date + 'T' + tmp[key].time)
                if (comp.getTime() < earliest.getTime()) {
                    earliest = comp
                    first = tmp[key]
                }
            }
            return first
        },

        current: state => {
            var tmp = state.items
            if (Object.keys(tmp).length === 0) return false
            var current = false
            var latest = new Date('1900-01-01')
            for (const key in tmp) {
                var comp = new Date(tmp[key].date + 'T' + tmp[key].time)
                if (comp.getTime() > latest.getTime()) {
                    latest = comp
                    current = tmp[key]
                }
            }
            return current
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
            con.commit('setItems', { ...con.state.items, ...items })
        },

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('log/body', form).then(res => {
                    con.dispatch('set', [res.data])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        read (con) {
            return new Promise((resolve, reject) => {
                let url = 'log/body'
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
                let url = 'log/body/' + item.id
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
                Apios.get('log/body').then(res => {
                    con.dispatch('set', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }

    }

}
