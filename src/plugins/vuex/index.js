import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/plugins/vuex/modules/auth'
import app from '@/plugins/vuex/modules/app'
import form from '@/plugins/vuex/modules/form'
import logFood from '@/plugins/vuex/modules/log/food'
import logActivity from '@/plugins/vuex/modules/log/activity'
import logBody from '@/plugins/vuex/modules/log/body'
import template from '@/plugins/vuex/modules/template'
import destiny from '@/plugins/vuex/modules/destiny'
import calorietable from '@/plugins/vuex/modules/calorietable'

Vue.use(Vuex)

export default new Vuex.Store({

  actions: {
    clean (con) {
      return new Promise((resolve, reject) => {
        con.commit('logFood/clean')
        con.commit('logActivity/clean')
        con.commit('logBody/clean')
        con.commit('template/clean')
        con.commit('destiny/clean')
        resolve()
      })
    }
  },

  modules: {
    auth, app, form, logFood, logActivity, logBody, template, destiny, calorietable
  },

  getters: {

    cals: (state, getters) => (weekly = false) => {
      let vals = {
        total: null,
        consumed: null,
        remaining: null,
        percentage: null
      }

      var today = new Date()
      today = today.getDay()
      let daysToSunday = null
      if (today === 0) daysToSunday = 0 // So
      else if (today === 1) daysToSunday = 6 // Mo
      else if (today === 2) daysToSunday = 5 // Di
      else if (today === 3) daysToSunday = 4 // Mi
      else if (today === 4) daysToSunday = 3 // Do
      else if (today === 5) daysToSunday = 2 // Fr
      else if (today === 6) daysToSunday = 1 // Sa

      let possibleThisWeek = getters['destiny/possibleCals'](daysToSunday).weekly
      let extendedThisWeek = getters['logActivity/totalWeek']() || 0
      let availableThisWeek = possibleThisWeek + extendedThisWeek
      let consumedThisWeek = getters['logFood/totalWeek']().calories || 0

      if (weekly) {
        vals.total = availableThisWeek
        vals.consumed = consumedThisWeek
        vals.remaining = availableThisWeek - consumedThisWeek
      } else {
        let consumedToday = getters['logFood/totalDay'].calories
        vals.total = (availableThisWeek - (consumedThisWeek - consumedToday)) / (daysToSunday + 1)
        vals.consumed = consumedToday
        vals.remaining = vals.total - consumedToday
      }

      vals.percentage = Math.round(((vals.consumed / vals.total) * 100))
      return vals
    }

  }

})
