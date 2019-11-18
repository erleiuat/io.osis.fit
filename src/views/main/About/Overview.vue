<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" md="11">
                <v-card>

                    <v-card-title>
                        <span class="headline text-center">
                            {{ $t('about') }} {{ $store.state.app.title }}
                        </span>
                    </v-card-title>
                    <v-card-text>
                        Made by <a href="https://github.com/erleiuat">Erleiuat</a> with <v-icon>mdi-heart-outline</v-icon>
                        (and <a href="https://vuejs.org/">Vue.js</a> + PHP)
                    </v-card-text>
                    <v-divider />

                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12">
                                <span class="subtitle-1">
                                    {{ $t('details') }}
                                </span>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'about.imprint'}" block depressed color="primary">
                                    {{ $t('imprint') }}
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'about.cookie'}" block depressed color="primary">
                                    {{ $t('cookie') }}
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'about.terms'}" block depressed color="primary">
                                    {{ $t('terms') }}
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'about.privacy'}" block depressed color="primary">
                                    {{ $t('privacy') }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider />

                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12">
                                <span class="subtitle-1">
                                    {{ $t('needHelp') }}
                                </span><br />
                                <span class="body-2">
                                    {{ $t('helpText') }}
                                </span>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'support'}" block depressed color="primary">
                                    {{ $t('faqBtn') }}
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn :to="{name: 'support.contact'}" block depressed color="primary">
                                    {{ $t('contactBtn') }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider />

                    <v-card-text>
                        <Preview />
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Preview from '@/views/main/Support/Install/Preview'

export default {

    components: {
        Preview
    },

    i18n: {
        messages: {
            en: {
                about: 'About',
                checkout: 'Check this out:',
                project: 'Project',
                details: 'Details',
                needHelp: 'Need Help?',
                imprint: 'Imprint',
                cookie: 'Cookie-Policy',
                terms: 'Terms and conditions',
                privacy: 'Privacy-Policy',
                faqBtn: 'Frequently asked questions',
                contactBtn: 'Contact-Form',
                helpText: `
                We offer our users support in the operation of the application and 
                are dependent on constructive criticism in order to constantly improve our offer.
                Also our app is not 100% error free, which is why we are always thankful when
                Users should inform us of any errors. For these concerns and all others one can
                contact us via the contact form or by mail.
                `
            },
            de: {
                about: 'Über',
                checkout: 'Schau dir das an:',
                project: 'Projekt',
                details: 'Details',
                needHelp: 'Brauchst du Hilfe?',
                imprint: 'Impressum',
                cookie: 'Cookie-Richtlinien',
                terms: 'Allgemeine Geschäftsbedingungen',
                privacy: 'Datenschutzerklärung',
                faqBtn: 'Oft gestellte Fragen',
                contactBtn: 'Kontaktformular',
                helpText: `
                Wir bieten unseren Nutzern Unterstützung bei der Bedienung der Anwendung und 
                sind abhängig von konstruktiver Kritik, um unser Angebot stetig zu verbessern.
                Auch ist unsere App nicht zu 100% fehlerfrei, weshalb wir immer dankbar sind, wenn
                Nutzer uns auf Fehler aufmerksam machen. Für diese Anliegen und alle anderen kann man
                uns über das Kontaktformular oder per Mail erreichen.
                `
            }
        }
    }

}
</script>
