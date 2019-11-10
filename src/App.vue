<template>
    <v-app>

        <router-view name="toolbar" />

        <Drawer />

        <v-content>
            <Update />
            <router-view />
            <!-- TODO
            <router-view v-if="premium"/>
            <Premium v-else/>
            -->
        </v-content>

        <Notification />

    </v-app>
</template>

<script>
import Drawer from '@/components/Navigation/Drawer/'
import Notification from '@/components/Notification'
import Update from '@/components/Update'
// import Premium from '@/components/Premium'

export default {
    name: 'App',

    components: {
        Drawer, Notification, Update
    },

    computed: {
        premium () {
            if (this.$store.state.auth.account.level === 'user') return false
            else return true
        }
    },

    methods: {
        setTheme (dark) {
            this.$vuetify.theme.dark = dark
            var color = (dark ? process.env.VUE_APP_THEME_BACKGROUND_DARK : process.env.VUE_APP_THEME_BACKGROUND)
            document.querySelector('meta[name=theme-color]').setAttribute('content', color)
        }
    },

    beforeMount () {
        if (!this.$store.state.app.locale) this.$store.dispatch('app/locale', navigator.language || navigator.userLanguage)
    },

    mounted () {
        this.$i18n.locale = this.$store.state.app.locale
        this.setTheme(this.$store.state.app.dark)

        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'app/setDark') this.setTheme(this.$store.state.app.dark)
            else if (mutation.type === 'app/setLocale') this.$i18n.locale = mutation.payload
        })
    }

}
</script>
