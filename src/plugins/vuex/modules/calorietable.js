export default {
  namespaced: true,

  state: {
    storageKey: '2019-11-21',
    cereals: [],
    dairy: [],
    fats: [],
    fish: [],
    fruits: [],
    meat: [],
    nuts: [],
    spiceAndSauce: [],
    vegetables: []
  },

  getters: {

    all: state => {
      return [
        ...state.cereals,
        ...state.dairy,
        ...state.fats,
        ...state.fish,
        ...state.fruits,
        ...state.meat,
        ...state.nuts,
        ...state.spiceAndSauce,
        ...state.vegetables
      ]
    }

  },

  mutations: {

    set (state, data) {
      state.cereals = data.cereals
      state.dairy = data.dairy
      state.fats = data.fats
      state.fish = data.fish
      state.fruits = data.fruits
      state.meat = data.meat
      state.nuts = data.nuts
      state.spiceAndSauce = data.spiceAndSauce
      state.vegetables = data.vegetables
    }

  },

  actions: {

    loadItems (con) {
      let items = {
        cereals: require('@/assets/calories/cereals.json'),
        dairy: require('@/assets/calories/dairy.json'),
        fats: require('@/assets/calories/fats.json'),
        fish: require('@/assets/calories/fish.json'),
        fruits: require('@/assets/calories/fruits.json'),
        meat: require('@/assets/calories/meat.json'),
        nuts: require('@/assets/calories/nuts.json'),
        spiceAndSauce: require('@/assets/calories/spiceAndSauce.json'),
        vegetables: require('@/assets/calories/vegetables.json'),
        key: con.state.storageKey
      }
      con.commit('set', items)
      localStorage.setItem(process.env.VUE_APP_LOCALSTORAGE_PREF + 'calorieItems', JSON.stringify(items))
    },

    init (con) {
      let tmp = localStorage.getItem(process.env.VUE_APP_LOCALSTORAGE_PREF + 'calorieItems')
      if (!tmp) con.dispatch('loadItems')
      else {
        tmp = JSON.parse(tmp)
        con.commit('set', tmp)
        if (!tmp.key || tmp.key !== con.state.storageKey) {
          localStorage.removeItem(process.env.VUE_APP_LOCALSTORAGE_PREF + 'calorieItems')
          con.dispatch('loadItems')
        }
      }
    }

  }

}
