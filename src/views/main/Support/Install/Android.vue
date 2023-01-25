<template>
  <v-card flat>
    <v-card-text>
      {{ $t('browser') }}
    </v-card-text>
    <v-card-text>
      <v-expansion-panels>

        <v-expansion-panel>
          <v-expansion-panel-header>Google Chrome</v-expansion-panel-header>
          <v-expansion-panel-content class="body-1">
            <ol>
              <li class="pb-2">
                {{ $t('chrome.s1') }} <v-chip label><v-icon>mdi-dots-vertical</v-icon></v-chip>
              </li>
              <li class="pb-2">
                {{ $t('chrome.s2_1') }} <v-chip label>{{ $t('chrome.s2_2') }}</v-chip>
              </li>
              <li class="pb-2">
                {{ $t('chrome.s3_1') }} <v-chip label>{{ $t('chrome.s3_2') }}</v-chip>
              </li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Samsung Internet Browser</v-expansion-panel-header>
          <v-expansion-panel-content class="body-1">
            <ol>
              <li class="pb-2">
                {{ $t('samsung.s1') }} <v-chip label><v-icon>mdi-menu</v-icon></v-chip>
              </li>
              <li class="pb-2">
                {{ $t('samsung.s2_1') }}
                <v-chip label><v-icon left>mdi-plus</v-icon>{{ $t('samsung.s2_2') }}</v-chip>
              </li>
              <li class="pb-2">
                {{ $t('samsung.s3_1') }} <v-chip label>{{ $t('samsung.s3_2') }}</v-chip>
              </li>
              <li class="pb-2">
                {{ $t('samsung.s4_1') }} <v-chip label>{{ $t('samsung.s4_2') }}</v-chip>
              </li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Mozilla Firefox</v-expansion-panel-header>
          <v-expansion-panel-content class="body-1">
            <ol>
              <li class="pb-2">
                {{ $t('mozilla.s1') }} <v-chip label><v-icon>mdi-home-plus</v-icon></v-chip>
              </li>
              <li class="pb-2">
                {{ $t('mozilla.s2_1') }}
                <v-chip label><v-icon left>mdi-plus</v-icon>{{ $t('mozilla.s2_2') }}</v-chip>
              </li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Microsoft Edge</v-expansion-panel-header>
          <v-expansion-panel-content class="body-1">
            <ol>
              <li class="pb-2">
                {{ $t('edge.s1') }} <v-chip label><v-icon>mdi-dots-horizontal</v-icon></v-chip>
              </li>
              <li class="pb-2">
                {{ $t('edge.s2_1') }} <v-chip label>{{ $t('edge.s2_2') }}</v-chip>
              </li>
              <li class="pb-2">
                {{ $t('edge.s3_1') }} <v-chip label>{{ $t('edge.s3_2') }}</v-chip>
              </li>
            </ol>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        browser: 'Select your Browser:',
        chrome: {
          s1: 'Open the options via the 3 points at the top right',
          s2_1: 'Select the option',
          s2_2: 'Add to homescreen',
          s3_1: 'Hit',
          s3_2: 'Add'
        },
        samsung: {
          s1: 'Open the options via the 3 dashes at the bottom right',
          s2_1: 'Select the option',
          s2_2: 'Add page to',
          s3_1: 'Hit',
          s3_2: 'App-Screen',
          s4_1: 'Hit',
          s4_2: 'Install'
        },
        mozilla: {
          s1: 'Click on the cottage above',
          s2_1: 'Hit',
          s2_2: 'Add to homescreen'
        },
        edge: {
          s1: 'Open the options via the 3 points at the bottom right',
          s2_1: 'Select the option',
          s2_2: 'Add to homescreen',
          s3_1: 'Hit',
          s3_2: 'Add'
        }
      },
      de: {
        browser: 'Wähle deinen Browser:',
        chrome: {
          s1: 'Öffne die Optionen über die 3 Punkte oben rechts',
          s2_1: 'Wähle die Option',
          s2_2: 'Zum Startbildschirm zufügen',
          s3_1: 'Klicke auf',
          s3_2: 'Hinzufügen'
        },
        samsung: {
          s1: 'Öffne die Optionen über die 3 Striche unten rechts',
          s2_1: 'Wähle die Option',
          s2_2: 'Seite hinzufügen zu',
          s3_1: 'Klicke auf',
          s3_2: 'App-Bildschirm',
          s4_1: 'Klicke auf',
          s4_2: 'Installieren'
        },
        mozilla: {
          s1: 'Klicke oben auf das Häuschen',
          s2_1: 'Klicke auf',
          s2_2: 'Zu Startbildschirm hinzufügen'
        },
        edge: {
          s1: 'Öffne die Optionen über die 3 Punkte unten rechts',
          s2_1: 'Wähle die Option',
          s2_2: 'Zum Startbildschirm zufügen',
          s3_1: 'Klicke auf',
          s3_2: 'Hinzufügen'
        }
      }
    }
  }

}
</script>
