<template>
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
        }
    }

}
</script>
