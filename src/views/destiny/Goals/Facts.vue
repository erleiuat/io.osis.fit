<template>
    <v-container>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="12" sm="" class="text-center">
                <span class="caption">
                    {{ $t('timeRemaining') }}
                </span><br />
                {{ remaining.days || '-' }} {{ $t('days') }}
                <span class="caption">
                    ({{ remaining.weeks || '-' }} {{ $t('weeks') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col cols="12" sm="" class="text-center">
                <span class="caption">
                    {{ $t('requiredLoss') }}
                </span><br />
                {{ Math.round(requiredLoss.total * 10) / 10 }} {{ $t('unit.kilogram.short') }}
                <span class="caption">
                    ({{ Math.round(requiredLoss.perWeek * 10) / 10 }} {{ $t('perWeek') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col cols="12" sm="" class="text-center">
                <span class="caption">
                    {{ $t('avgCalsPerDay') }}
                </span><br />
                {{ avgCalsPerDay ? '≈ ' + Math.round(avgCalsPerDay * 10) / 10 : '-' }} {{ $t('unit.calories.short') }}
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
