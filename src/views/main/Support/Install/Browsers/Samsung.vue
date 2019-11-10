<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Samsung Internet Browser</v-expansion-panel-header>
        <v-expansion-panel-content class="body-1">
            <ol>
                <li class="pb-2">
                    {{ $t('s1') }} <v-chip label>
                        <v-icon>mdi-menu</v-icon>
                    </v-chip>
                </li>
                <li class="pb-2">
                    {{ $t('s2_1') }}
                    <v-chip label>
                        <v-icon left>mdi-plus</v-icon>{{ $t('s2_2') }}
                    </v-chip>
                </li>
                <li class="pb-2">
                    {{ $t('s3_1') }} <v-chip label>{{ $t('s3_2') }}</v-chip>
                </li>
                <li class="pb-2">
                    {{ $t('s4_1') }} <v-chip label>{{ $t('s4_2') }}</v-chip>
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
                s1: 'Open the options via the 3 dashes at the bottom right',
                s2_1: 'Select the option',
                s2_2: 'Add page to',
                s3_1: 'Hit',
                s3_2: 'App-Screen',
                s4_1: 'Hit',
                s4_2: 'Install'
            },
            de: {
                s1: 'Öffne die Optionen über die 3 Striche unten rechts',
                s2_1: 'Wähle die Option',
                s2_2: 'Seite hinzufügen zu',
                s3_1: 'Klicke auf',
                s3_2: 'App-Bildschirm',
                s4_1: 'Klicke auf',
                s4_2: 'Installieren'
            }
        }
    }

}
</script>
