<template>
    <v-container>
        <v-row no-gutters justify="center" align="center">
            <v-col class="text-center">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <span v-on="on" class="title">
                            {{ $t('bmr') }} <v-icon x-small>mdi-help-circle-outline</v-icon>
                        </span>
                    </template>
                    <span>{{ $t('waaatBMR') }}</span>
                </v-tooltip><br />
                {{ bmr || '-' }} {{ $t('unit.calories.short') }} / {{ $t('day') }}
            </v-col>
            <v-divider vertical />
            <v-col class="text-center">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <span v-on="on" class="title">
                            {{ $t('bmrPal') }} <v-icon x-small>mdi-help-circle-outline</v-icon>
                        </span>
                    </template>
                    <span>{{ $t('waaatBMRPAL') }}</span>
                </v-tooltip><br />
                {{ bmrPal || '-' }} {{ $t('unit.calories.short') }} / {{ $t('day') }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    computed: {

        bmr () {
            return this.$store.getters['destiny/bmr']
        },

        bmrPal () {
            return this.$store.getters['destiny/bmrPal']
        }

    },

    i18n: {
        messages: {
            en: {
                bmr: 'BMR',
                waaatBMR: '',
                bmrPal: 'BMR + PAL',
                waaatBMRPAL: '',
                day: 'Day'
            },
            de: {
                bmr: 'GU',
                waaatBMR: 'Grundumsatz',
                bmrPal: 'GU + PAL',
                waaatBMRPAL: 'Leistungsumsatz ( = Grundumsatz * PAL)',
                day: 'Tag'
            }
        }
    }

}
</script>
