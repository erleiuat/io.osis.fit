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
            var tmp = this.$route.name.split('.')
            if (tmp[0] !== 'log') return
            if (tmp[1] === 'food') {
                return {
                    add: (tmp[2] !== 'add' ? 'log.activity.add' : false),
                    save: (tmp[2] === 'add'),
                    back: (tmp[2] === 'add')
                }
            }
            if (tmp[1] === 'activity') {
                return {
                    add: (tmp[2] !== 'add' ? 'log.activity.add' : false),
                    save: (tmp[2] === 'add'),
                    back: (tmp[2] === 'add')
                }
            }
            if (tmp[1] === 'body') {
                return {
                    add: (tmp[2] !== 'add' ? 'log.body.add' : false),
                    save: (tmp[2] === 'add'),
                    back: (tmp[2] === 'add')
                }
            }

            return false
        }
    }

}
</script>
