<template>
    <v-card flat style="height:100%;">
        <v-card-title>
            {{ $t('weight') }}
        </v-card-title>
        <v-container>
            <v-row justify="space-around" align="center">
                <v-col cols="12" class="text-center display-1">
                    {{ vals.current || '-' }}
                </v-col>
            </v-row>
            <v-spacer />
            <v-row justify="space-between" dense align="baseline">
                <v-col cols="12">
                    <v-progress-linear :value="vals.percentage" height="25">
                        <strong>{{ vals.percentage }} %</strong>
                    </v-progress-linear>
                </v-col>
                <v-col cols="auto" class="text-center">
                    {{ vals.first || '-' }}
                </v-col>
                <v-col cols="auto" class="text-center">
                    {{ vals.goal || '-' }}
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {

    computed: {

        vals () {
            var toReturn = {
                first: this.$store.getters['logBody/first'].weight || 0,
                current: this.$store.getters['logBody/current'].weight || 0,
                goal: this.$store.state.destiny.goals.weight || 0,
                percentage: null
            }

            toReturn.percentage = (((toReturn.current - toReturn.goal) / (toReturn.first - toReturn.goal)) * 100) || 0

            return toReturn
        }

    },

    i18n: {
        messages: {
            en: {
                weight: 'Weight'
            },
            de: {
                weight: 'Gewicht'
            }
        }
    }

}
</script>
