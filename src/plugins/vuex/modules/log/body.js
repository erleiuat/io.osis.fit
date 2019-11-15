import Vue from 'vue'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: {}
    },

    getters: {

        current: state => {
            var tmp = state.items

            if (Object.keys(tmp).length === 0) return null

            var latest = new Date('1900-01-01')
            var current = null

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

        setItems (state, items) {
            state.items = items
        },

        deleteItem (state, item) {
            Vue.delete(state.items, item.id)
        }

    },

    actions: {

        setCurrent (con, items) {
            con.commit('setItems', { ...con.state.items, ...items })
        },

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('log/body', form).then(res => {
                    con.dispatch('setCurrent', [res.data])
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
                    con.dispatch('setCurrent', res.data)
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
            Apios.get('log/body').then(res => {
                con.dispatch('setCurrent', res.data)
            }).catch(err => {
                console.log(err)
            })
        }

    }

}
