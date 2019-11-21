<template>
    <v-card flat style="height:100%;">
        <v-card-title>
            {{ $t('stats') }}
        </v-card-title>
        <v-container>
            <v-row justify="space-between" dense align="center">
                <v-col cols="auto" class="text-center">
                    {{ $t('activityCals') }}
                </v-col>
                <v-col cols="auto" class="text-center title">
                    {{ vals.activity || '0' }} {{ $t('unit.calories.short') }}
                </v-col>
            </v-row>
            <v-divider />
            <v-row justify="space-between" dense align="center">
                <v-col cols="auto" class="text-center">
                    {{ $t('fats') }}
                </v-col>
                <v-col cols="auto" class="text-center title">
                    {{ vals.fat || '0' }} {{ $t('unit.gram.short') }}
                </v-col>
            </v-row>
            <v-divider />
            <v-row justify="space-between" dense align="center">
                <v-col cols="auto" class="text-center">
                    {{ $t('proteins') }}
                </v-col>
                <v-col cols="auto" class="text-center title">
                    {{ vals.protein || '0' }} {{ $t('unit.gram.short') }}
                </v-col>
            </v-row>
        </v-container>
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

    computed: {

        vals () {
            var tmp = null
            var toReturn = {
                activity: null,
                fat: null,
                protein: null
            }

            if (this.weekly) {
                tmp = this.$store.getters['logFood/totalWeek']
                toReturn.activity = Math.round(this.$store.getters['logActivity/totalWeek'] * 10) / 10
            } else {
                tmp = this.$store.getters['logFood/totalDay']
                toReturn.activity = Math.round(this.$store.getters['logActivity/totalDay'] * 10) / 10
            }

            toReturn.fat = Math.round(tmp.fat * 10) / 10
            toReturn.protein = Math.round(tmp.protein * 10) / 10
            return toReturn
        }

    },

    i18n: {
        messages: {
            en: {
                stats: 'Statistics',
                activityCals: 'Calories burned',
                fats: 'Fats',
                proteins: 'Proteins'
            },
            de: {
                stats: 'Statistik',
                activityCals: 'Kalorien verbrannt',
                fats: 'Fette',
                proteins: 'Proteine'
            }
        }
    }

}
</script>
