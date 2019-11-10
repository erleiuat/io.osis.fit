<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12">
                <span class="display-1">{{ $t('support') }}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-divider />
            </v-col>
            <v-col cols="12">
                <span class="headline">{{ $t('faq') }}</span><br />
                <span class="caption">{{ $t('faqText') }}</span>
            </v-col>
            <v-col cols="12">
                <v-divider />
            </v-col>
        </v-row>
        <Preview />
        <v-row justify="center" align="center">
            <v-col cols="12">
                <v-divider />
            </v-col>
            <v-col cols="12" class="headline">
                {{ $t('contact') }}
            </v-col>
            <v-col cols="auto" class="caption">
                {{ $t('contactText') }}
                <v-btn block depressed :to="{name: 'support.contact'}">
                {{ $t('contactBtn') }}
                </v-btn>
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
                support: 'Support',
                faq: 'Frequently asked questions',
                contact: 'Contact',
                contactText: 'Do you still have questions?',
                contactBtn: 'Contact us',
                faqText: 'Check the frequently asked questions before contacting us. They may be able to help you faster than our support team.'
            },
            de: {
                support: 'Support',
                faq: 'Oft gestellte Fragen',
                contact: 'Kontakt',
                contactText: 'Hast du noch weitere Fragen?',
                contactBtn: 'Kontaktiere uns!',
                faqText: 'Durchsuche die häufig gestellten Fragen bevor du uns kontaktierst. Sie können dir vielleicht schneller helfen als unser Support-Team.'
            }
        }
    }

}
</script>
