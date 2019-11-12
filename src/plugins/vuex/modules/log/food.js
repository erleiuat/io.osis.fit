import Apios from '@/plugins/apios/'

export default {
    namespaced: true,

    state: {
        items: []
    },

    getters: {

    },

    mutations: {

    },

    actions: {

        create (con, form) {
            return new Promise((resolve, reject) => {
                Apios.post('log/food', form).then(res => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },

        read (con, filter) {
            return new Promise((resolve, reject) => {
                console.log(filter)
                let url = 'log/food?year=' + filter.year + '&week=' + filter.week
                Apios.get(url).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },

        remove (con, form) {

        }

    }

}
