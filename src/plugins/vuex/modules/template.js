import Vue from 'vue'
import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: {}
    },

    getters: {
        items: state => {
            return state.items
        }
    },

    mutations: {

        setItems (state, items) {
            state.items = items
        },

        deleteItem (state, item) {
            Vue.delete(state.items, item.id)
        },

        editItem (state, item) {
            state.items[item.id] = item
        }

    },

    actions: {

        setCurrent (con, items) {
            con.commit('setItems', { ...con.state.items, ...items })
        },

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('template', form).then(res => {
                    con.dispatch('setCurrent', [res.data])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        edit (con, form) {
            return new Promise((resolve, reject) => {
                let url = 'template/' + form.id
                Apios.put(url, form).then(() => {
                    con.commit('editItem', form)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        read (con) {
            return new Promise((resolve, reject) => {
                Apios.get('template').then(res => {
                    con.dispatch('setCurrent', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        readByID (con, id) {
            return new Promise((resolve, reject) => {
                let url = 'template/' + id
                Apios.get(url).then(res => {
                    var newObj = {}
                    newObj[res.data.id] = res.data
                    con.dispatch('setCurrent', newObj)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        remove (con, item) {
            return new Promise((resolve, reject) => {
                let url = 'template/' + item.id
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
