<template>
  <v-app-bar app flat dense color="primary" dark>

    <v-app-bar-nav-icon v-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

    <v-spacer />

    <v-toolbar-title>
      {{ $t('view.calorietable.name') }}
    </v-toolbar-title>

  </v-app-bar>
</template>

<script>
export default {

}
</script>
