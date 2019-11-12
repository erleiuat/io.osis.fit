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
        }

    }

}
