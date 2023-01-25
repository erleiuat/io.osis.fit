<template>
  <v-app-bar app flat dense color="primary" dark>

    <v-app-bar-nav-icon v-if="!$store.state.app.drawer" @click.stop="$store.dispatch('app/drawer')" />

    <v-spacer />

    <v-toolbar-title>
      {{ $t('view.home.name') }}
    </v-toolbar-title>

    <template v-slot:extension>
      <v-tabs fixed-tabs background-color="transparent" color="white">
        <v-tabs-slider />
        <v-tab :to="{name: 'home.today'}">
          {{ $t('view.home.today.name') }}
        </v-tab>
        <v-tab :to="{name: 'home.week'}">
          {{ $t('view.home.week.name') }}
        </v-tab>
      </v-tabs>
    </template>

  </v-app-bar>
</template>
