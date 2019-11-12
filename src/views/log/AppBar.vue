<template>
    <v-app-bar app flat>

        <v-app-bar-nav-icon v-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />
        <v-toolbar-title>
            {{ viewTitle }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn @click="$router.push({name: 'log.food.add'})" v-if="showBtn" icon>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn @click="$store.dispatch('form/submit')" v-else icon :loading="$store.state.form.sending">
            <v-icon>mdi-content-save</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {

    computed: {
        viewTitle () {
            if (this.$route.name) return this.$t('view.' + this.$route.name + '.name')
            else return null
        },
        showBtn () {
            return (this.$route.name !== 'log.food.add')
        }
    }

}
</script>
