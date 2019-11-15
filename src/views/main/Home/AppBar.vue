<template>
    <v-app-bar app flat dense>

        <v-app-bar-nav-icon v-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

        <v-spacer />

        <v-toolbar-title>
            {{ viewTitle }}
        </v-toolbar-title>

        <template v-slot:extension>
            <v-tabs fixed-tabs background-color="transparent">
                <v-tabs-slider />
                <v-tab :to="{name: 'home'}">
                    Heute
                </v-tab>
                <v-tab :to="{name: 'home.week'}">
                    Woche
                </v-tab>
            </v-tabs>
        </template>

    </v-app-bar>
</template>

<script>
export default {

    computed: {
        viewTitle () {
            if (this.$route.name) return this.$t('view.' + this.$route.name + '.name')
            else return null
        }
    }

}
</script>
