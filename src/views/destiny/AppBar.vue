<template>
  <v-app-bar app flat dense color="primary" dark>

    <v-app-bar-nav-icon v-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

    <v-spacer />

    <v-toolbar-title>
      {{ $t('view.destiny.name') }}
    </v-toolbar-title>

    <template v-slot:extension>
      <v-tabs fixed-tabs background-color="transparent" color="white">
        <v-tabs-slider />
        <v-tab :to="{name: 'destiny.goals'}">
          {{ $t('view.destiny.goals.name') }}
        </v-tab>
        <v-tab :to="{name: 'destiny.metabolism'}">
          {{ $t('view.destiny.metabolism.name') }}
        </v-tab>
      </v-tabs>
    </template>

  </v-app-bar>
</template>

<script>
export default {

}
</script>
