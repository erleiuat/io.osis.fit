<template>
    <v-container>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="12" sm="" class="text-center">
                <span class="title">
                    {{ $t('timeRemaining') }}
                </span><br />
                {{ remaining.days || '-' }} {{ $t('days') }}
                <span class="caption">
                    ({{ remaining.weeks || '-' }} {{ $t('weeks') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col cols="12" sm="" class="text-center">
                <span class="title">
                    {{ $t('requiredLoss') }}
                </span><br />
                {{requiredLoss.total}} {{ $t('unit.kilogram.short') }}
                <span class="caption">
                    ({{requiredLoss.perWeek}} {{ $t('perWeek') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col cols="12" sm="" class="text-center">
                <span class="title">
                    {{ $t('avgCalsPerDay') }}
                </span><br />
                {{ avgCalsPerDay ? '≈ ' + avgCalsPerDay : '-' }} {{ $t('unit.calories.short') }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    computed: {

        remaining () {
            return this.$store.getters['destiny/timeRemaining']
        },

        requiredLoss () {
            return this.$store.getters['destiny/lossInKg']
        },

        avgCalsPerDay () {
            return this.$store.getters['destiny/possibleCals'].daily
        }

    },

    i18n: {
        messages: {
            en: {
                timeRemaining: 'Time left',
                requiredLoss: 'Required weight loss',
                perWeek: '/ Week',
                days: 'Days',
                weeks: 'Weeks',
                avgCalsPerDay: 'Ø Calories / Day'
            },
            de: {
                timeRemaining: 'Verbleibende Zeit',
                requiredLoss: 'Nötiger Gewichtsverlust',
                perWeek: '/ Woche',
                days: 'Tage',
                weeks: 'Wochen',
                avgCalsPerDay: 'Ø Kalorien / Tag'
            }
        }
    }

}
</script>
