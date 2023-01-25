<template>
  <v-card flat>
    <v-card-title>
      {{ $t('currentWeight') }}
      <v-spacer />
      <v-btn icon :to="{name: 'log.body.add'}">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="text-center headline">
      {{ $store.getters['logBody/current'] ? $store.getters['logBody/current'].weight : '-' }} {{ $t('unit.kilogram.short') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        currentWeight: 'Current Weight'
      },
      de: {
        currentWeight: 'Aktuelles Gewicht'
      }
    }
  }

}
</script>
