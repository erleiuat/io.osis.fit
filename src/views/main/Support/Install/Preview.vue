<template>
    <v-row>
        <v-col cols="12">
            <span class="headline">{{ $t('install') }}</span><br />
            <span class="caption">{{ $t('installText') }}</span>
        </v-col>
        <v-col md="" class="text-center">
            <v-icon x-large class="pb-3">mdi-android-head</v-icon>
            <v-btn :to="{ name: 'support.install', query: { plattform: 'android' } }" block depressed color="secondary">
                Android
            </v-btn>
        </v-col>
        <v-col md="" class="text-center">
            <v-icon x-large class="pb-3">mdi-apple</v-icon>
            <v-btn :to="{ name: 'support.install', query: { plattform: 'apple' } }" block depressed color="secondary">
                Apple
            </v-btn>
        </v-col>
        <v-col md="" class="text-center">
            <v-icon x-large class="pb-3">mdi-windows</v-icon>
            <v-btn :to="{ name: 'support.install', query: { plattform: 'windows' } }" block depressed color="secondary">
                Windows
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {

    i18n: {
        messages: {
            en: {
                install: 'Install App',
                installText: `
                    We rely on the latest technologies, which is why our app is not available in the App Store or Google Play Store. 
                    The technologies allow us to install apps without these stores, which saves tons of (unnecessary) effort.
                    At the same time, many errors that could be caused by a store-app are directly eliminated.
                    For you it makes no difference at all, because the operations and design are identical everywhere.
                    Choose your platform to find out how to "install" the app:
                `
            },
            de: {
                install: 'App installieren',
                installText: `
                    Wir setzen auf neuste Technologien, weshalb unsere App nicht im App Store bzw. Google Play Store zur Verfügung steht. 
                    Die Technologien erlauben uns, Apps auch ohne diese Stores zu installieren, wodurch tonnenweise (unnötiger) Aufwand vermieden werden kann.
                    Gleichzeitig werden viele Fehler direkt eliminiert, welche durch eine Store-App bestehen könnten.
                    Für dich macht es überhaupt keinen Unterschied, da die Bedienung sowie das Design überall identisch sind.
                    Wähle deine Plattform um herauszufinden wie du die App "installieren" kannst:
                `
            }
        }
    }

}
</script>
