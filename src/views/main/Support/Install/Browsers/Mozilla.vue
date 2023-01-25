<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Mozilla Firefox</v-expansion-panel-header>
    <v-expansion-panel-content class="body-1">
      <ol>
        <li class="pb-2">
          {{ $t('s1') }} <v-chip label>
            <v-icon>mdi-home-plus</v-icon>
          </v-chip>
        </li>
        <li class="pb-2">
          {{ $t('s2_1') }}
          <v-chip label>
            <v-icon left>mdi-plus</v-icon>{{ $t('s2_2') }}
          </v-chip>
        </li>
      </ol>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        s1: 'Click on the cottage above',
        s2_1: 'Hit',
        s2_2: 'Add to homescreen'
      },
      de: {
        s1: 'Klicke oben auf das Häuschen',
        s2_1: 'Klicke auf',
        s2_2: 'Zu Startbildschirm hinzufügen'
      }
    }
  }

}
</script>
