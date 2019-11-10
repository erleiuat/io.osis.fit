<template>
    <!-- height:100% = Safari Bottom-Nav Fix on mobile -->
    <v-navigation-drawer v-model="drawer" v-if="$store.state.auth.login" width="300" style="height: 100%;" hide-overlay floating app>

        <v-list nav dense>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img :src="require('@/assets/logo.svg')" contain />
                </v-list-item-avatar>

                <v-list-item-content>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn large icon @click.stop="$store.dispatch('app/drawer')">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-list-item :to="{name: 'settings.account'}">
                <v-list-item-avatar>
                    <v-img v-if="avatar" :lazy-src="avatar.lazy" :src="avatar.src" />
                    <v-img v-else :src="require('@/assets/image/avatar.png')" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <b>{{ $store.state.auth.account.firstname }}</b>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

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

            <v-list-group prepend-icon="mdi-settings-outline" color="grey">
                <template v-slot:activator>
                    <v-list-item-title>
                        <b>{{ $t('view.settings.name') }}</b>
                    </v-list-item-title>
                </template>
                <v-list-item :to="{name: 'settings.account'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.settings.account.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item :to="{name: 'settings.app'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.settings.app.name') }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group v-if="$store.state.auth.account.level === 'admin'" color="grey" prepend-icon="mdi-monitor-cellphone-star">
                <template v-slot:activator>
                    <v-list-item-title>
                        <b>{{ $t('view.admin.name') }}</b>
                    </v-list-item-title>
                </template>
                <v-list-item :to="{name: 'admin.log'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.admin.log.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'admin.accounts'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.admin.accounts.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'admin.errorcodes'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.admin.errorcodes.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'admin.images'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.admin.images.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{name: 'theme'}" color="white" active-class="secondary">
                    <v-list-item-action />
                    <v-list-item-title>
                        {{ $t('view.theme.name') }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>

        </v-list>

        <template v-slot:append>
            <v-list nav>
                <v-divider class="mb-2 mt-2" />
                <v-list-item :to="{name: 'about'}">
                    <v-list-item-action>
                        <v-icon color="grey darken-1">mdi-information-variant</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">
                        {{ $t('view.about.name') }}
                    </v-list-item-title>
                </v-list-item>
                <v-list-item :to="{name: 'support'}">
                    <v-list-item-action>
                        <v-icon color="grey darken-1">mdi-face-agent</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">
                        {{ $t('view.support.name') }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </template>

    </v-navigation-drawer>
</template>

<script>
export default {

    computed: {

        avatar () {
            if (!this.$store.state.auth.account.avatar) return false
            return {
                lazy: this.$store.state.auth.account.avatar.path_lazy,
                src: this.$store.state.auth.account.avatar.path_small
            }
        },

        items () {
            return [
                { text: this.$t('view.home.name'), icon: 'mdi-home-outline', to: { name: 'home' } }
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
