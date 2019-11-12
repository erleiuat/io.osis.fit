<template>
    <v-app-bar app dense flat>

        <v-btn v-if="show.back" @click="$router.back()" icon>
            <v-icon>mdi-cancel</v-icon>
        </v-btn>
        <v-app-bar-nav-icon v-else-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

        <v-toolbar-title>
            {{ title }}
        </v-toolbar-title>

        <v-spacer />

        <v-btn v-if="show.add" @click="$router.push({name: 'log.food.add'})" icon>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-if="show.save" @click="$store.commit('form/send')" icon :loading="$store.state.form.sending">
            <v-icon>mdi-content-save</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {

    computed: {

        title () {
            if (this.$route.name) return this.$t('view.' + this.$route.name + '.name')
            else return null
        },

        show () {
            return {
                add: (this.$route.name !== 'log.food.add'),
                save: (this.$route.name === 'log.food.add'),
                back: (this.$route.name === 'log.food.add')
            }
        }
    }

}
</script>
