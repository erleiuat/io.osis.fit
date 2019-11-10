<template>
    <v-row>
        <v-col cols="12">
            <span class="headline">
            {{ $t('title') }}
            </span>
        </v-col>
        <v-col cols="12">
            {{ $t('text') }}
            <br /><br />
            <ol class="body-1">
                <li class="pb-2">
                    {{ $t('s1') }} <a href="https://www.google.com/intl/de/chrome/">Google Chrome</a>
                </li>
                <li class="pb-2">
                    {{ $t('s2') }}
                    <v-chip label>
                        <v-icon>mdi-plus-circle-outline</v-icon>
                    </v-chip>
                </li>
                <li class="pb-2">
                    {{ $t('s3_1') }}
                    <v-chip label>
                        {{ $t('s3_2') }}
                    </v-chip>
                </li>
            </ol>
        </v-col>
    </v-row>
</template>

<script>
export default {

    i18n: {
        messages: {
            en: {
                title: 'Install on your PC',
                text: 'You can also install the app on your PC. For this you only need the Google Chrome Browser.',
                s1: 'Download and install the browser:',
                s2: 'Open the page and press the plus sign at the top in the address bar',
                s3_1: 'Hit',
                s3_2: 'Install'
            },
            de: {
                title: 'Auf deinem PC installieren',
                text: 'Du kannst die App auch auf deinem PC installieren. Dazu benötigst du nur den Google Chrome Browser.',
                s1: 'Lade dir den Browser herunter und installiere ihn:',
                s2: 'Öffne die Seite und drücke auf das Plus-Zeichen oben in der Addresszeile',
                s3_1: 'Klicke auf',
                s3_2: 'Installieren'
            }
        }
    }

}
</script>
