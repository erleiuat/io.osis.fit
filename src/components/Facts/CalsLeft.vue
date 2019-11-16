<template>
    <v-card flat :color="vals.color">
        <v-card-title>
            {{ $t('leftCals') }}
        </v-card-title>
        <v-container>
            <v-row justify="space-around" no-gutters align="center">
                <v-col cols="6" class="text-center">
                    <v-progress-circular :rotate="-90" :size="100" :width="15" :value="vals.percentage">
                        {{ vals.percentage }} %
                    </v-progress-circular>
                </v-col>
                <v-col cols="6" class="display-1 text-center">
                    {{ vals.remaining }}
                </v-col>
            </v-row>
        </v-container>
        <v-card-text class="text-center">
            <b>{{ vals.used || '-' }}</b> {{ $t('of') }} {{ vals.total || '-' }} {{ $t('unit.calories.short') }} {{ $t('used') }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {

    props: {
        daily: {
            type: Boolean,
            default: true
        },
        weekly: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        divideRemaining (remainingWeek) {
            var today = new Date()
            today = today.getDay()
            if (today === 0) return remainingWeek / 1 // So
            else if (today === 1) return remainingWeek / 7 // Mo
            else if (today === 2) return remainingWeek / 6 // Di
            else if (today === 3) return remainingWeek / 5 // Mi
            else if (today === 4) return remainingWeek / 4 // Do
            else if (today === 5) return remainingWeek / 3 // Fr
            else if (today === 6) return remainingWeek / 2 // Sa
            else return false
        }
    },

    computed: {

        vals () {
            var toReturn = {
                total: false,
                used: false,
                remaining: false,
                percentage: null,
                color: null
            }

            var weekPossible = this.$store.getters['destiny/possibleCals'].weekly
            if (!weekPossible) return toReturn

            weekPossible += this.$store.getters['logActivity/totalWeek'] || 0
            var weekUsed = this.$store.getters['logFood/totalWeek'].calories || 0
            var weekRemaining = weekPossible - weekUsed

            if (this.weekly) {
                toReturn.total = Math.round(weekPossible)
                toReturn.used = Math.round(weekUsed)
                toReturn.remaining = Math.round(weekRemaining)
            } else {
                toReturn.used = this.$store.getters['logFood/totalDay'].calories || 0
                toReturn.total = this.divideRemaining(weekRemaining + toReturn.used)
                toReturn.remaining = Math.round(toReturn.total - toReturn.used)
            }

            toReturn.percentage = Math.round(((toReturn.used / toReturn.total) * 100))
            if (toReturn.percentage >= 80 && toReturn.percentage < 95) toReturn.color = 'success'
            else if (toReturn.percentage >= 95 && toReturn.percentage <= 100) toReturn.color = 'warning'
            else if (toReturn.percentage > 100) toReturn.color = 'error'
            return toReturn
        }

    },

    i18n: {
        messages: {
            en: {
                leftCals: 'Remaining Calories',
                of: 'of',
                used: 'used'
            },
            de: {
                leftCals: 'Verbleibende Kalorien',
                of: 'von',
                used: 'verbraucht'
            }
        }
    }

}
</script>
