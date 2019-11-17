<template>
    <v-list-item :to="{name: 'settings.account'}">
        <v-list-item-avatar>
            <RegularImage :image="$store.state.auth.account.avatar" :placeholder="require('@/assets/image/avatar.jpg')" aspectRatio="1" noClick />
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>
                <b>{{ $store.state.auth.account.firstname }}</b>
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
import RegularImage from '@/components/Image/Regular'

export default {

    components: {
        RegularImage
    }

}
</script>
