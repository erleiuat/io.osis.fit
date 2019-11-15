<template>
    <!-- height:100% = Safari Bottom-Nav Fix on mobile -->
    <v-navigation-drawer v-model="drawer" v-if="$store.state.auth.login" width="300" style="height: 100%;" hide-overlay floating app>
        <v-list nav dense>

            <Head />
            <User />
            <v-divider class="mb-2 mt-2" />

            <v-list-item v-for="(item, key) in items" :key="key" :to="item.to" color="white" active-class="secondary">
                <v-list-item-action>
                    <v-icon>
                        {{ item.icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <b>{{ item.text }}</b>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <Logs />

            <Settings />
            <Admin v-if="$store.state.auth.account.level === 'admin'" />
        </v-list>
        <template v-slot:append>
            <Append />
        </template>
    </v-navigation-drawer>
</template>

<script>
import Head from '@/components/Navigation/Drawer/general/Head'
import User from '@/components/Navigation/Drawer/general/User'
import Settings from '@/components/Navigation/Drawer/general/Settings'
import Admin from '@/components/Navigation/Drawer/general/Admin'
import Append from '@/components/Navigation/Drawer/general/Append'

import Logs from '@/components/Navigation/Drawer/Logs'

export default {

    components: {
        Head, User, Settings, Admin, Append, Logs
    },

    computed: {

        items () {
            return [
                { text: this.$t('view.home.name'), icon: 'mdi-home-outline', to: { name: 'home' } },
                { text: this.$t('view.template.name'), icon: 'mdi-file-replace-outline', to: { name: 'template' } },
                { text: this.$t('view.destiny.name'), icon: 'mdi-target', to: { name: 'destiny.goals' } }
            ]
        },

        drawer: {
            get () {
                if (this.$store.state.auth.login) return this.$store.state.app.drawer
                return false
            },
            set (val) {
                if (this.$store.state.auth.login) this.$store.commit('app/setDrawer', val)
            }
        }

    }

}
</script>
