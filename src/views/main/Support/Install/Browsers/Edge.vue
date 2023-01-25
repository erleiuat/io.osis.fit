<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Microsoft Edge</v-expansion-panel-header>
    <v-expansion-panel-content class="body-1">
      <ol>
        <li class="pb-2">
          {{ $t('s1') }} <v-chip label>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-chip>
        </li>
        <li class="pb-2">
          {{ $t('s2_1') }} <v-chip label>{{ $t('s2_2') }}</v-chip>
        </li>
        <li class="pb-2">
          {{ $t('s3_1') }} <v-chip label>{{ $t('s3_2') }}</v-chip>
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
        s1: 'Open the options via the 3 points at the bottom right',
        s2_1: 'Select the option',
        s2_2: 'Add to homescreen',
        s3_1: 'Hit',
        s3_2: 'Add'
      },
      de: {
        s1: 'Öffne die Optionen über die 3 Punkte unten rechts',
        s2_1: 'Wähle die Option',
        s2_2: 'Zum Startbildschirm zufügen',
        s3_1: 'Klicke auf',
        s3_2: 'Hinzufügen'
      }
    }
  }

}
</script>
