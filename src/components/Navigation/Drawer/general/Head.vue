<template>
  <v-list-item>
    <v-list-item-avatar @click="$router.push({name: 'home.today'})" class="drawer-avatar">
      <RegularImage :image="$store.state.auth.account.avatar" :placeholder="require('@/assets/image/avatar.jpg')" aspectRatio="1" noClick />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        <b>{{ $store.state.auth.account.firstname }}</b>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn large icon @click.stop="$store.dispatch('app/drawer')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-list-item-action>
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

<style>
.drawer-avatar {
  cursor: pointer;
}
</style>
