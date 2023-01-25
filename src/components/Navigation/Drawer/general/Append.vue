<template>
  <v-container class="pb-3 pt-1">
    <v-divider class="mb-2 mt-2" />
    <v-row no-gutters>
      <v-col cols="6">
        <v-btn :to="{name: 'about'}" text block>
          <v-icon left>mdi-information-variant</v-icon>
          {{ $t('view.about.name') }}
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn :to="{name: 'support'}" text block>
          <v-icon left>mdi-face-agent</v-icon>
          {{ $t('view.support.name') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
