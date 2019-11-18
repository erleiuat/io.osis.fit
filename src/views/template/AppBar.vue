<template>
    <v-app-bar app dense flat color="primary" dark>

        <v-btn v-if="show.back" @click="$router.back()" icon>
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-app-bar-nav-icon v-else-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

        <v-toolbar-title>
            {{ title }}
        </v-toolbar-title>

        <v-spacer />

        <v-btn v-if="show.add" @click="$router.push({name: show.add})" icon>
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
            if (this.$route.name === 'template.add') {
                return {
                    add: false,
                    save: true,
                    back: true
                }
            } else if (this.$route.name === 'template.edit') {
                return {
                    add: false,
                    save: true,
                    back: true
                }
            } else {
                return {
                    add: 'template.add',
                    save: false,
                    back: false
                }
            }
        }
    }

}
</script>
