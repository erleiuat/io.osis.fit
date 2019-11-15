<template>
    <v-container>
        <v-row no-gutters justify="center" align="center">
            <v-col class="text-center">
                <span class="title">
                    {{ $t('timeRemaining') }}
                </span><br />
                {{ remaining.days || '-' }} {{ $t('days') }}
                <span class="caption">
                    ({{ remaining.weeks || '-' }} {{ $t('weeks') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col class="text-center">
                <span class="title">
                    {{ $t('requiredLoss') }}
                </span><br />
                {{requiredLoss.total}} {{ $t('unit.kilogram.short') }}
                <span class="caption">
                    ({{requiredLoss.perWeek}} {{ $t('perWeek') }})
                </span>
            </v-col>
            <v-divider vertical />
            <v-col class="text-center">
                <span class="title">
                    {{ $t('avgCalsPerDay') }}
                </span><br />
                ≈ 1900 {{ $t('unit.calories.short') }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    computed: {

        remaining () {
            if (!this.$store.state.destiny.goals.date) return false
            var date1 = new Date()
            var date2 = new Date(this.$store.state.destiny.goals.date)
            var DifferenceInDays = Math.round((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))
            return {
                days: DifferenceInDays,
                weeks: Math.round(DifferenceInDays / 7 * 10) / 10
            }
        },

        requiredLoss () {
            var current = (this.$store.getters['logBody/current'] ? this.$store.getters['logBody/current'].weight : false)
            var goal = this.$store.state.destiny.goals.weight || false
            if (!current || !goal) return { total: '-', perWeek: '-' }
            var total = current - goal
            return {
                total: total,
                perWeek: (this.remaining ? Math.round(total / this.remaining.weeks * 10) / 10 : '-')
            }
        },

        avgCalsPerDay () {
            // TODO
            return false
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
