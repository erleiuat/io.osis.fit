import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: process.env.VUE_APP_THEME_COLOR_PRIMARY,
                secondary: process.env.VUE_APP_THEME_COLOR_SECONDARY,
                accent: process.env.VUE_APP_THEME_COLOR_ACCENT,
                error: process.env.VUE_APP_THEME_COLOR_ERROR,
                success: process.env.VUE_APP_THEME_COLOR_SUCCESS,
                warning: process.env.VUE_APP_THEME_COLOR_WARNING,
                info: process.env.VUE_APP_THEME_COLOR_INFO
            },
            dark: {
                primary: process.env.VUE_APP_THEME_COLOR_PRIMARY,
                secondary: process.env.VUE_APP_THEME_COLOR_SECONDARY,
                accent: process.env.VUE_APP_THEME_COLOR_ACCENT,
                error: process.env.VUE_APP_THEME_COLOR_ERROR,
                success: process.env.VUE_APP_THEME_COLOR_SUCCESS,
                warning: process.env.VUE_APP_THEME_COLOR_WARNING,
                info: process.env.VUE_APP_THEME_COLOR_INFO
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
})
